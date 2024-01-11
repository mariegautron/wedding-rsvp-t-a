import Paragraph from "@/components/design-system/Paragraph";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";
import { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";

interface StepConfirmationProps {
  handlePrev: () => void;
}

const StepConfirmation: FC<StepConfirmationProps> = ({ handlePrev }) => {
  const eventDate = useFormattedEventDate();

  const formattedDeadline = useFormattedDeadline();

  return (
    <QuestionCard
      questionTitle={`Merci infiniement pour ta réponse !`}
      withPrevButton
      handlePrev={handlePrev}
    >
      <Paragraph className="text-center">
        Nous avons hâte de te voir le {eventDate}. Tu as encore le temps de
        changer d’avis jusqu’au {formattedDeadline}.
      </Paragraph>

      <Paragraph>Thomas & Amélie</Paragraph>
    </QuestionCard>
  );
};

export default StepConfirmation;
