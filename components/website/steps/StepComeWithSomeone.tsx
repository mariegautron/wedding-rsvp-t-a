import RadioTagList from "@/components/website/atoms/RadioTagList";
import { stringToBoolean } from "@/utils/functions/stringToBoolean";
import { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";

interface StepComeWithSomeoneProps {
  handleNext: () => void;
  handlePrev: () => void;
  handleSelectionChange: (value: boolean) => void;
  defaultValue?: string;
}

const optionsCanComeWithSomeone = [
  { value: "true", text: "Oui, je serai accompagné·e" },
  { value: "false", text: "Non, je serai seul·e" },
];

const StepComeWithSomeone: FC<StepComeWithSomeoneProps> = ({
  handleNext,
  handlePrev,
  handleSelectionChange,
  defaultValue = "",
}) => {
  return (
    <QuestionCard
      questionNumber={2}
      questionTitle="Envisages-tu d’être accompagné·e ?"
      withNextButton
      withPrevButton
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <RadioTagList
        options={optionsCanComeWithSomeone}
        onChange={(value) => handleSelectionChange(stringToBoolean(value))}
        defaultValue={defaultValue}
      />
    </QuestionCard>
  );
};

export default StepComeWithSomeone;
