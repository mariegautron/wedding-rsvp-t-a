import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/utils/constants/messages";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Modal, Input, Button, message } from "antd";
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

  const handleConfirm = async () => {
    try {
      await updateGuest({ ...guest, commentSend });
      handleCancel();
      message.success(SUCCESS_MESSAGES.COMMENT_SEND);
    } catch (error) {
      console.log("Erreur lors de la mise à jour de l'invité :", error);
      message.error(ERROR_MESSAGES.ADMIN_ERROR);
    }
  };

  return (
    <Modal
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
        <Button key="confirm" onClick={handleConfirm}>
          Confirmer
        </Button>,
      ]}
    >
      <p>
        {invitSend
          ? "Es-tu certain de vouloir indiquer que l'invitation n'a pas été envoyée à cette personne invitée ?"
          : "Es-tu certain d'avoir marqué l'invitation comme envoyée à cette personne invitée ?"}
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
