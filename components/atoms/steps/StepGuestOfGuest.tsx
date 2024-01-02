import { Form, Input, Row, Col } from "antd";
import React, { FC } from "react";
import QuestionCard from "../QuestionCard";

interface StepGuestOfGuestProps {
  handleNext: () => void;
  handlePrev: () => void;
  handleSelectionChange: (value: object) => void;
  defaultValues?: { guestOfGuestFirstname?: string; guestOfGuestLastname?: string }; 
}

const StepGuestOfGuest: FC<StepGuestOfGuestProps> = ({
  handleNext,
  handlePrev,
  handleSelectionChange,
  defaultValues = {}, // Récupération de la prop defaultValues
}) => {
  const onFinish = (values: any) => {
    handleSelectionChange(values);
  };

  return (
    <QuestionCard
      questionNumber={3}
      questionTitle="Qui est ton invité ?"
      withNextButton
      withPrevButton
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <Form
        name="guestOfGuestForm"
        initialValues={defaultValues} 
        onFinish={onFinish}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Prénom de l'invité"
              name="guestOfGuestFirstname"
              labelCol={{ span: 24 }}
              style={{ fontSize: "20px" }}
            >
              <Input
                placeholder="Prénom de l'invité"
                style={{ fontSize: "20px" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Nom de l'invité"
              name="guestOfGuestLastname"
              labelCol={{ span: 24 }}
              style={{ fontSize: "20px" }}
            >
              <Input
                placeholder="Nom de l'invité"
                style={{ fontSize: "20px" }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </QuestionCard>
  );
};

export default StepGuestOfGuest;
