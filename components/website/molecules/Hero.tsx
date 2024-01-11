import Paragraph from "@/components/design-system/Paragraph";
import useDeadlineCheck from "@/utils/hooks/useDeadlineCheck";
import useFormattedDeadline from "@/utils/hooks/useFormattedDeadline";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";
import useGuestHasResponded from "@/utils/hooks/useGuestHasResponded";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC } from "react";
import GuestResponses from "../../shared/molecules/GuestResponses";
import FooterHero from "../atoms/FooterHero";
import HeroTemplatePage from "./HeroTemplatePage";
import Subtile from "@/components/design-system/Subtitle";
import Heading from "@/components/design-system/Headings";

interface HeroProps {
  guest: WeddingGuests;
}

const Hero: FC<HeroProps> = ({ guest }) => {
  const isDeadlinePassed = useDeadlineCheck();
  const eventDate = useFormattedEventDate();
  const hasResponded = useGuestHasResponded(guest);
  const formattedDeadline = useFormattedDeadline();

  if (hasResponded && !isDeadlinePassed) {
    return (
      <HeroTemplatePage>
        <div>
          <Subtile mode="dark">Bonjour {guest.firstname},</Subtile>
          <Subtile mode="dark">tu as déjà répondu à </Subtile>
        </div>{" "}
        <Heading level={1} className="my-5">
          l'invitation !
        </Heading>{" "}
        <Paragraph mode="dark" className="md:w-1/2 w-full">
          Voici tes réponses. Tu as jusqu'au {formattedDeadline} pour les
          modifier.
        </Paragraph>
        <GuestResponses guest={guest} />
        <FooterHero type="modify" />
      </HeroTemplatePage>
    );
  }

  if (!hasResponded && !isDeadlinePassed) {
    return (
      <HeroTemplatePage>
        <div>
          <Subtile mode="dark">Bonjour {guest.firstname},</Subtile>
          <Subtile mode="dark">tu es invité·e au mariage de </Subtile>
        </div>
        <Heading level={1} className="my-5">
          Thomas & Amélie
        </Heading>
        <Paragraph mode="dark" className="md:w-1/2 w-full">
          Nous sommes ravis de t’inviter à partager ce jour unique avec nous,
          qui se déroulera le <span className="font-bold">{eventDate}.</span>
        </Paragraph>
        <FooterHero type="respond" />
      </HeroTemplatePage>
    );
  }

  if (hasResponded && isDeadlinePassed) {
    return (
      <HeroTemplatePage>
        <div>
          <Subtile mode="dark">Bonjour {guest.firstname},</Subtile>
          <Subtile mode="dark">tu as déjà répondu à </Subtile>
        </div>{" "}
        <Heading level={1} className="my-5">
          l'invitation !
        </Heading>{" "}
        <Paragraph mode="dark" className="md:w-1/2 w-full">
          Voici tes réponses. Malheureusement, la date limite pour modifier tes
          réponses est passée.
        </Paragraph>
        <GuestResponses guest={guest} />
        <FooterHero />
      </HeroTemplatePage>
    );
  }

  return (
    <HeroTemplatePage>
      <div>
        <Subtile mode="dark">Bonjour {guest.firstname},</Subtile>
        <Subtile mode="dark">tu es invité·e au mariage de </Subtile>
      </div>
      <Heading level={1} className="my-5">
        Thomas & Amélie
      </Heading>
      <Paragraph mode="dark" className="md:w-1/2 w-full">
        Il est malheureusement trop tard pour répondre.
      </Paragraph>
      <FooterHero />
    </HeroTemplatePage>
  );
};

export default Hero;
