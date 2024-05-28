import ProfileView from "./profile-view/ProfileView";

export const PROFILE_NAVBAR_ITEMS_NAMES = {
  PROFILE: "Perfil",
};

export const profileNavbarItems = () => {
  return [
    {
      name: PROFILE_NAVBAR_ITEMS_NAMES.PROFILE,
      view: <ProfileView />,
    },
  ];
};
