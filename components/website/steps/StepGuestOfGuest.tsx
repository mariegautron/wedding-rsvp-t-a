import React, { FC } from "react";
import QuestionCard from "../atoms/QuestionCard";
import InputText from "@/components/design-system/form/InputText";

interface StepGuestOfGuestProps {
  handleNext: () => void;
  handlePrev: () => void;
  handleSelectionChange: (value: object) => void;
  defaultValues?: {
    guestOfGuestFirstname?: string;
    guestOfGuestLastname?: string;
  };
  questionNumber: number;
}

const StepGuestOfGuest: FC<StepGuestOfGuestProps> = ({
  handleNext,
  handlePrev,
  handleSelectionChange,
  defaultValues = {},
  questionNumber,
}) => {
  return (
    <QuestionCard
      questionNumber={questionNumber}
      questionTitle="Qui est ton invité·e ?"
      withNextButton
      withPrevButton
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5">
        <div>
          <InputText
            label="Prénom de l'invité·e"
            placeholder="Prénom de l'invité·e"
            value={defaultValues?.guestOfGuestFirstname || ""}
            onChange={(e) =>
              handleSelectionChange({ guestOfGuestFirstname: e.target.value })
            }
          />
        </div>
        <div>
          <InputText
            label="Nom de l'invité·e"
            placeholder="Nom de l'invité·e"
            value={defaultValues?.guestOfGuestLastname || ""}
            onChange={(e) =>
              handleSelectionChange({ guestOfGuestLastname: e.target.value })
            }
          />
        </div>
      </div>
    </QuestionCard>
  );
};

export default StepGuestOfGuest;
