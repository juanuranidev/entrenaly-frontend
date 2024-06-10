import { Box, Card, Grid, Button, Avatar, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useReadClient } from "hooks/client/useReadClient";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Icons from "lib/utils/icons/icons";
import moment from "moment";
import UpdateMedicalInformationForm from "components/forms/update-medical-informacion/UpdateMedicalInformationForm";

export default function ProfileView() {
  const { theme } = useThemeContext();
  const { clientId } = useParams();
  const { client, handleRefetchClient }: any = useReadClient(clientId);

  const [modalUpdateMedicalInformation, setModalUpdateMedicalInformation] =
    useState<boolean>(false);

  return (
    <Grid item container xs={12} sm={10} spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <Typography fontSize={20} fontWeight={600}>
          Perfil
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ display: "flex", gap: theme?.spacing(5) }}>
          <Avatar
            alt={client?.name}
            src={client?.image}
            sx={{ width: 65, height: 65 }}
          />
          <Box>
            <Typography fontSize={16} fontWeight={600} mb={theme?.spacing(0.5)}>
              {client?.name}
            </Typography>
            <Typography fontSize={12} fontWeight={500} sx={{ opacity: 0.8 }}>
              {client?.email}
            </Typography>
            <Typography fontSize={12} fontWeight={500} sx={{ opacity: 0.8 }}>
              Creado en {moment(client?.createdAt).format("DD/MM/YYYY")}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ display: "flex", gap: theme?.spacing(5) }}>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={6}>
              <Typography
                fontSize={18}
                fontWeight={600}
                mb={theme?.spacing(0.5)}
              >
                Ficha médica
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                variant="outlined"
                startIcon={<Icons.edit />}
                onClick={() => setModalUpdateMedicalInformation(true)}
              >
                Editar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Typography
                fontSize={16}
                fontWeight={500}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
              >
                Peso
              </Typography>
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
                ml={theme?.spacing(0.5)}
              >
                {client?.weight || "---"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                fontSize={16}
                fontWeight={500}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
              >
                Altura
              </Typography>
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
                ml={theme?.spacing(0.5)}
              >
                {client?.height || "---"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                fontSize={16}
                fontWeight={500}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
              >
                Objetivos
              </Typography>
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
                ml={theme?.spacing(0.5)}
              >
                {client?.goals || "---"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                fontSize={16}
                fontWeight={500}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
              >
                Lesiones
              </Typography>
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
                ml={theme?.spacing(0.5)}
              >
                {client?.injuries || "---"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                fontSize={16}
                fontWeight={500}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
              >
                Condiciones médicas
              </Typography>
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ opacity: 0.8 }}
                mb={theme?.spacing(0.5)}
                ml={theme?.spacing(0.5)}
              >
                {client?.medicalConditions || "---"}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <UpdateMedicalInformationForm
        clientSelected={client}
        open={modalUpdateMedicalInformation}
        onSubmit={() => handleRefetchClient()}
        onClose={() => setModalUpdateMedicalInformation(false)}
      />
    </Grid>
  );
}
