import { useState, useEffect } from "react";
import StepComeWithSomeone from "../atoms/steps/StepComeWithSomeone";
import StepConfirmation from "../atoms/steps/StepConfirmation";
import StepDommage from "../atoms/steps/StepDommage";
import StepGuestOfGuest from "../atoms/steps/StepGuestOfGuest";
import StepIsPresent from "../atoms/steps/StepIsPresent";
import StepMessage from "../atoms/steps/StepMessage";
import { JourneyStep, determineJourney } from "@/utils/functions/determinateJourney";
import { WeddingGuests } from "@/utils/types/weddinggests";

interface UserSelections {
  [key: string]: string | boolean | object; // Types pour les sélections de l'utilisateur
}

const globalJourney: JourneyStep[] = [
  "isPresent",
  "comeWithSomeone",
  "guestOfGuest",
  "message",
  "dommage",
  "confirmation",
];

const FormStepper: React.FC<{ guest: WeddingGuests }> = ({ guest }) => {

  console.log({guest})
  const [currentStep, setCurrentStep] = useState<JourneyStep>(globalJourney[0]);
  const [userSelections, setUserSelections] = useState<UserSelections>({});
  const [journey, setJourney] = useState<JourneyStep[]>([]);

  const [allChoices, setAllChoices] = useState<WeddingGuests>(guest)

  console.log({userSelections})

  console.log({allChoices})

  console.log({journey})

  useEffect(() => {
    const guestChoicesConditions: WeddingGuests = {
      ...guest,
      isPresent: userSelections.isPresent ? userSelections.isPresent === "true" : guest.isPresent,
      comeWithSomeone: userSelections.comeWithSomeone ? userSelections.comeWithSomeone === "true" : guest.comeWithSomeone,
      canComeWithSomeone: guest.canComeWithSomeone
    };

    console.log({guestChoicesConditions})

    setAllChoices(guestChoicesConditions)


  }, [userSelections, currentStep]);

  
  useEffect(() => {
    const _journey = determineJourney(allChoices);

    setJourney(_journey);
  }, [userSelections, allChoices]);

  const handleNext = () => {
    const currentIndex = journey.indexOf(currentStep);
    const nextIndex = currentIndex + 1;
    if (nextIndex < journey.length) {
      setCurrentStep(journey[nextIndex]);
    }
  };

  const handlePrev = () => {
    const currentIndex = journey.indexOf(currentStep);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(journey[prevIndex]);
    }
  };

  const handleSelectionChange = (value: string | object) => {
    setUserSelections({ ...userSelections, [currentStep]: value });
  };

  const handleSubmit = () => {
    const allAnswers = { ...userSelections };
    console.log("Réponses envoyées :", allAnswers);
  };

  const renderContent = () => {
    switch (currentStep) {
      case "isPresent":
        return (
          <StepIsPresent
            handleNext={handleNext}
            handleSelectionChange={handleSelectionChange}
            defaultValue={userSelections[currentStep]}
          />
        );
      case "comeWithSomeone":
        return (
          <StepComeWithSomeone
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSelectionChange={handleSelectionChange}
            defaultValue={userSelections[currentStep]}
          />
        );
      case "guestOfGuest":
        return (
          <StepGuestOfGuest
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSelectionChange={handleSelectionChange}
            defaultValues={userSelections[currentStep] as { guestOfGuestFirstname?: string; guestOfGuestLastname?: string }}
          />
        );
      case "message":
        return (
          <StepMessage
            handlePrev={handlePrev}
            handleSubmit={handleSubmit}
            handleSelectionChange={handleSelectionChange}
            defaultValue={userSelections[currentStep]}
          />
        );
      case "dommage":
        return <StepDommage handlePrev={handlePrev} />;
      case "confirmation":
        return <StepConfirmation handlePrev={handlePrev} />;
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default FormStepper;
