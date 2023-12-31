"use client";

import useIsAuthenticated from "@/utils/hooks/useIsAuthenticated";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "../LoginForm";
import GuestListTable from "../molecules/GuestListTable";
import StatisticList from "../molecules/StatisticList";

const { Title } = Typography;

interface GuestViewProps {
  data: WeddingGuests[];
}

const GuestView: React.FC<GuestViewProps> = ({ data }) => {
  const [expandStats, setExpandStats] = useState(false);

  const isAuth = useIsAuthenticated();

  if (!isAuth) {
    return <LoginForm />;
  }

  const guestCount = data.length;
  const presentCount = data.filter((guest) => guest.isPresent === true).length;
  const rsvpRespondedCount = data.filter(
    (guest) => guest.isPresent !== true && guest.isPresent !== false
  ).length;
  const comeWithSomeoneCount = data.filter(
    (guest) => guest.comeWithSomeone === true
  ).length;

  const statistics = [
    { title: "Invités", value: guestCount },
    { title: "Réponses au RSVP", value: rsvpRespondedCount },
    { title: "Présents", value: presentCount },
    { title: "Invités avec quelqu'un", value: comeWithSomeoneCount },
  ];

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
      <GuestListTable data={data} />
    </div>
  );
};

export default GuestView;
