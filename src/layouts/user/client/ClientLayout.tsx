import BaseLayout from "../components/base-layout/BaseLayout";
import Icons from "lib/utils/icons/icons";

type navbarItem = {
  title: string;
  url: string;
  icon: JSX.Element;
};

export default function ClientLayout() {
  const navbarItems: navbarItem[] | [] = [
    {
      title: "Planes",
      url: "/client/plans",
      icon: <Icons.plans fontSize="medium" />,
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
