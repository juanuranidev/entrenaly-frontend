import { Box, Grid, Button, IconButton } from "@mui/material";
import { createErrorToastLib, createSuccessToastLib } from "lib/utils/toast";
import { updateClientMedicalInformationService } from "services/client/client.services";
import { useThemeContext } from "contexts/theme/Theme";
import { useFormik } from "formik";
import { useState } from "react";
import { Client } from "lib/types/client/client.types";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import Icons from "lib/utils/icons/icons";
import ModalTabs from "./components/moda-tabs/ModalTabs";
import MedicalInformationTab from "./components/medical-information-tab/MedicalInformationTab";
import TypeOfBodyTab from "./components/type-of-body-tab/TypeOfBodyTab";

type Props = {
  open: boolean;
  onClose: () => void;
  onboarding?: boolean;
  onSubmit?: () => Promise<void>;
  clientSelected: Client | null;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function UpdateMedicalInformationForm({
  open,
  onClose,
  onSubmit,
  onboarding,
  clientSelected,
}: Props) {
  const { theme } = useThemeContext();

  const [tabValue, setTabValue] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      goals: clientSelected?.goals || "",
      clientId: clientSelected?.id || "",
      height: clientSelected?.height || "",
      weight: clientSelected?.weight || "",
      typeOfBody: clientSelected?.typeOfBody || "",
      injuries: clientSelected?.injuries || "",
      medicalConditions: clientSelected?.medicalConditions || "",
    },
    enableReinitialize: true,
    async onSubmit(values) {
      setIsLoading(true);
      try {
        await updateClientMedicalInformationService(values);

        if (onSubmit) {
          await onSubmit();
        }

        createSuccessToastLib(
          onboarding
            ? "Datos actualizadons con éxito"
            : "Cliente actualizado con éxito"
        );
        onClose();
      } catch (error) {
        createErrorToastLib("Error al actualizar los datos");
        console.log(error);
      }
      setIsLoading(false);
    },
  });
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Box
        {...other}
        overflow="auto"
        role="tabpanel"
        hidden={value !== index}
        height="calc(100% - 10rem)"
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {children}
          </Grid>
        )}
      </Box>
    );
  }

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <ModalTitle
        title="Editar Información médica"
        action={
          <IconButton onClick={onClose}>
            <Icons.close />
          </IconButton>
        }
      />
      <ModalTabs tabValue={tabValue} setTabValue={setTabValue} />
      <CustomTabPanel value={tabValue} index={0}>
        <MedicalInformationTab formik={formik} onboarding={onboarding} />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <TypeOfBodyTab formik={formik} />
      </CustomTabPanel>
      <Box py={theme?.spacing(4)} bgcolor={theme?.colors?.background?.primary}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          disabled={isLoading}
          onClick={() => formik.handleSubmit()}
        >
          Guardar
        </Button>
      </Box>
    </BaseDrawer>
  );
}
