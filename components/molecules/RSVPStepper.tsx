import { FC } from "react";
import FormStepper from "./FormStepper";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Typography } from "antd";
import useGuestHasResponded from "@/utils/hooks/useGuestHasResponded";

const { Title } = Typography;

const RSVPStepper: FC<{
  guest: WeddingGuests;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
}> = ({ guest, updateGuest }) => {
  const hasResponded = useGuestHasResponded(guest);

  return (
    <div
      className="rsvp"
      style={{ position: "relative", overflow: "hidden" }}
      id="rsvp"
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          fontSize: 50,
          fontFamily: "Playfair Display, serif",
        }}
      >
        {hasResponded ? "Modifier ma réponse" : "Repond à l'invitation"}
      </Title>
      <div className="container py-10" style={{ position: "relative" }}>
        <FormStepper guest={guest} updateGuest={updateGuest} />
      </div>
      <img
        src="/images/leaves-2.svg"
        aria-hidden="true"
        className="svg-decoration "
        style={{
          position: "absolute",
          bottom: 0,
          right: "-3%",
          width: "300px",
          transform: "scaleX(-1)",
        }}
      />
    </div>
  );
};

export default RSVPStepper;
