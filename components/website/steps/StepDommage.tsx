import Paragraph from "@/components/design-system/Paragraph";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";

interface StepDommageProps {
  handlePrev: () => void;
}

const StepDommage: FC<StepDommageProps> = ({ handlePrev }) => {
  const formattedDeadline = useFormattedDeadline();

  return (
    <QuestionCard
      questionTitle={"Dommage !"}
      withPrevButton
      handlePrev={handlePrev}
    >
      <Paragraph>
        Tu as encore le temps de changer d’avis jusqu’au{" "}
        <span className="font-semibold">{formattedDeadline}</span>
      </Paragraph>
      <Paragraph>Thomas & Amélie</Paragraph>
    </QuestionCard>
  );
};

export default StepDommage;
