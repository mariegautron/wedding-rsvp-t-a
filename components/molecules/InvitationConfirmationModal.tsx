import { WeddingGuests } from "@/utils/types/weddinggests";
import { Modal, Input, Button } from "antd";
import { useState } from "react";

interface InvitationConfirmationModalProps {
  visible: boolean;
  onCancel: () => void;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
  guest: WeddingGuests;
  invitSend?: boolean;
  clearSelectedGuest: () => void;
}

const InvitationConfirmationModal: React.FC<
  InvitationConfirmationModalProps
> = ({
  visible,
  onCancel,
  updateGuest,
  guest,
  invitSend = false,
  clearSelectedGuest,
}) => {
  const [commentSend, setComment] = useState(guest.commentSend);

  const handleCancel = () => {
    setComment("");
    clearSelectedGuest();
    onCancel();
  };

  const handleConfirm = () => {
    updateGuest({ ...guest, commentSend });
    handleCancel;
  };

  return (
    <Modal
      className="isAdmin"
      title={
        invitSend
          ? "Confirmer l'absence d'envoi d'invitation"
          : "Confirmer l'envoi d'invitation"
      }
      visible={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Annuler
        </Button>,
        <Button key="confirm" type="primary" onClick={handleConfirm}>
          Confirmer
        </Button>,
      ]}
    >
      <p>
        {invitSend
          ? "Es-tu certain de vouloir indiquer que l'invitation n'a pas été envoyée à cet invité ?"
          : "Es-tu certain d'avoir marqué l'invitation comme envoyée à cet invité ?"}
      </p>
      <Input.TextArea
        placeholder="Ajouter un commentaire"
        value={commentSend}
        onChange={(e) => setComment(e.target.value)}
      />
    </Modal>
  );
};

export default InvitationConfirmationModal;
