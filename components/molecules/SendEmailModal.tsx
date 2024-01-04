"use client";

import { sendEmail } from "@/actions/sendEmail";
import { ERROR_MESSAGES } from "@/utils/constants/messages";
import { Modal, Form, Input, Button, message } from "antd";
import { useState } from "react";

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
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);

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
      message.success(`Le mail a bien été envoyé à ${guestEmail}`);
      setSendEmailOpen(false);
      clearSelectedGuest();
    } catch (error) {
      message.error(ERROR_MESSAGES.ADMIN_ERROR);
      console.error("Send email error:", error);
      setSending(false);
    }
  };

  const handleCancel = () => {
    setSendEmailOpen(false);
    clearSelectedGuest();
  };

  return (
    <Modal
      className="isAdmin"
      title="Envoyer un email d'invitation"
      visible={emailOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Annuler
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleSendEmail}
          loading={sending}
        >
          Envoyer
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Email de l'invité"
          name="guestEmail"
          initialValue={guestEmail}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Message d'invitation"
          name="invitationMessage"
          // TODO: Put in database for adminitrate default message
          initialValue={`Bonjour,\n\nNous t'invitons à notre mariage ! Nous sommes ravis de t’inviter à partager ce jour unique avec nous, qui se déroulera le 22 juin 2024 au 2 rue de la mairie, 86370 Chateau-Larcher\n\nConfirme-nous ta présence !`}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SendEmailModal;
