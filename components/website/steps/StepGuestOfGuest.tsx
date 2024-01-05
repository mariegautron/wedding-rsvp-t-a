import { Form, Input, Row, Col } from "antd";
import React, { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";

interface StepGuestOfGuestProps {
  handleNext: () => void;
  handlePrev: () => void;
  handleSelectionChange: (value: object) => void;
  defaultValues?: {
    guestOfGuestFirstname?: string;
    guestOfGuestLastname?: string;
  };
}

const StepGuestOfGuest: FC<StepGuestOfGuestProps> = ({
  handleNext,
  handlePrev,
  handleSelectionChange,
  defaultValues = {},
}) => {
  return (
    <QuestionCard
      questionNumber={3}
      questionTitle="Qui est ton invité(e) ?"
      withNextButton
      withPrevButton
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Prénom de l'invité(e)"
            name="guestOfGuestFirstname"
            labelCol={{ span: 24 }}
            style={{ fontSize: "20px" }}
          >
            <Input
              placeholder="Prénom de l'invité(e)"
              style={{ fontSize: "20px" }}
              defaultValue={defaultValues?.guestOfGuestFirstname || ""}
              onChange={(e) =>
                handleSelectionChange({ guestOfGuestFirstname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Nom de l'invité(e)"
            name="guestOfGuestLastname"
            labelCol={{ span: 24 }}
            style={{ fontSize: "20px" }}
          >
            <Input
              placeholder="Nom de l'invité(e)"
              style={{ fontSize: "20px" }}
              defaultValue={defaultValues?.guestOfGuestLastname || ""}
              onChange={(e) =>
                handleSelectionChange({ guestOfGuestLastname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
    </QuestionCard>
  );
};

export default StepGuestOfGuest;
