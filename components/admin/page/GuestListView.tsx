"use client";

import Button from "@/components/design-system/Button";
import Heading from "@/components/design-system/Headings";
import { hasResponded } from "@/utils/functions/hasResponded";
import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Collapse } from "antd";
import { useMemo, useState } from "react";
import FiltersAndSearchPanel from "../molecules/FiltersAndSearchPanel";
import GuestListTable from "../molecules/GuestListTable";
import LoginForm from "../molecules/LoginForm";
import StatisticList from "../molecules/StatisticList";
import Accordion from "@/components/design-system/Accordion";

const { Panel } = Collapse;

interface GuestViewProps {
  data: WeddingGuests[];
  updateGuest: (
    updatedGuestData: Partial<WeddingGuests>
  ) => Promise<WeddingGuests[] | null | undefined>;
  deleteGuest: (guestId: string) => Promise<{ success: boolean }>;
}

const GuestView: React.FC<GuestViewProps> = ({
  data,
  updateGuest,
  deleteGuest,
}) => {
  const isAuth = useIsAuthenticated();

  const [showOnlyNotResponded, setShowOnlyNotResponded] = useState(false);
  const [showOnlyPresent, setShowOnlyPresent] = useState(false);
  const [showOnlyOneCanCome, setShowOnlyOneCanCome] = useState(false);
  const [showOnlyInvitNotSent, setShowOnlyInvitNotSent] = useState(false);
  const [showOnlyInvitSent, setShowOnlyInvitSent] = useState(false);
  const [showOnlyNoEmail, setShowOnlyNoEmail] = useState(false);
  const [searchName, setSearchName] = useState("");

  if (!isAuth) {
    return <LoginForm />;
  }

  const presentCount = data.filter((guest) => guest.isPresent === true).length;
  const noPresentCount = data.filter(
    (guest) => guest.isPresent === false
  ).length;
  const rsvpRespondedCount = data.filter(
    (guest) => !hasResponded(guest.isPresent)
  ).length;
  const comeWithSomeoneCount = data.filter(
    (guest) => guest.comeWithSomeone === true
  ).length;
  const guestCount = data.length + comeWithSomeoneCount;

  const statistics = [
    { title: "Personnes invitées (total)", value: guestCount },
    { title: "Pas encore de réponse", value: rsvpRespondedCount },
    { title: "Présents", value: presentCount },
    { title: "Absent·e·s", value: noPresentCount },
    { title: "Personnes invitées avec un·e +1", value: comeWithSomeoneCount },
  ];

  const guestsToShow = data.filter((guest) => {
    const guestHasResponded = hasResponded(guest.isPresent);

    if (showOnlyNotResponded && guestHasResponded) {
      return false;
    }
    if (showOnlyPresent && guest.isPresent !== true) {
      return false;
    }

    if (showOnlyOneCanCome && guest.canComeWithSomeone === false) {
      return false;
    }

    if (searchName.trim() !== "") {
      const guestName = `${guest.firstname} ${guest.lastname}`.toLowerCase();
      if (!guestName.includes(searchName.toLowerCase())) {
        return false;
      }
    }

    if (showOnlyInvitNotSent && guest.invitSend === true) {
      return false;
    }

    if (showOnlyInvitSent && guest.invitSend !== true) {
      return false;
    }

    if (showOnlyNoEmail && guest.email) {
      return false;
    }

    return true;
  });

  const resetFilters = () => {
    setShowOnlyNotResponded(false);
    setShowOnlyPresent(false);
    setShowOnlyOneCanCome(false);
    setShowOnlyInvitNotSent(false);
    setShowOnlyInvitSent(false);
    setShowOnlyNoEmail(false);
    setSearchName("");
  };

  const sortedGuests = useMemo(
    () =>
      [...guestsToShow].sort((a, b) => a.firstname.localeCompare(b.firstname)),
    [guestsToShow]
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Heading level={3}>Liste des personnes invitées</Heading>
        <Button outlined mode="dark" href="/admin/weddingguests/add">
          Ajouter une personne invitée
        </Button>
      </div>
      <StatisticList statistics={statistics} />
      <Accordion title="Filtres & Recherche">
        {" "}
        <FiltersAndSearchPanel
          showOnlyNotResponded={showOnlyNotResponded}
          setShowOnlyNotResponded={setShowOnlyNotResponded}
          showOnlyPresent={showOnlyPresent}
          setShowOnlyPresent={setShowOnlyPresent}
          showOnlyOneCanCome={showOnlyOneCanCome}
          setShowOnlyOneCanCome={setShowOnlyOneCanCome}
          setSearchName={setSearchName}
          resetFilters={resetFilters}
          showOnlyInvitNotSent={showOnlyInvitNotSent}
          setShowOnlyInvitNotSent={setShowOnlyInvitNotSent}
          showOnlyInvitSent={showOnlyInvitSent}
          setShowOnlyInvitSent={setShowOnlyInvitSent}
          showOnlyNoEmail={showOnlyNoEmail}
          setShowOnlyNoEmail={setShowOnlyNoEmail}
        />
      </Accordion>
      <GuestListTable
        data={sortedGuests}
        updateGuest={updateGuest}
        deleteGuest={deleteGuest}
      />
    </div>
  );
};

export default GuestView;
