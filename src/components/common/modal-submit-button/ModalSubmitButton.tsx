import { Button } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { ModalSubmitButtonBoxStyled } from "./Styles";

type Props = {
  message: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function ModalSubmitButton({
  message,
  onClick,
  disabled = false,
}: Props) {
  const { theme } = useThemeContext();

  return (
    <ModalSubmitButtonBoxStyled theme={theme}>
      <Button
        fullWidth
        color="primary"
        onClick={onClick}
        variant="contained"
        disabled={disabled}
      >
        {message}
      </Button>
    </ModalSubmitButtonBoxStyled>
  );
}
