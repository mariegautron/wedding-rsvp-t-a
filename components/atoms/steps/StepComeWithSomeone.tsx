import RadioTagList from "@/components/molecules/RadioTagList";
import { stringToBoolean } from "@/utils/functions/stringToBoolean";
import { Typography } from "antd";
import { FC } from "react";
import QuestionCard from "../QuestionCard";

const { Title } = Typography;

interface StepComeWithSomeoneProps {
  handleNext: () => void;
  handlePrev: () => void;
  handleSelectionChange: (value: boolean) => void;
  defaultValue?: string | boolean | object;
}

const optionsCanComeWithSomeone = [
  { value: "true", text: "Oui, je ne viendrai pas seule" },
  { value: "false", text: "Non, je viendrai seule" },
];

const StepComeWithSomeone: FC<StepComeWithSomeoneProps> = ({
  handleNext,
  handlePrev,
  handleSelectionChange,
  defaultValue,
}) => {
  return (
    <QuestionCard
      questionNumber={2}
      questionTitle="Est-ce que tu as prévu d’emmener quelqu’un avec toi ?"
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
