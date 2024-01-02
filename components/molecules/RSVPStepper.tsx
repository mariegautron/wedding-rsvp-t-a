import { FC } from "react";
import FormStepper from "./FormStepper";
import { WeddingGuests } from "@/utils/types/weddinggests";

const RSVPStepper: FC<{ guest: WeddingGuests }> = ({ guest }) => {
  return (
    <div className="rsvp">
      <div className="container py-10">
        <FormStepper guest={guest} />
      </div>
    </div>
  );
};

export default RSVPStepper;
