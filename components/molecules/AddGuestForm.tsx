"use client";

import { WeddingGuests } from "@/utils/types/weddinggests";
import { Button, Form, Input, Switch, message } from "antd";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { MenuPath } from "@/utils/constants/menuItems";
import { v4 as uuidv4 } from "uuid";
import { PlusOutlined } from "@ant-design/icons";

interface AddGuestFormProps {
  addWeddingGuest: (values: WeddingGuests) => Promise<void>;
}

const AddGuestForm: FC<AddGuestFormProps> = ({ addWeddingGuest }) => {
  const router = useRouter();
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleAdditionalFieldsClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  const handleFormSubmit = async (values: WeddingGuests) => {
    console.log(values);

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

        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Peut venir avec quelqu'un"
          name="canComeWithSomeone"
          valuePropName="checked"
        >
          <Switch checkedChildren="Oui" unCheckedChildren="Non" />
        </Form.Item>

        {showAdditionalFields ? (
          <>
            <Form.Item
              label="La personne sera-t-elle présente ?"
              name="isPresent"
            >
              <Switch checkedChildren="Oui" unCheckedChildren="Non" />
            </Form.Item>

            <Form.Item
              label="La personne vient-elle avec quelqu'un ?"
              name="comeWithSomeone"
            >
              <Switch checkedChildren="Oui" unCheckedChildren="Non" />
            </Form.Item>

            <Form.Item label="Prénom de l'invité" name="guestOfGuestFirstname">
              <Input />
            </Form.Item>

            <Form.Item label="Nom de l'invité" name="guestOfGuestLastname">
              <Input />
            </Form.Item>
          </>
        ) : (
          <Button
            type="link"
            onClick={handleAdditionalFieldsClick}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              border: "none",
              textDecoration: "underline",
            }}
          >
            <PlusOutlined style={{ marginRight: 8 }} />
            Je veux indiquer des informations supplémentaires
          </Button>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%", marginTop: 20 }}
          >
            Ajouter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddGuestForm;
