"use client";

import Heading from "@/components/design-system/Headings";
import Paragraph from "@/components/design-system/Paragraph";
import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { useEffect, useState } from "react";
import LoginForm from "../molecules/LoginForm";
import StatisticList, { Statistic } from "../molecules/StatisticList";

interface GuestMessagesViewProps {
  data: WeddingGuests[];
}

type FormattedMessage = ({ title: string; value: string } | null)[];

const GuestMessagesView: React.FC<GuestMessagesViewProps> = ({ data }) => {
  const [messages, setMessages] = useState<FormattedMessage>([]);

  useEffect(() => {
    const formatteMessagesForStatistics: FormattedMessage = data
      .map((guest: WeddingGuests) => {
        if (guest.message !== undefined && guest.message !== null) {
          const lastLetterLastname = guest.lastname.charAt(0).toUpperCase();

          return {
            title: `${guest.firstname} ${lastLetterLastname}.`,
            value: guest.message,
          };
        } else {
          return null;
        }
      })
      .filter(Boolean);

    setMessages(formatteMessagesForStatistics);
  }, [data]);

  const isAuth = useIsAuthenticated();

  if (!isAuth) {
    return <LoginForm />;
  }

  return (
    <div className="flex flex-col space-y-5">
      <Heading level={3}>Messages des invitées</Heading>
      <Paragraph>Vous avez {messages.length} messages.</Paragraph>
      <StatisticList statistics={messages as Statistic[]} numColumns={3} />
    </div>
  );
};

export default GuestMessagesView;
