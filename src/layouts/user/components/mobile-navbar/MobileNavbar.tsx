import { Box, Stack } from "@mui/material";
import Icons from "lib/utils/icons/icons";

type navbarItem = {
  title: string;
  url: string;
  icon: JSX.Element;
};

type Props = {
  navbarItems: navbarItem[] | [];
};

export default function MobileNavbar({ navbarItems }: Props) {
  console.log(navbarItems);
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        height: "5rem",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <Stack flexDirection="row" justifyContent="center" alignItems="center">
        <Icons.person style={{ flexGrow: 1 }} />
        <Icons.plans style={{ flexGrow: 1 }} />
        <Icons.dumbbell style={{ flexGrow: 1 }} />
      </Stack>
    </Box>
  );
}
