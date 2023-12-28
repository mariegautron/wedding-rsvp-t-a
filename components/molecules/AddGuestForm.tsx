"use client";

import { WeddingGuests } from "@/utils/types/weddinggests";
import { Button, Form, Input, message } from "antd";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { MenuPath } from "@/utils/constants/menuItems";

interface AddGuestFormProps {
  addWeddingGuest: (values: WeddingGuests) => Promise<void>;
}

const AddGuestForm: FC<AddGuestFormProps> = ({ addWeddingGuest }) => {
  const router = useRouter();

  const handleFormSubmit = async (values: WeddingGuests) => {
    try {
      await addWeddingGuest(values);
      message.success("Invité ajouté avec succès !");
      router.push(MenuPath.WEDDING_GUESTS);
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout de l'invité :",
        (error as any).message
      );
      message.error("Une erreur s'est produite lors de l'ajout de l'invité.");
    }
  };

  return (
    <Form onFinish={handleFormSubmit}>
      {/* Votre formulaire pour ajouter un nouvel invité */}
      {/* Exemple : */}
      <Form.Item
        label="Prénom"
        name="firstname"
        rules={[{ required: true, message: "Veuillez entrer le prénom" }]}
      >
        <Input />
      </Form.Item>
      {/* Autres champs du formulaire */}
      {/* ... */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ajouter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddGuestForm;
