import { stringToBoolean } from "@/utils/functions/stringToBoolean";
import RadioTagList from "../atoms/RadioTagList";
import QuestionCard from "../atoms/QuestionCard";
import { FC } from "react";

interface StepIsPresentProps {
  handleNext: () => void;
  handleSelectionChange: (value: boolean) => void;
  defaultValue?: string;
  questionNumber: number;
}

const optionsIsPresent = [
  { value: "true", text: "Oui, je viens" },
  { value: "false", text: "Non, je ne viendrai pas" },
];

const StepIsPresent: FC<StepIsPresentProps> = ({
  handleNext,
  handleSelectionChange,
  defaultValue = "",
  questionNumber,
}) => {
  return (
    <QuestionCard
      questionNumber={questionNumber}
      questionTitle="Tu viens ?"
      withNextButton
      handleNext={handleNext}
    >
      <RadioTagList
        options={optionsIsPresent}
        onChange={(value) => handleSelectionChange(stringToBoolean(value))}
        defaultValue={defaultValue}
      />
    </QuestionCard>
  );
};

export default StepIsPresent;
