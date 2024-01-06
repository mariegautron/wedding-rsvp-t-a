import useDeadlineCheck from "@/utils/hooks/useDeadlineCheck";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";
import useGuestHasResponded from "@/utils/hooks/useGuestHasResponded";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Typography } from "antd";
import { FC } from "react";
import GuestResponses from "../../shared/molecules/GuestResponses";
import FooterHero from "../atoms/FooterHero";
import HeroTemplatePage from "./HeroTemplatePage";

const { Title, Text } = Typography;

interface HeroProps {
  guest: WeddingGuests;
}

const Hero: FC<HeroProps> = ({ guest }) => {
  const isDeadlinePassed = useDeadlineCheck();
  const eventDate = useFormattedEventDate();
  const hasResponded = useGuestHasResponded(guest);
  const formattedDeadline = useFormattedDeadline();

  if (hasResponded && !isDeadlinePassed) {
    // Personne a répondu et la date limite n'est pas passée
    return (
      <HeroTemplatePage>
        <Title level={2}>Bonjour {guest.firstname},</Title>
        <Title level={2}>tu as déjà répondu à l'invitation !</Title>

        <Text style={{ display: "block", fontSize: 25 }}>
          Voici tes réponses. Tu as jusqu'au {formattedDeadline} pour les
          modifier.
        </Text>
        <GuestResponses guest={guest} />
        <FooterHero type="modify" />
      </HeroTemplatePage>
    );
  }

  if (!hasResponded && !isDeadlinePassed) {
    // Personne n'a répondu et la date limite n'est pas passée
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
        <FooterHero type="respond" />
      </HeroTemplatePage>
    );
  }

  if (hasResponded && isDeadlinePassed) {
    // Personne a répondu et la date limite est passée
    return (
      <HeroTemplatePage>
        <Title level={2}>Bonjour {guest.firstname},</Title>
        <Title level={2}>tu as déjà répondu à l'invitation !</Title>
        <Text style={{ display: "block", fontSize: 25 }}>
          Voici tes réponses. Malheureusement, la date limite pour modifier tes
          réponses est passée.
        </Text>
        <GuestResponses guest={guest} />
        <FooterHero />
      </HeroTemplatePage>
    );
  }

  // Personne n'a répondu et la date limite est passée
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
      <FooterHero />
    </HeroTemplatePage>
  );
};

export default Hero;
