import Icons from "lib/utils/icons/icons";
import BaseLayout from "../components/base-layout/BaseLayout";
import { navbarItem } from "../lib/types";

export default function TrainerLayout() {
  const navbarItems: navbarItem[] | [] = [
    {
      title: "Clientes",
      url: "/trainer/clients",
      icon: <Icons.person fontSize="small" />,
    },
    {
      title: "Planes",
      url: "/trainer/plans",
      icon: <Icons.plans fontSize="small" />,
    },
    {
      title: "Ejercicios",
      url: "/trainer/exercises",
      icon: <Icons.dumbbell fontSize="small" />,
    },
  ];

  const profileItems: navbarItem[] | [] = [
    {
      title: "Perfil",
      url: "/trainer/profile",
      icon: <Icons.person fontSize="small" />,
    },
  ];

  return <BaseLayout navbarItems={navbarItems} profileItems={profileItems} />;
}
