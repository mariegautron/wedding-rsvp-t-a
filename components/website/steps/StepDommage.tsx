import React, { FC } from "react";
import { Typography } from "antd";
import QuestionCard from "../atoms/QuestionCard";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";

const { Title } = Typography;

interface StepDommageProps {
  handlePrev: () => void;
  questionNumber: number;
}

const StepDommage: FC<StepDommageProps> = ({ handlePrev, questionNumber }) => {
  const formattedDeadline = useFormattedDeadline();

  return (
    <QuestionCard
      questionNumber={questionNumber}
      questionTitle={`Dommage ! Tu as encore le temps de changer d’avis jusqu’au ${formattedDeadline}`}
      withPrevButton
      handlePrev={handlePrev}
    >
      <Title level={2}>Thomas & Amélie</Title>
    </QuestionCard>
  );
};

export default StepDommage;
