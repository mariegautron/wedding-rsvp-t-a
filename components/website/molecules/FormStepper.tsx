import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/utils/constants/messages";
import {
  JourneyStep,
  determineJourney,
} from "@/utils/functions/determinateJourney";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { message } from "antd";
import { useEffect, useMemo, useState } from "react";
import StepComeWithSomeone from "../steps/StepComeWithSomeone";
import StepConfirmation from "../steps/StepConfirmation";
import StepDommage from "../steps/StepDommage";
import StepGuestOfGuest from "../steps/StepGuestOfGuest";
import StepIsPresent from "../steps/StepIsPresent";
import StepMessage from "../steps/StepMessage";
import { booleanToString } from "@/utils/functions/booleanToString";
import useGuestHasResponded from "@/utils/hooks/useGuestHasResponded";

const globalJourney: JourneyStep[] = [
  "isPresent",
  "comeWithSomeone",
  "guestOfGuest",
  "message",
  "dommage",
  "confirmation",
];

const FormStepper: React.FC<{
  guest: WeddingGuests;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
}> = ({ guest, updateGuest }) => {
  const [currentStep, setCurrentStep] = useState<JourneyStep>(globalJourney[0]);
  const [journey, setJourney] = useState<JourneyStep[]>([]);
  const [allChoices, setAllChoices] = useState<WeddingGuests>(guest);
  const [isLoading, setIsLoading] = useState(false);

  const hasResponded = useGuestHasResponded(allChoices);

  useEffect(() => {
    const guestChoicesConditions: WeddingGuests = {
      ...guest,
      guestOfGuestFirstname:
        allChoices.guestOfGuestFirstname || guest.guestOfGuestFirstname,
      guestOfGuestLastname:
        allChoices.guestOfGuestLastname || guest.guestOfGuestLastname,
      isPresent: hasResponded ? allChoices.isPresent : guest.isPresent,
      comeWithSomeone:
        allChoices !== undefined && allChoices !== null
          ? allChoices.comeWithSomeone
          : guest.comeWithSomeone,
      canComeWithSomeone: guest.canComeWithSomeone,
    };

    setAllChoices(guestChoicesConditions);
  }, [currentStep, guest]);

  useEffect(() => {
    const _journey = determineJourney(allChoices);

    setJourney(_journey);
  }, [allChoices, guest]);

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

  const handleSelectionChange = (
    value:
      | string
      | { guestOfGuestFirstname?: string; guestOfGuestLastname?: string }
      | boolean
  ) => {
    if (currentStep === "guestOfGuest") {
      setAllChoices({
        ...allChoices,
        ...(value as {
          guestOfGuestFirstname?: string;
          guestOfGuestLastname?: string;
        }),
      });
    } else {
      setAllChoices({ ...allChoices, [currentStep]: value });
    }
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const result = await updateGuest({
        ...allChoices,
        invitSend: true,
        dateResponseSend: new Date(),
        dateInvitSend:
          allChoices.dateInvitSend === null
            ? new Date()
            : allChoices.dateInvitSend,
      });

      if (result && result[0]) {
        message.success(SUCCESS_MESSAGES.RESONSE_SEND);
        handleNext();
      } else {
        message.error(ERROR_MESSAGES.ASK_TO_REPORT);
      }
    } catch (error) {
      message.error(ERROR_MESSAGES.ASK_TO_REPORT);
      console.error("Erreur lors de la mise à jour de l'invité :", error);
    } finally {
      setIsLoading(false);
    }
  };

  const questionNumber = useMemo(() => {
    const index = journey.indexOf(currentStep);
    return index !== -1 ? index + 1 : 0;
  }, [journey, currentStep]);

  const renderContent = () => {
    switch (currentStep) {
      case "isPresent":
        return (
          <StepIsPresent
            handleNext={handleNext}
            handleSelectionChange={handleSelectionChange}
            defaultValue={booleanToString(allChoices.isPresent)}
            questionNumber={questionNumber}
          />
        );
      case "comeWithSomeone":
        return (
          <StepComeWithSomeone
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSelectionChange={handleSelectionChange}
            defaultValue={booleanToString(allChoices.comeWithSomeone)}
            questionNumber={questionNumber}
          />
        );
      case "guestOfGuest":
        return (
          <StepGuestOfGuest
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSelectionChange={handleSelectionChange}
            defaultValues={{
              guestOfGuestFirstname: allChoices.guestOfGuestFirstname,
              guestOfGuestLastname: allChoices.guestOfGuestLastname,
            }}
            questionNumber={questionNumber}
          />
        );
      case "message":
        return (
          <StepMessage
            handlePrev={handlePrev}
            handleSubmit={handleSubmit}
            loading={isLoading}
            handleSelectionChange={handleSelectionChange}
            defaultValue={allChoices.message}
            questionNumber={questionNumber}
          />
        );
      case "dommage":
        return (
          <StepDommage
            handlePrev={handlePrev}
            questionNumber={questionNumber}
          />
        );
      case "confirmation":
        return (
          <StepConfirmation
            handlePrev={handlePrev}
            questionNumber={questionNumber}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default FormStepper;
