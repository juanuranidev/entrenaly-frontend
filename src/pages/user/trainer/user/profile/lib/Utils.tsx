import SubscriptionView from "../components/subscription-view/SubscriptionView";
import ProfileView from "../components/profile-view/ProfileView";
import { JSX } from "react";

export type ProfileNavbarItem = {
  name: string;
  view: JSX.Element;
};

export const PROFILE_NAVBAR_ITEMS_NAMES = {
  PROFILE: "Perfil",
  SUBSCRIPTION: "Suscripción",
};

export const profileNavbarItems = () => {
  return [
    {
      name: PROFILE_NAVBAR_ITEMS_NAMES.PROFILE,
      view: <ProfileView />,
    },
    {
      name: PROFILE_NAVBAR_ITEMS_NAMES.SUBSCRIPTION,
      view: <SubscriptionView />,
    },
  ];
};
