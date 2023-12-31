"use client";

import { WeddingGuests } from "@/utils/types/weddinggests";
import { Button, Form, Input, Switch, message } from "antd";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { MenuPath } from "@/utils/constants/menuItems";
import { v4 as uuidv4 } from "uuid";

interface AddGuestFormProps {
  addWeddingGuest: (values: WeddingGuests) => Promise<void>;
}

const AddGuestForm: FC<AddGuestFormProps> = ({ addWeddingGuest }) => {
  const router = useRouter();

  const handleFormSubmit = async (values: WeddingGuests) => {
    try {
      const uuid = uuidv4();

      const guestWithUUID = { ...values, uuid };

      await addWeddingGuest(guestWithUUID);
      message.success("Invité ajouté avec succès !");
      router.push(MenuPath.WEDDING_GUESTS);
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout de l'invité :",
        (error as any).message
      );
      message.error((error as any).message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Ajouter un nouvel invité</h2>
      <Form onFinish={handleFormSubmit}>
        <Form.Item
          label="Prénom"
          name="firstname"
          rules={[{ required: true, message: "Veuillez entrer le prénom" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nom de famille"
          name="lastname"
          rules={[
            { required: true, message: "Veuillez entrer le nom de famille" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Veuillez entrer l'email" },
            { type: "email", message: "Veuillez entrer un email valide" },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Peut venir avec quelqu'un"
          name="canComeWithSomeone"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Ajouter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddGuestForm;
