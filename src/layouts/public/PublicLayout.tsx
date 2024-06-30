import { useThemeContext } from "contexts/theme/Theme";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "layouts/public/components/footer/Footer";
import Header from "./components/header/Header";

export default function PublicLayout() {
  const { theme } = useThemeContext();

  return (
    <Box
      display="flex"
      minHeight="100dvh"
      flexDirection="column"
      justifyContent="space-between"
      bgcolor={theme?.colors?.background?.secondary}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}
