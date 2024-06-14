import { DrawerStyles } from "./Styles";
import { useThemeContext } from "contexts/theme/Theme";
import { Box, List, useMediaQuery, IconButton } from "@mui/material";
import LogoWithVersion from "components/common/logo-with-version/LogoWithVersion";
import NavbarItem from "../navbar-item/NavbarItem";
import Icons from "lib/utils/icons/icons";
import { useState } from "react";
import InstallAppDialog from "components/dialogs/install-app-dialog/InstallAppDialog";

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
  const isLargeScreen: boolean = useMediaQuery(theme.breakpoints.up("md"));

  const [installAppDialog, setInstallAppDialog] = useState(false);

  return (
    <DrawerStyles
      theme={theme}
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      variant={isLargeScreen ? "permanent" : "temporary"}
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
          <LogoWithVersion />
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
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setInstallAppDialog(true)}>
            <Icons.download />
          </IconButton>
        </Box>
      </Box>
      <InstallAppDialog
        open={installAppDialog}
        close={() => setInstallAppDialog(false)}
      />
    </DrawerStyles>
  );
}
