import PlansView from "./plans-view/PlansView";
import ProfileView from "./profile-view/ProfileView";

export const handleRenderNavbarItems = ({ clientId }: any) => {
  return [
    {
      name: "Perfil",
      view: <ProfileView clientId={clientId} />,
    },
    {
      name: "Planes",
      view: <PlansView clientId={clientId} />,
    },
  ];
};
