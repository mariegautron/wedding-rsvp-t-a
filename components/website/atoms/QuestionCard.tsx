import { Button, Card, Space, Typography } from "antd";
import { MouseEventHandler, ReactNode } from "react";

const { Text } = Typography;

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
    <Button type="primary" onClick={handleNext} className="mr-4">
      Suivant
    </Button>
  ) : null;

  const prevButton = withPrevButton ? (
    <Button onClick={handlePrev} className="mr-4">
      Précédent
    </Button>
  ) : null;

  const submitButton = withSubmitButton ? (
    <Button type="primary" onClick={handleSubmit} loading={loading}>
      Envoyer ma réponse
    </Button>
  ) : null;

  return (
    <Card
      title={<Text className="text-lg">Question {questionNumber}</Text>}
      className="p-8 text-center shadow-md"
    >
      <Space direction="vertical" className="space-y-6">
        <Text className="text-2xl">{questionTitle}</Text>
        {children}

        <Space direction="horizontal" className="space-x-6">
          {prevButton}
          {nextButton}
          {submitButton}
        </Space>
      </Space>
    </Card>
  );
};

export default QuestionCard;
