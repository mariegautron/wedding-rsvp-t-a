"use client";

import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/utils/constants/messages";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Button, Modal, message } from "antd";
import AddOrUpdateForm from "./AddOrUpdateForm";

interface ModalUpdateGuestProps {
  visible: boolean;
  handleCancel: () => void;
  updateGuest: (
    updatedGuestData: Partial<WeddingGuests>
  ) => Promise<WeddingGuests[] | null | undefined>;
  selectedGuest: WeddingGuests | undefined;
}

const ModalUpdateGuest: React.FC<ModalUpdateGuestProps> = ({
  visible,
  handleCancel,
  updateGuest,
  selectedGuest,
}) => {
  const handleFormSubmit = async (values: WeddingGuests) => {
    try {
      await updateGuest({ ...selectedGuest, ...values });
      message.success(SUCCESS_MESSAGES.UPDATE_GUEST);
      handleCancel();
    } catch (error) {
      console.error(
        "Erreur lors de la modification de l'invité :",
        (error as any).message
      );
      message.error(ERROR_MESSAGES.ADMIN_ERROR);
    }
  };

  return (
    <Modal
      title="Modifier les données d'une personne invitée"
      visible={visible}
      onCancel={handleCancel}
      width={700}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Annuler
        </Button>,
      ]}
    >
      <AddOrUpdateForm
        handleFormSubmit={handleFormSubmit}
        guest={selectedGuest}
        extend
      />
    </Modal>
  );
};

export default ModalUpdateGuest;
