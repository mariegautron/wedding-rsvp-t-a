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
    <Button type="primary" onClick={handleNext}>
      Suivant
    </Button>
  ) : null;

  const prevButton = withPrevButton ? (
    <Button onClick={handlePrev}>Précédent</Button>
  ) : null;

  const submitButton = withSubmitButton ? (
    <Button type="primary" onClick={handleSubmit} loading={loading}>
      Envoyer ma réponse
    </Button>
  ) : null;

  return (
    <>
      <Card
        title={
          <Text style={{ fontSize: "20px" }}>Question {questionNumber}</Text>
        }
        style={{
          padding: "30px",
          textAlign: "center",
          boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <Space direction="vertical" size="large">
          <Text style={{ fontSize: "40px" }}>{questionTitle}</Text>
          {children}

          <Space direction="horizontal" size="large">
            {prevButton}
            {nextButton}
            {submitButton}
          </Space>
        </Space>
      </Card>
    </>
  );
};

export default QuestionCard;
