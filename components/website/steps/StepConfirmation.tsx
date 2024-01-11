import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { Typography } from "antd";
import { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";

const { Title } = Typography;

interface StepConfirmationProps {
  handlePrev: () => void;
  questionNumber: number;
}

const StepConfirmation: FC<StepConfirmationProps> = ({
  handlePrev,
  questionNumber,
}) => {
  const eventDate = useFormattedEventDate();

  const formattedDeadline = useFormattedDeadline();

  return (
    <QuestionCard
      questionNumber={5}
      questionTitle={`Merci infiniement pour ta réponse, et nous avons hâte de te voir le ${eventDate}`}
      withPrevButton
      handlePrev={handlePrev}
    >
      <Title level={2}>
        Tu as encore le temps de changer d’avis jusqu’au {formattedDeadline}.
      </Title>
      <Title level={3}>Thomas & Amélie</Title>
      {/* <Button  >Modifier ma réponse</Button> */}
    </QuestionCard>
  );
};

export default StepConfirmation;
