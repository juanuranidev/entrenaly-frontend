import { useThemeContext } from "contexts/theme/Theme";
import { Box, List, useMediaQuery, Drawer as MUIDrawer } from "@mui/material";
import Logo from "components/common/logo/Logo";
import NavbarItem from "../navbar-item/NavbarItem";

type Props = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
  navbarItems: any;
};

export default function Drawer({
  isDrawerOpen,
  setIsDrawerOpen,
  navbarItems,
}: Props) {
  const { theme } = useThemeContext();
  const isLargeScreen: boolean = useMediaQuery(
    theme?.breakpoints?.up("md") || "(min-width:900px)"
  );

  return (
    <MUIDrawer
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      variant={isLargeScreen ? "permanent" : "temporary"}
      style={{
        width: "14rem",
        padding: theme?.spacing(1),
        borderRight: `2px solid ${theme?.colors?.border?.primary}`,
      }}
      PaperProps={{
        style: {
          width: "14rem",
          padding: theme?.spacing(1),
          borderRight: `2px solid ${theme?.colors?.border?.primary}`,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" justifyContent="center" p={theme?.spacing(2)}>
          <Logo showVersion />
        </Box>
        <List>
          {navbarItems.map((item: any) => (
            <NavbarItem
              item={item}
              key={item?.title}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          ))}
        </List>
        <Box />
      </Box>
    </MUIDrawer>
  );
}
