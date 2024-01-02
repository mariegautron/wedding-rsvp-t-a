import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { Typography } from "antd";
import { FC } from "react";
import QuestionCard from "../QuestionCard";

const { Title } = Typography;

interface StepConfirmationProps {
  handlePrev: () => void;
}

const StepConfirmation: FC<StepConfirmationProps> = ({ handlePrev }) => {
  const formattedDeadline = useFormattedDeadline();

  return (
    <QuestionCard
      questionNumber={5}
      questionTitle="Merci infiniement pour ta réponse, et nous avons hâte de te voir le 22 juin."
      withPrevButton
      handlePrev={handlePrev}
    >
      <Title level={2}>
        Tu as encore le temps de changer d’avis jusqu’au {formattedDeadline}.
      </Title>
      <Title level={3}>Thomas & Amélie</Title>
      {/* <Button type="primary">Modifier ma réponse</Button> */}
    </QuestionCard>
  );
};

export default StepConfirmation;
