"use client";

import { sendEmail } from "@/actions/sendEmail";
import { messageService } from "@/components/design-system/Message/messageService";
import { ERROR_MESSAGES } from "@/utils/enums/messages";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";
import { Button, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";

interface SendEmailModalProps {
  emailOpen: boolean;
  setSendEmailOpen: React.Dispatch<React.SetStateAction<boolean>>;
  guestEmail?: string;
  guestUuid?: string;
  clearSelectedGuest: () => void;
}

const SendEmailModal: React.FC<SendEmailModalProps> = ({
  emailOpen,
  setSendEmailOpen,
  guestEmail,
  guestUuid,
  clearSelectedGuest,
}) => {
  const eventDate = useFormattedEventDate();

  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ guestEmail });
  }, [guestEmail]);

  const handleSendEmail = async () => {
    try {
      if (!guestEmail || !guestUuid) {
        throw Error();
      }

      setSending(true);
      const values = await form.validateFields();
      const { invitationMessage } = values;

      await sendEmail(guestEmail, invitationMessage, guestUuid);
      setSending(false);
      messageService.success(`Le courriel a bien été envoyé à ${guestEmail}`);
      setSendEmailOpen(false);
      clearSelectedGuest();
    } catch (error) {
      messageService.error(ERROR_MESSAGES.ADMIN_ERROR);
      console.error("Erreur lors de l'envoi du courriel :", error);
      setSending(false);
    }
  };

  const handleCancel = () => {
    setSendEmailOpen(false);
    clearSelectedGuest();
  };

  return (
    <Modal
      title="Envoyer un email d'invitation"
      visible={emailOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Annuler
        </Button>,
        <Button key="submit" onClick={handleSendEmail} loading={sending}>
          Envoyer
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Email de la personne invitée" name="guestEmail">
          <Input disabled value={guestEmail} />
        </Form.Item>
        <Form.Item
          label="Message d'invitation"
          name="invitationMessage"
          // TODO: Mettre en base de données pour avoir un message par défaut pour l'administrateur
          initialValue={`Bonjour,\n\nNous vous invitons à notre mariage ! Nous sommes ravis de vous convier à partager ce jour unique avec nous, qui se déroulera le ${eventDate}.\n\nVeuillez confirmer votre présence !`}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SendEmailModal;
