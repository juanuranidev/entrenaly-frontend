import {
  Box,
  Chip,
  Stack,
  Divider,
  MenuItem,
  TextField,
  Typography,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import {
  Exercise,
  ExerciseDescription,
} from "lib/types/exercise/exercise.types";
import React, { useEffect, useState } from "react";
import { createExerciseDescriptionService } from "services/exercise/exercise.services";
import { useThemeContext } from "contexts/theme/Theme";
import { PlanDay } from "lib/types/plan/plan.types";

type Props = {
  day: PlanDay;
  formik: any;
  exercise: Exercise;
  exercisesDescriptions: ExerciseDescription[];
  handleRefetchGetExercisesDescriptions: () => Promise<void>;
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
  const [inputValue, setInputValue] = useState<string>("");
  const [autocompleteValue, setAutocompleteValue] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePostExerciseDescription = async () => {
    setIsLoading(true);
    try {
      const response = await createExerciseDescriptionService(inputValue);

      await handleRefetchGetExercisesDescriptions();
      setAutocompleteValue(response);
      handleChangeDescripcion(response?.description);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleChangeDescripcion = (description: string) => {
    const exerciseFormatted = {
      ...exercise,
      description,
    };

    const newExercises = day?.exercises?.map((e: Exercise) => {
      if (e.name === exercise.name) {
        return exerciseFormatted;
      }

      return e;
    });

    const newDays = formik?.values?.days?.map((d: PlanDay) => {
      if (d.dayOfWeek?.id === day?.dayOfWeek?.id) {
        return { ...day, exercises: newExercises };
      }

      return d;
    });

    formik.setFieldValue("days", newDays);
  };

  const handleManageDefaultValues = () => {
    if (!exercise || !exercisesDescriptions.length) return;

    setInputValue(exercise?.description ?? "");

    const exerciseDescription = exercisesDescriptions.find(
      (obj: ExerciseDescription) => obj.description === exercise.description
    );
    setAutocompleteValue(exerciseDescription);
  };

  const handleRenderNoOptionsText = () => {
    if (isLoading) {
      return <CircularProgress size={15} />;
    }

    if (inputValue) {
      return (
        <MenuItem
          disabled={isLoading}
          autoFocus={false}
          sx={{ margin: 0 }}
          onClick={handlePostExerciseDescription}
        >
          {`Guardar: ${inputValue}`}
        </MenuItem>
      );
    }

    return null;
  };

  useEffect(() => {
    handleManageDefaultValues();
  }, []);

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
          {exercise?.hasUser ? (
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
            onChange={(_event: any, newValue: string | null) => {
              setAutocompleteValue(newValue);
            }}
            inputValue={inputValue}
            getOptionLabel={(option) => option?.description || ""}
            onInputChange={(_event, newInputValue) => {
              setInputValue(newInputValue);
              handleChangeDescripcion(newInputValue);
            }}
            autoFocus={false}
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
            autoSelect={false}
            noOptionsText={handleRenderNoOptionsText()}
          />
        </Box>
      </Stack>
      <Divider />
    </React.Fragment>
  );
}
