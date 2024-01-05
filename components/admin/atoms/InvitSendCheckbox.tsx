import { WeddingGuests } from "@/utils/types/weddinggests";
import { MessageOutlined } from "@ant-design/icons";
import { Button, Checkbox, Space } from "antd";
import { useState } from "react";
import InvitationConfirmationModal from "../molecules/InvitationConfirmationModal";

interface InvitSendCheckboxProps {
  checked?: boolean;
  updateGuest: (
    updatedGuestData: Partial<WeddingGuests>
  ) => Promise<WeddingGuests[] | null | undefined>;
  guest: any;
  setSelectedGuest: (guest: any) => void;
  clearSelectedGuest: () => void;
}

const InvitSendCheckbox: React.FC<InvitSendCheckboxProps> = ({
  checked,
  updateGuest,
  guest,
  setSelectedGuest,
  clearSelectedGuest,
}) => {
  const [modalInvitSendVisible, setModalInvitSendVisible] = useState(false);

  const handleCheckboxChange = () => {
    updateGuest({
      id: guest.id as number,
      invitSend: !checked,
      dateInvitSend: new Date(),
    });
  };

  const handleCommentClick = () => {
    setSelectedGuest({ ...guest });
    setModalInvitSendVisible(true);
  };

  return (
    <>
      <Space>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <Button
          type="link"
          onClick={handleCommentClick}
          style={{
            border: "none",
            padding: 8,
          }}
        >
          <MessageOutlined />
        </Button>
      </Space>

      {modalInvitSendVisible && (
        <InvitationConfirmationModal
          visible={modalInvitSendVisible}
          onCancel={() => setModalInvitSendVisible(false)}
          updateGuest={updateGuest}
          guest={guest}
          invitSend={guest?.invitSend}
          clearSelectedGuest={clearSelectedGuest}
        />
      )}
    </>
  );
};

export default InvitSendCheckbox;
