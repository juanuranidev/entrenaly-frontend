import BaseLayout from "components/common/base-layout/BaseLayout";
import Icons from "lib/utils/icons/icons";

export default function ClientLayout() {
  const navbarItems = [
    {
      title: "Planes",
      url: "/client/plans",
      icon: <Icons.plans fontSize="medium" />,
    },
  ];

  const profileItems = [
    {
      title: "Perfil",
      url: "/client/profile",
      icon: <Icons.person fontSize="medium" />,
    },
  ];

  return <BaseLayout navbarItems={navbarItems} profileItems={profileItems} />;
}
