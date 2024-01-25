import {
  Alert,
  Box,
  Card,
  Grid,
  Stack,
  useTheme,
  TextField,
  Typography,
  IconButton,
  Button,
  Chip,
} from "@mui/material";
import { exercises } from "../../../lib/utils/exercises";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PageTitle from "components/common/page-title/PageTitle";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import AddExerciseDrawer from "components/drawers/add-exercise-drawer/AddExerciseDrawer";
import EditIcon from "@mui/icons-material/Edit";

export default function Exercises() {
  const theme: any = useTheme();

  const [searchValue, setSearchValue] = useState("");
  const [openDrawerAddExercise, setOpenDrawerAddExercise] = useState(false);

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      video: "",
      format: "",
      muscularGroup: "",
    },
    onSubmit(values) {
      console.log(values);
      setOpenDrawerAddExercise(false);
    },
  });

  return (
    <Box>
      <PageTitle
        title="Ejercicios"
        action={
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenDrawerAddExercise(true)}
          >
            Agregar nuevo
          </Button>
        }
      />
      <Card>
        <Grid container spacing={theme.spacing(3)}>
          <Grid item xs={12}>
            <Alert severity="info">
              Acá podrás visualizar todos los ejercicios con los que podrás
              armar tus planes de entrenamiento
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Buscar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon />,
                endAdornment: searchValue ? (
                  <IconButton size="small" onClick={() => setSearchValue("")}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                ) : null,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" flexWrap="wrap">
              {filteredExercises.map((exercise) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  key={exercise?.name}
                  p={theme.spacing(2)}
                  margin={theme.spacing(1)}
                  width={{
                    base: `calc(100% - ${theme.spacing(2)})`,
                    sm: `calc(50% - ${theme.spacing(2)})`,
                    md: `calc(25% - ${theme.spacing(2)})`,
                    lg: `calc(20% - ${theme.spacing(2)})`,
                  }}
                  boxShadow={theme.customShadows.secondary}
                >
                  <Grid container mt={1} direction="row" alignItems="center">
                    <Grid item xs={10}>
                      <Chip
                        variant="outlined"
                        color="primary"
                        size="small"
                        label={exercise.category}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton size="small">
                        <EditIcon color="primary" fontSize="small" />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <img
                    src={exercise.video}
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    mt={1}
                    lineHeight="1"
                    align="left"
                    fontSize={16}
                    fontWeight={600}
                    // pl={theme.spacing(2)}
                  >
                    {exercise.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Card>
      <AddExerciseDrawer
        formik={formik}
        open={openDrawerAddExercise}
        onClose={() => setOpenDrawerAddExercise(false)}
      />
    </Box>
  );
}
