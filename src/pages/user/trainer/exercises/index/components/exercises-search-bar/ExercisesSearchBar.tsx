import { TextField, IconButton } from "@mui/material";
import Icons from "lib/utils/icons/icons";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
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
        startAdornment: <Icons.search />,
        endAdornment: searchValue ? (
          <IconButton size="small" onClick={() => setSearchValue("")}>
            <Icons.close fontSize="small" />
          </IconButton>
        ) : null,
      }}
    />
  );
}
