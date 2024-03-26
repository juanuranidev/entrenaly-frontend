import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  searchValue: string;
  setSearchValue: any;
};

export default function ExercisesSearchBar({
  searchValue,
  setSearchValue,
}: Props) {
  return (
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
  );
}
