import { Input } from "antd";
import { FC } from "react";
import QuestionCard from "../QuestionCard";

interface StepMessageProps {
  handlePrev: () => void;
  handleSubmit: () => void;
  handleSelectionChange: (value: string) => void;
  defaultValue?: string;
  loading: boolean;
}

const StepMessage: FC<StepMessageProps> = ({
  handlePrev,
  handleSubmit,
  handleSelectionChange,
  defaultValue = "",
  loading,
}) => {
  console.log({ defaultValue });
  return (
    <QuestionCard
      questionNumber={4}
      questionTitle="Un message pour nous ?"
      withSubmitButton
      handleSubmit={handleSubmit}
      handlePrev={handlePrev}
      loading={loading}
      withPrevButton
    >
      <Input.TextArea
        placeholder="Votre message"
        rows={4}
        defaultValue={defaultValue}
        onChange={(e) => handleSelectionChange(e.target.value)}
      />
    </QuestionCard>
  );
};

export default StepMessage;
