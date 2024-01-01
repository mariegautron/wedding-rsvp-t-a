import { Drawer, Tag, Divider, Space, Button } from "antd";
import { FC } from "react";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { CopyOutlined } from "@ant-design/icons";
import {
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "../atoms/TagsResponses";
import InvitationLink from "../atoms/InvitationLink";
import GuestResponses from "./GuestResponses";

const DrawerDetailsGuest: FC<{
  guest: WeddingGuests;
  drawerVisible: boolean;
  setDrawerVisible: (drawerVisible: boolean) => void;
}> = ({ guest, drawerVisible, setDrawerVisible }) => {
  return (
    <Drawer
      className="isAdmin"
      title="Détails de l'invité"
      placement="right"
      onClose={() => setDrawerVisible(false)}
      visible={drawerVisible}
      width={400}
    >
      <GuestResponses guest={guest} variant="big" />
    </Drawer>
  );
};
export default DrawerDetailsGuest;
