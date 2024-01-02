import { Form, Input, Button } from "antd";
import React, { FC } from "react";
import QuestionCard from "../QuestionCard";

interface StepMessageProps {
  handlePrev: () => void;
  handleSubmit: () => void;
  handleSelectionChange: (value: string) => void;
  defaultValue?: any
}

const StepMessage: FC<StepMessageProps> = ({
  handlePrev,
  handleSubmit,
  handleSelectionChange,
  defaultValue = {}, // Récupération de la prop defaultValue
}) => {
  const onFinish = (values: any) => {
    handleSelectionChange(values.message);
    handleSubmit();
  };

  return (
    <QuestionCard
      questionNumber={4}
      questionTitle="Un message pour nous ?"
      withSubmitButton
      handleSubmit={handleSubmit}
      handlePrev={handlePrev}
      withPrevButton
    >
      <Form name="messageForm" initialValues={defaultValue} onFinish={onFinish}> 
        <Form.Item name="message">
          <Input.TextArea placeholder="Votre message" rows={4} />
        </Form.Item>
      </Form>
    </QuestionCard>
  );
};

export default StepMessage;
