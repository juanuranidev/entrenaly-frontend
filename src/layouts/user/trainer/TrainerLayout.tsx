import BaseLayout from "../components/base-layout/BaseLayout";
import Icons from "lib/utils/icons/icons";

export default function TrainerLayout() {
  const navbarItems = [
    {
      title: "Clientes",
      url: "/trainer/clients",
      icon: <Icons.person fontSize="medium" />,
    },
    {
      title: "Planes",
      url: "/trainer/plans",
      icon: <Icons.plans fontSize="medium" />,
    },
    {
      title: "Ejercicios",
      url: "/trainer/exercises",
      icon: <Icons.dumbbell fontSize="medium" />,
    },
  ];

  const profileItems = [
    {
      title: "Perfil",
      url: "/trainer/profile",
      icon: <Icons.person fontSize="medium" />,
    },
  ];

  return <BaseLayout navbarItems={navbarItems} profileItems={profileItems} />;
}
