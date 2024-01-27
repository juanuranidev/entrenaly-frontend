import { TextField, IconButton } from "@mui/material";
import { defaultExercises } from "../../../../lib/utils/defaultExercises";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  exercises: any;
  setExercises: any;
};

export default function ExercisesSearchBar({ exercises, setExercises }: Props) {
  const [searchValue, setSearchValue] = useState("");

  const handleFindExercises = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);

    if (!value) {
      return setExercises(defaultExercises);
    }

    const filteredExercises = exercises.filter((exercise: any) =>
      exercise.name.toLowerCase().includes(value.toLowerCase())
    );

    setExercises(filteredExercises);
  };

  return (
    <TextField
      fullWidth
      label="Buscar"
      value={searchValue}
      onChange={(e) => handleFindExercises(e)}
      InputProps={{
        startAdornment: <SearchIcon />,
        endAdornment: searchValue ? (
          <IconButton size="small" onClick={() => setSearchValue("")}>
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : null,
      }}
    />
  );
}
