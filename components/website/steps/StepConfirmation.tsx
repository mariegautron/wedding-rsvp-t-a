import Paragraph from "@/components/design-system/Paragraph";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";
import { FC } from "react";
import ButtonLinkPresent from "../atoms/ButtonLinkPresent";
import QuestionCard from "../atoms/QuestionCard";

const StepConfirmation: FC = () => {
  const eventDate = useFormattedEventDate();
  const hour = process.env.NEXT_PUBLIC_EVENT_HOUR;
  const formattedDeadline = useFormattedDeadline();

  return (
    <QuestionCard questionTitle={`Merci infiniement pour ta réponse !`}>
      <Paragraph className="text-center">
        Nous avons hâte de te voir le {eventDate} à {hour} à{" "}
        {process.env.NEXT_PUBLIC_EVENT_PLACE_NAME} au{" "}
        {process.env.NEXT_PUBLIC_EVENT_PLACE} . Tu as encore le temps de changer
        d’avis jusqu’au {formattedDeadline}.
      </Paragraph>
      <Paragraph>Thomas & Amélie</Paragraph>
      <ButtonLinkPresent />
    </QuestionCard>
  );
};

export default StepConfirmation;
