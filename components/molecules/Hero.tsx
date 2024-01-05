import { FC } from "react";
import { Typography, Button } from "antd";
import HeroTemplatePage from "../atoms/HeroTemplatePage";
import useDeadlineCheck from "@/utils/hooks/useDeadlineCheck";
import GuestResponses from "./GuestResponses";
import { WeddingGuests } from "@/utils/types/weddinggests";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import useGuestHasResponded from "@/utils/hooks/useGuestHasResponded";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";

const { Title, Text } = Typography;

interface HeroProps {
  guest: WeddingGuests;
}

const Hero: FC<HeroProps> = ({ guest }) => {
  const isDeadlinePassed = useDeadlineCheck();
  const eventDate = useFormattedEventDate();
  const hasResponded = useGuestHasResponded(guest);
  const formattedDeadline = useFormattedDeadline();

  const scrollToRsvp = () => {
    const rsvpSection = document.getElementById("rsvp");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (hasResponded && !isDeadlinePassed) {
    // Person has responded and deadline is not passed
    return (
      <HeroTemplatePage>
        <Title level={2}>Bonjour {guest.firstname},</Title>
        <Title level={2}>tu as déjà répondu à l'invitation !</Title>

        <Text style={{ display: "block", fontSize: 25 }}>
          Voici tes réponses. Tu as jusqu'au {formattedDeadline} pour les
          modifier.
        </Text>
        <GuestResponses guest={guest} />
        <Button type="primary" style={{ marginTop: 20 }} onClick={scrollToRsvp}>
          Modifier ma réponse
        </Button>
      </HeroTemplatePage>
    );
  }

  if (!hasResponded && !isDeadlinePassed) {
    // Person hasn't responded and deadline is not passed
    return (
      <HeroTemplatePage>
        <Title level={2}>Bonjour {guest.firstname},</Title>
        <Title level={2}>tu es invité(e) au mariage de </Title>
        <Title level={1} style={{ marginTop: 20, marginBottom: 20 }}>
          Thomas & Amélie
        </Title>
        <Text style={{ display: "block", fontSize: 25 }}>
          Nous sommes ravis de t’inviter à partager ce jour unique avec nous,
          qui se déroulera le{" "}
          <span style={{ textDecoration: "underline", fontSize: 25 }}>
            {eventDate} au {process.env.NEXT_PUBLIC_EVENT_PLACE}
          </span>
        </Text>
        <Button type="primary" style={{ marginTop: 20 }} onClick={scrollToRsvp}>
          Répondre à l'invitation
        </Button>
      </HeroTemplatePage>
    );
  }

  if (hasResponded && isDeadlinePassed) {
    // Person has responded and deadline is passed
    return (
      <HeroTemplatePage>
        <Title level={2}>Bonjour {guest.firstname},</Title>
        <Title level={2}>tu as déjà répondu à l'invitation !</Title>
        <Text style={{ display: "block", fontSize: 25 }}>
          Voici tes réponses. Malheureusement, la date limite pour modifier tes
          réponses est passée.
        </Text>
        <GuestResponses guest={guest} />
      </HeroTemplatePage>
    );
  }

  // Person hasn't responded and deadline is passed
  return (
    <HeroTemplatePage>
      <Title level={2}>Bonjour {guest.firstname},</Title>
      <Title level={2}>tu es invité(e) au mariage de </Title>
      <Title level={1} style={{ marginTop: 20, marginBottom: 20 }}>
        Thomas & Amélie
      </Title>

      <Text style={{ display: "block", fontSize: 25 }}>
        Il est malheureusement trop tard pour répondre.
      </Text>
    </HeroTemplatePage>
  );
};

export default Hero;
