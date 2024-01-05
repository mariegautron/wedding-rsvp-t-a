import { stringToBoolean } from "@/utils/functions/stringToBoolean";
import RadioTagList from "../../molecules/RadioTagList";
import QuestionCard from "../QuestionCard";
import { FC } from "react";

interface StepIsPresentProps {
  handleNext: () => void;
  handleSelectionChange: (value: boolean) => void;
  defaultValue?: string;
}

const optionsIsPresent = [
  { value: "true", text: "Oui, je viens" },
  { value: "false", text: "Non, je ne viendrai pas" },
];

const StepIsPresent: FC<StepIsPresentProps> = ({
  handleNext,
  handleSelectionChange,
  defaultValue = "",
}) => {
  return (
    <QuestionCard
      questionNumber={1}
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
