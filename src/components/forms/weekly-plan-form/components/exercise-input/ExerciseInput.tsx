import {
  Box,
  Chip,
  Stack,
  Divider,
  MenuItem,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import React, { useEffect, useState } from "react";
import { postExerciseDescriptionService } from "services/exercise/exercise.services";

type Props = {
  day: any;
  formik: any;
  exercise: any;
  exercisesDescriptions: any;
  handleRefetchGetExercisesDescriptions: any;
};

export default function ExerciseInput({
  day,
  formik,
  exercise,
  exercisesDescriptions,
  handleRefetchGetExercisesDescriptions,
}: Props) {
  const isVariant = exercise?.variant;

  const { theme } = useThemeContext();
  const [inputValue, setInputValue] = useState("");
  const [autocompleteValue, setAutocompleteValue] = useState<any>("");

  const handleChangeDescripcion = (description: string) => {
    const exerciseFormatted = {
      ...exercise,
      description,
    };

    const newExercises = day?.exercises?.map((e: any) => {
      if (e.name === exercise.name) {
        return exerciseFormatted;
      }

      return e;
    });

    const newDays = formik?.values?.days?.map((d: any) => {
      if (d.dayOfWeekId === day?.dayOfWeekId) {
        return { ...day, exercises: newExercises };
      }

      return d;
    });

    formik.setFieldValue("days", newDays);
  };

  const handlePostExerciseDescription = async () => {
    try {
      const response = await postExerciseDescriptionService(inputValue);

      await handleRefetchGetExercisesDescriptions();
      setAutocompleteValue(response);
      handleChangeDescripcion(response?.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleManageDefaultValues = () => {
    if (!exercise) return;

    setInputValue(exercise?.description);

    const exerciseDescription = exercisesDescriptions.find(
      (obj: any) => obj.description === exercise.description
    );

    setAutocompleteValue(exerciseDescription);
  };

  useEffect(() => {
    handleManageDefaultValues();
  }, [exercise]);

  return (
    <React.Fragment>
      <Stack
        key={exercise.name}
        gap={theme?.spacing(4)}
        direction={{ base: "column", sm: "row" }}
      >
        <img
          alt={isVariant ? exercise?.variant?.name : exercise?.name}
          src={isVariant ? exercise?.variant?.image : exercise?.image}
          style={{
            width: "8rem",
            margin: "auto",
            objectFit: "contain",
            borderRadius: theme?.spacing(1),
            border: `2px solid ${theme?.colors?.border?.primary}`,
          }}
        />
        <Box width="100%">
          {exercise?.variant ? (
            <Chip
              size="small"
              color="success"
              label="Variante"
              variant="outlined"
            />
          ) : null}
          {exercise?.userId ? (
            <Chip
              size="small"
              color="success"
              label="Creado"
              variant="outlined"
            />
          ) : null}
          <Typography my={theme?.spacing(2)} fontWeight={600} fontSize={14}>
            {isVariant ? exercise?.variant?.name : exercise?.name}
          </Typography>
          <Autocomplete
            value={autocompleteValue}
            onChange={(event: any, newValue: string | null) => {
              setAutocompleteValue(newValue);
            }}
            inputValue={inputValue}
            getOptionLabel={(option) => option?.description || ""}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              handleChangeDescripcion(newInputValue);
            }}
            id="controllable-states-demo"
            options={exercisesDescriptions}
            renderInput={(params) => (
              <TextField
                autoFocus
                sx={{
                  backgroundColor: theme?.colors?.background?.primary,
                }}
                {...params}
                label="Descripción"
              />
            )}
            renderOption={(props, option) => (
              <MenuItem {...props}>{option?.description}</MenuItem>
            )}
            noOptionsText={
              <MenuItem
                sx={{ margin: 0 }}
                onClick={handlePostExerciseDescription}
              >
                {`Guardar: ${inputValue}`}
              </MenuItem>
            }
          />
        </Box>
      </Stack>
      <Divider />
    </React.Fragment>
  );
}
