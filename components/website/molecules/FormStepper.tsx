import { messageService } from "@/components/design-system/Message/messageService";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/utils/enums/messages";
import { GuestUpdateError } from "@/utils/errors";
import { booleanToString } from "@/utils/functions/booleanToString";
import {
  JourneyStep,
  determineJourney,
} from "@/utils/functions/determinateJourney";
import useGuestHasResponded from "@/utils/hooks/useGuestHasResponded";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { useEffect, useMemo, useState } from "react";
import StepComeWithSomeone from "../steps/StepComeWithSomeone";
import StepConfirmation from "../steps/StepConfirmation";
import StepDommage from "../steps/StepDommage";
import StepEmail from "../steps/StepEmail";
import StepGuestOfGuest from "../steps/StepGuestOfGuest";
import StepIsPresent from "../steps/StepIsPresent";
import StepMessage from "../steps/StepMessage";

const globalJourney: JourneyStep[] = [
  "isPresent",
  "comeWithSomeone",
  "guestOfGuest",
  "email",
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
      email: allChoices.email || guest.email,
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

      const guestUpdated: WeddingGuests = {
        ...allChoices,
        invitSend: true,
        dateResponseSend: new Date(),
        dateInvitSend:
          allChoices.dateInvitSend === null
            ? new Date()
            : allChoices.dateInvitSend,
        comeWithSomeone:
          !allChoices.guestOfGuestFirstname && !allChoices.guestOfGuestLastname
            ? false
            : allChoices.isPresent === false
            ? false
            : allChoices.comeWithSomeone,
        guestOfGuestFirstname:
          allChoices.isPresent === false
            ? ""
            : allChoices.guestOfGuestFirstname,
        guestOfGuestLastname:
          allChoices.isPresent === false ? "" : allChoices.guestOfGuestLastname,
      };

      const result = await updateGuest(guestUpdated);

      if (result && result[0]) {
        messageService.success(SUCCESS_MESSAGES.RESONSE_SEND);
        handleNext();
      } else {
        messageService.error(ERROR_MESSAGES.ASK_TO_REPORT);
      }
    } catch (error: any | GuestUpdateError) {
      const errorObj = JSON.parse(error.message);

      switch (errorObj.type) {
        case "guestExists":
          messageService.error(errorObj.message);
          break;
        case "updateError":
          messageService.error(ERROR_MESSAGES.ASK_TO_REPORT);
          break;
        default:
          console.error("Erreur lors de la mise à jour de l'invité :", error);
          messageService.error(ERROR_MESSAGES.ASK_TO_REPORT);
      }
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
      case "email":
        return (
          <StepEmail
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSelectionChange={handleSelectionChange}
            defaultValue={allChoices.email}
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
        return <StepDommage handlePrev={handlePrev} />;
      case "confirmation":
        return <StepConfirmation />;
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default FormStepper;
