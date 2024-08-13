import {
  MenuItem,
  TextField,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import { createExerciseDescriptionService } from "services/exercise/exercise.services";
import { ExerciseDescription } from "lib/types/exercise/exercise.types";
import { useEffect, useState } from "react";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  defaultValue: string;
  handleChange: (value: any) => void;
  exercisesDescriptions: ExerciseDescription[];
  handleRefetchGetExercisesDescriptions: () => Promise<void>;
};

export default function DescriptionsInput({
  defaultValue,
  handleChange,
  exercisesDescriptions,
  handleRefetchGetExercisesDescriptions,
}: Props) {
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
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleManageDefaultValues = () => {
    if (!defaultValue || !exercisesDescriptions.length) return;

    setInputValue(defaultValue ?? "");

    const exerciseDescription = exercisesDescriptions.find(
      (obj: ExerciseDescription) => obj.description === defaultValue
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
    <Autocomplete
      size="small"
      value={autocompleteValue}
      onChange={(_event: any, newValue: string | null) => {
        setAutocompleteValue(newValue);
      }}
      inputValue={inputValue}
      getOptionLabel={(option) => option?.description || ""}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
        handleChange(newInputValue);
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
  );
}
