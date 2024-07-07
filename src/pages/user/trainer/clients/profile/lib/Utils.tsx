import PlansView from "../components/plans-view/PlansView";
import ProfileView from "../components/profile-view/ProfileView";

export type ProfileNavbarItem = {
  name: string;
  view: JSX.Element;
};

export const PROFILE_NAVBAR_ITEMS_NAMES = {
  PROFILE: "Perfil",
  PLANS: "Planes",
};

export const profileNavbarItems = (): ProfileNavbarItem[] => {
  return [
    {
      name: PROFILE_NAVBAR_ITEMS_NAMES.PROFILE,
      view: <ProfileView />,
    },
    {
      name: PROFILE_NAVBAR_ITEMS_NAMES.PLANS,
      view: <PlansView />,
    },
  ];
};
