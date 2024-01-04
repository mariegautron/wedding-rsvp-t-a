import { FC } from "react";
import FormStepper from "./FormStepper";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Typography } from "antd";

const { Title } = Typography;

const RSVPStepper: FC<{ guest: WeddingGuests }> = ({ guest }) => {
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
        Répond à l'invitation
      </Title>
      <div className="container py-10" style={{ position: "relative" }}>
        <FormStepper guest={guest} />
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
