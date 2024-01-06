import { WeddingGuests } from "@/utils/types/weddinggests";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch } from "antd";
import { FC, useState } from "react";

const AddOrUpdateForm: FC<{
  handleFormSubmit: (values: WeddingGuests) => Promise<void>;
  guest?: WeddingGuests;
  extend?: boolean;
}> = ({ handleFormSubmit, guest, extend = false }) => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleAdditionalFieldsClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };
  return (
    <Form onFinish={handleFormSubmit} initialValues={guest}>
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

      {showAdditionalFields || extend ? (
        <>
          <Form.Item
            label="Cette personne sera-t-elle présente ?"
            name="isPresent"
          >
            <Switch checkedChildren="Oui" unCheckedChildren="Non" />
          </Form.Item>

          <Form.Item
            label="Cette personne viendra-t-elle avec quelqu'un ?"
            name="comeWithSomeone"
          >
            <Switch checkedChildren="Oui" unCheckedChildren="Non" />
          </Form.Item>

          <Form.Item
            label="Prénom de la personne invitée"
            name="guestOfGuestFirstname"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nom de la personne invitée"
            name="guestOfGuestLastname"
          >
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
          Je souhaite ajouter des informations supplémentaires
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
  );
};

export default AddOrUpdateForm;
