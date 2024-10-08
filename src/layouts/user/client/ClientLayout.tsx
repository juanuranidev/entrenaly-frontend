import Icons from "lib/utils/icons/icons";
import BaseLayout from "../components/base-layout/BaseLayout";
import { navbarItem } from "../lib/types";

export default function ClientLayout() {
  const navbarItems: navbarItem[] | [] = [
    {
      title: "Planes",
      url: "/client/plans",
      icon: <Icons.plans fontSize="small" />,
    },
  ];

  const profileItems: navbarItem[] | [] = [
    // {
    //   title: "Perfil",
    //   url: "/client/profile",
    //   icon: <Icons.person fontSize="medium" />,
    // },
  ];

  return <BaseLayout navbarItems={navbarItems} profileItems={profileItems} />;
}
