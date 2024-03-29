import Heading from "@/components/design-system/Headings";
import useGuestHasResponded from "@/utils/hooks/useGuestHasResponded";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC } from "react";
import FormStepper from "./FormStepper";

const RSVPStepper: FC<{
  guest: WeddingGuests;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
}> = ({ guest, updateGuest }) => {
  const hasResponded = useGuestHasResponded(guest);

  return (
    <div
      id="rsvp"
      className="flex flex-col items-center justify-center gap-8 space-y-10  md:w-11/12 mx-auto w-full md:overflow-visible overflow-hidden"
    >
      <Heading level={2}>
        {hasResponded ? "Modifier ma réponse" : "Répondre à l'invitation"}
      </Heading>
      <div className="w-4/5 mx-auto pt-10 pb-20">
        <FormStepper guest={guest} updateGuest={updateGuest} />
      </div>
    </div>
  );
};

export default RSVPStepper;
