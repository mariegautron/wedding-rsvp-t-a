import Button from "@/components/design-system/Button";
import { FC } from "react";

const FooterHero: FC<{ type?: "modify" | "respond" | "basic" }> = ({
  type = "basic",
}) => {
  const scrollToRsvp = () => {
    const rsvpSection = document.getElementById("rsvp");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToInformations = () => {
    const informationsSection = document.getElementById("informations");
    if (informationsSection) {
      informationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-wrap mt-5">
      {type !== "basic" && (
        <div className="mb-4 mr-4">
          <Button onClick={scrollToRsvp}>
            {type === "modify"
              ? "Modifier ma réponse"
              : "Répondre à l'invitation"}
          </Button>
        </div>
      )}

      <div className="mb-4">
        <Button outlined onClick={scrollToInformations}>
          Voir les informations
        </Button>
      </div>
    </div>
  );
};

export default FooterHero;
