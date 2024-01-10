import { WeddingGuests } from "@/utils/types/weddinggests";
import { Drawer } from "antd";
import { FC } from "react";
import GuestResponses from "../../shared/molecules/GuestResponses";

const DrawerDetailsGuest: FC<{
  guest: WeddingGuests;
  drawerVisible: boolean;
  setDrawerVisible: (drawerVisible: boolean) => void;
  clearSelectedGuest: () => void;
}> = ({ guest, drawerVisible, setDrawerVisible, clearSelectedGuest }) => {
  return (
    <Drawer
      title="Détails"
      placement="right"
      onClose={() => {
        clearSelectedGuest();
        setDrawerVisible(false);
      }}
      visible={drawerVisible}
      width={700}
    >
      <GuestResponses guest={guest} variant="big" />
    </Drawer>
  );
};
export default DrawerDetailsGuest;
