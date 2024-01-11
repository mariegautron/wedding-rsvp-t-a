import React, { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";
import InputTextArea from "@/components/design-system/form/InputTextArea";

interface StepMessageProps {
  handlePrev: () => void;
  handleSubmit: () => void;
  handleSelectionChange: (value: string) => void;
  defaultValue?: string;
  loading: boolean;
  questionNumber: number;
}

const StepMessage: FC<StepMessageProps> = ({
  handlePrev,
  handleSubmit,
  handleSelectionChange,
  defaultValue = "",
  loading,
  questionNumber,
}) => {
  return (
    <QuestionCard
      questionNumber={questionNumber}
      questionTitle="Un message pour nous ?"
      withSubmitButton
      handleSubmit={handleSubmit}
      handlePrev={handlePrev}
      loading={loading}
      withPrevButton
    >
      <InputTextArea
        label="Votre message"
        placeholder="Votre message"
        value={defaultValue}
        onChange={(e) => handleSelectionChange(e.target.value)}
      />
    </QuestionCard>
  );
};

export default StepMessage;
