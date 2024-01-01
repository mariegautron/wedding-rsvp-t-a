import { useState } from "react";
import RadioTagList from "./RadioTagList";
import QuestionCard from "../atoms/QuestionCard";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { Typography } from "antd";

const { Title } = Typography;

const FormStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userSelections, setUserSelections] = useState<any>({});

  const formattedDeadline = useFormattedDeadline();

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSelectionChange = (step: number, value: string) => {
    setUserSelections({ ...userSelections, [step]: value });
  };

  const handleSubmit = () => {
    const allAnswers = { ...userSelections };

    // Envoi des réponses
    console.log("Réponses envoyées :", allAnswers);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        const optionsIsPresent = [
          { value: "yes", text: "Oui, je viens" },
          { value: "no", text: "Non, je ne viendrai pas" },
        ];

        return (
          <QuestionCard
            questionNumber={1}
            questionTitle="Tu viens ?"
            withNextButton
            handleNext={handleNext}
          >
            <RadioTagList
              options={optionsIsPresent}
              onChange={handleSelectionChange}
              step={1}
            />
          </QuestionCard>
        );

      case 2:
        if (userSelections[1] === "yes") {
          const optionsCanComeWithSomeone = [
            { value: "yes", text: "Oui, je ne viendrai pas seule" },
            { value: "no", text: "Non, je viendrai seule" },
          ];
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
                onChange={handleSelectionChange}
                step={2}
              />
            </QuestionCard>
          );
        } else if (userSelections[1] === "no") {
          return (
            <QuestionCard
              questionNumber={2}
              questionTitle={`Dommage ! Tu as encore le temps de changer d’avis jusqu’au ${formattedDeadline}`}
              withSubmitButton
              withPrevButton
              handleSubmit={handleSubmit}
              handlePrev={handlePrev}
            >
              <Title level={2}>Thomas & Amélie</Title>
            </QuestionCard>
          );
        }
        return null;

      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default FormStepper;
