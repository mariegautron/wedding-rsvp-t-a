"use client";

import { hasResponded } from "@/utils/functions/hasResponded";
import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Button, Collapse, Space, Typography } from "antd";
import Link from "next/link";
import { useMemo, useState } from "react";
import FiltersAndSearchPanel from "../molecules/FiltersAndSearchPanel";
import GuestListTable from "../molecules/GuestListTable";
import LoginForm from "../molecules/LoginForm";
import StatisticList from "../molecules/StatisticList";

const { Panel } = Collapse;
const { Title } = Typography;

interface GuestViewProps {
  data: WeddingGuests[];
  updateGuest: (
    updatedGuestData: Partial<WeddingGuests>
  ) => Promise<WeddingGuests[] | null | undefined>;
}

const GuestView: React.FC<GuestViewProps> = ({ data, updateGuest }) => {
  const isAuth = useIsAuthenticated();

  const [showOnlyNotResponded, setShowOnlyNotResponded] = useState(false);
  const [showOnlyPresent, setShowOnlyPresent] = useState(false);
  const [showOnlyOneCanCome, setShowOnlyOneCanCome] = useState(false);
  const [showOnlyInvitNotSent, setShowOnlyInvitNotSent] = useState(false);
  const [showOnlyInvitSent, setShowOnlyInvitSent] = useState(false);
  const [searchName, setSearchName] = useState("");

  if (!isAuth) {
    return <LoginForm />;
  }

  const guestCount = data.length;
  const presentCount = data.filter((guest) => guest.isPresent === true).length;
  const noPresentCount = data.filter(
    (guest) => guest.isPresent === false
  ).length;
  const rsvpRespondedCount = data.filter(
    (guest) => !hasResponded(guest)
  ).length;
  const comeWithSomeoneCount = data.filter(
    (guest) => guest.comeWithSomeone === true
  ).length;

  const statistics = [
    { title: "Invités", value: guestCount },
    { title: "Pas encore répondu", value: rsvpRespondedCount },
    { title: "Présents", value: presentCount },
    { title: "Pas présent", value: noPresentCount },
    { title: "Invités avec quelqu'un", value: comeWithSomeoneCount },
  ];

  const guestsToShow = data.filter((guest) => {
    const guestHasResponded = hasResponded(guest);

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

    return true;
  });

  const resetFilters = () => {
    setShowOnlyNotResponded(false);
    setShowOnlyPresent(false);
    setShowOnlyOneCanCome(false);
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
        <Space>
          <UsergroupAddOutlined style={{ fontSize: "24px" }} />
          <Title level={2}>Liste des invités</Title>
        </Space>
        <Button type="primary" icon={<UserOutlined />}>
          <Link href="/admin/weddingguests/add">Ajouter un invité</Link>
        </Button>
      </div>
      <StatisticList statistics={statistics} />
      <Title level={4}>Tableaux des invités</Title>
      <Collapse accordion style={{ marginBottom: 20, marginTop: 20 }}>
        <Panel header="Filtres & Recherche" key="2">
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
          />
        </Panel>
      </Collapse>
      <GuestListTable data={sortedGuests} updateGuest={updateGuest} />
    </div>
  );
};

export default GuestView;
