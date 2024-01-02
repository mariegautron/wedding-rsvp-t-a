"use client";

import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Space, Typography } from "antd";
import Link from "next/link";
import LoginForm from "../molecules/LoginForm";
import GuestListTable from "../molecules/GuestListTable";
import StatisticList from "../molecules/StatisticList";
import { useRef, useState } from "react";

const { Title } = Typography;
const { Search } = Input;

interface GuestViewProps {
  data: WeddingGuests[];
}

const GuestView: React.FC<GuestViewProps> = ({ data }) => {
  const isAuth = useIsAuthenticated();

  const [showOnlyNotResponded, setShowOnlyNotResponded] = useState(false);
  const [showOnlyPresent, setShowOnlyPresent] = useState(false);
  const [showOnlyOneCanCome, setShowOnlyOneCanCome] = useState(false);
  const [searchName, setSearchName] = useState("");

  const inputRef = useRef(null);

  if (!isAuth) {
    return <LoginForm />;
  }

  const guestCount = data.length;
  const presentCount = data.filter((guest) => guest.isPresent === true).length;
  const noPresentCount = data.filter(
    (guest) => guest.isPresent === false
  ).length;
  const rsvpRespondedCount = data.filter(
    (guest) => guest.isPresent !== true && guest.isPresent !== false
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
    if (
      showOnlyNotResponded &&
      (guest.isPresent === true || guest.isPresent === false)
    ) {
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

    return true;
  });

  const resetFilters = () => {
    setShowOnlyNotResponded(false);
    setShowOnlyPresent(false);
    setShowOnlyOneCanCome(false);
    setSearchName("");
  };

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
      <Title level={4}>Statistiques</Title>
      <StatisticList statistics={statistics} />
      <Title level={4}>Filtres</Title>
      <div style={{ marginBottom: "24px" }}>
        <Space direction="horizontal">
          <Checkbox
            checked={showOnlyNotResponded}
            onChange={(e) => setShowOnlyNotResponded(e.target.checked)}
          >
            Pas encore répondu
          </Checkbox>
          <Checkbox
            checked={showOnlyPresent}
            onChange={(e) => setShowOnlyPresent(e.target.checked)}
          >
            Répondu - Viennent
          </Checkbox>

          <Checkbox
            checked={showOnlyOneCanCome}
            onChange={(e) => setShowOnlyOneCanCome(e.target.checked)}
          >
            Peuvent venir avec quelqu'un
          </Checkbox>
        </Space>
      </div>
      <Title level={4}>Recherche</Title>
      <Search
        ref={inputRef}
        placeholder="Rechercher"
        allowClear
        enterButton
        onSearch={(value) => setSearchName(value)}
        style={{ marginBottom: "24px" }}
      />
      <Button
        type="default"
        onClick={resetFilters}
        style={{ marginBottom: "24px" }}
      >
        Réinitialiser les filtres
      </Button>
      <Title level={4}>Tableaux des invités</Title>
      <GuestListTable data={guestsToShow} />
    </div>
  );
};

export default GuestView;
