import {
  Box,
  Grid,
  Chip,
  Select,
  Avatar,
  MenuItem,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { useReadClients } from "hooks/client/useReadClients";
import { useReadPlansCategories } from "hooks/plan/useReadPlansCategories";
import { useThemeContext } from "contexts/theme/Theme";
import { useEffect } from "react";
import { PlanCategory } from "lib/types/plan/plan.types";
import { Client } from "lib/types/client/client.types";

type Props = {
  formik: any;
  plan: any;
};

export default function MainInformation({ formik, plan }: Props) {
  const { theme } = useThemeContext();
  const { clients } = useReadClients();
  const { plansCategories } = useReadPlansCategories();

  const handleSetInitialClients = () => {
    if (!plan) return;
    if (!clients.length) return;

    const clientsSelected = clients.filter((client: any) =>
      plan.clients.includes(client.id)
    );

    formik.setFieldValue("clients", clientsSelected);
  };

  useEffect(() => {
    handleSetInitialClients();
  }, [plan, clients]);

  return (
    <>
      <Grid item xs={12}>
        <Typography fontWeight={600} fontSize={16}>
          Informacion principal
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="name"
          label="Nombre del plan*"
          value={formik?.values?.name}
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          error={
            Boolean(formik?.touched?.name) && Boolean(formik?.errors?.name)
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          select
          fullWidth
          name="categoryId"
          label="Categoria del plan*"
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          value={formik?.values?.categoryId}
          error={
            Boolean(formik?.touched?.categoryId) &&
            Boolean(formik?.errors?.categoryId)
          }
        >
          {plansCategories.length
            ? plansCategories?.map((planCategory: PlanCategory) => (
                <MenuItem key={planCategory?.id} value={planCategory?.id}>
                  {planCategory?.name}
                </MenuItem>
              ))
            : null}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="select-clients">Clientes a asignar</InputLabel>
          <Select
            multiple
            name="clients"
            id="selectClients"
            labelId="selectClients"
            label="Clientes a asignar"
            value={formik?.values?.clients}
            input={
              <OutlinedInput
                label="Clientes a asignar"
                error={
                  Boolean(formik?.touched?.clients) &&
                  Boolean(formik?.errors?.clients)
                }
              />
            }
            error={
              Boolean(formik?.touched?.clients) &&
              Boolean(formik?.errors?.clients)
            }
            onChange={(e: any) =>
              formik?.setFieldValue("clients", e.target.value)
            }
            renderValue={(selected: any) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: theme?.spacing(2),
                }}
              >
                {selected?.map((value: Client) => (
                  <Chip
                    key={value.id}
                    color="primary"
                    label={<Typography>{value.name}</Typography>}
                    avatar={
                      <Avatar
                        alt={value?.name}
                        src={value?.image}
                        sx={{ height: 25, width: 25 }}
                      />
                    }
                  />
                ))}
              </Box>
            )}
          >
            {clients.length > 0
              ? clients?.map((client: any) => (
                  <MenuItem key={client?.id} value={client}>
                    <Avatar
                      alt={client?.name}
                      src={client?.image}
                      sx={{
                        width: 25,
                        height: 25,
                        marginRight: theme?.spacing(1),
                      }}
                    />
                    <Typography>{client?.name}</Typography>
                  </MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
