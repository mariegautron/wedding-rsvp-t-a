import React, { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";
import InputText from "@/components/design-system/form/InputText";
import Paragraph from "@/components/design-system/Paragraph";

interface StepEmailProps {
  handleNext: () => void;
  handlePrev: () => void;
  handleSelectionChange: (value: string) => void;
  defaultValue?: string;
  questionNumber: number;
}

const StepEmail: FC<StepEmailProps> = ({
  handleNext,
  handlePrev,
  handleSelectionChange,
  defaultValue = "",
  questionNumber,
}) => {
  return (
    <QuestionCard
      questionNumber={questionNumber}
      questionTitle="Quel est ton mail ?"
      withNextButton
      withPrevButton
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <Paragraph>
        Nous avons besoin de ton mail pour t'envoyer le programme de la journée
        et autres informations.
      </Paragraph>
      <div className="w-3/5">
        <InputText
          label="Email"
          placeholder="Email"
          value={defaultValue || ""}
          onChange={(e) => handleSelectionChange(e.target.value)}
        />
      </div>
    </QuestionCard>
  );
};

export default StepEmail;
