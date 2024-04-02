import React, { useState } from "react";
import {
  Box,
  Chip,
  Grid,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddVariantForm from "components/forms/add-variant-form/AddVariantForm";

type Props = {
  exercise: any;
  handleGetExercises: () => void;
};

export default function ExerciseCard({ exercise, handleGetExercises }: Props) {
  const isVariant = exercise.variant;
  const theme: any = useTheme();

  const [exerciseSelected, setExerciseSelected] = useState(null);
  const [openFormAddVariant, setOpenFormAddVariant] = useState(false);

  const handleOpenFormEditExercise = (exercise: any) => {
    setExerciseSelected(exercise);
    setOpenFormAddVariant(true);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        key={exercise?.name}
        p={theme.spacing(2)}
        flexDirection="column"
        justifyContent="center"
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
              size="small"
              color="primary"
              variant="outlined"
              label={exercise?.category?.name}
            />
            {exercise.variant ? (
              <Chip
                style={{ marginLeft: theme.spacing(1) }}
                size="small"
                color="success"
                variant="outlined"
                label="Editado"
              />
            ) : null}
          </Grid>
          <Grid item xs={2}>
            <IconButton
              size="small"
              onClick={() => handleOpenFormEditExercise(exercise)}
            >
              <EditIcon color="primary" fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <img
          src={isVariant ? exercise?.variant?.video : exercise?.video}
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            objectFit: "contain",
            aspectRatio: "16/12",
          }}
        />
        <Typography
          mt={1}
          lineHeight="1.2"
          align="left"
          fontSize={16}
          fontWeight={600}
        >
          {isVariant ? exercise?.variant?.name : exercise?.name}
        </Typography>
      </Box>
      <AddVariantForm
        exerciseId={exercise?.id}
        open={openFormAddVariant}
        exerciseSelected={exerciseSelected}
        onClose={() => setOpenFormAddVariant(false)}
        onSubmit={() => handleGetExercises()}
      />
    </React.Fragment>
  );
}
