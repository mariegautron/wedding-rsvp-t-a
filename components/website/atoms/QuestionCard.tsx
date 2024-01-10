import Button from "@/components/design-system/Button";
import Heading from "@/components/design-system/Headings";
import Paragraph from "@/components/design-system/Paragraph";
import { MouseEventHandler, ReactNode } from "react";

interface QuestionCardProps {
  questionNumber: number;
  questionTitle: string;
  withNextButton?: boolean;
  withPrevButton?: boolean;
  withSubmitButton?: boolean;
  handleNext?: () => void;
  handlePrev?: () => void;
  handleSubmit?: MouseEventHandler<HTMLElement> | undefined;
  children: ReactNode;
  loading?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  questionTitle,
  withNextButton = false,
  withPrevButton = false,
  withSubmitButton = false,
  handleNext,
  handlePrev,
  handleSubmit,
  children,
  loading = false,
}) => {
  const nextButton = withNextButton ? (
    <Button onClick={handleNext} className="mr-4">
      Suivant
    </Button>
  ) : null;

  const prevButton = withPrevButton ? (
    <Button onClick={handlePrev} className="mr-4">
      Précédent
    </Button>
  ) : null;

  const submitButton = withSubmitButton ? (
    <Button onClick={handleSubmit} loading={loading}>
      Envoyer ma réponse
    </Button>
  ) : null;

  return (
    <div className="flex flex-col items-center justify-center space-y-10 border border-fond-clair p-4">
      <Paragraph>Question {questionNumber}</Paragraph>
      <div className="w-40 h-0.5 bg-fond-clair"></div>
      <Heading level={3}>{questionTitle}</Heading>
      {children}
      <div className="flex flex-wrap space-x-4">
        {prevButton}
        {nextButton}
        {submitButton}
      </div>
    </div>
  );
};

export default QuestionCard;
