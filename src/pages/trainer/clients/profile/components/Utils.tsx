import PlansView from "./plans-view/PlansView";
import ProfileView from "./profile-view/ProfileView";

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
