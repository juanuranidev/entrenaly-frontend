import { Box } from "@mui/material";

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
  return <Box>
    <p>Test</p>
  </Box>;
}
