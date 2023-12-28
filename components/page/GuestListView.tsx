"use client";

import { WeddingGuests } from "@/utils/types/weddinggests";
import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Badge, Button, Space, Typography } from "antd";
import Link from "next/link";
import GuestListTable from "../molecules/GuestListTable";

const { Title } = Typography;

interface GuestViewProps {
  data: WeddingGuests[];
}

const GuestView: React.FC<GuestViewProps> = ({ data }) => {
  const guestCount = data.length;

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
      <div
        style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}
      >
        <Badge count={guestCount} />
        <span style={{ marginLeft: "8px" }}>Invités</span>
      </div>
      <GuestListTable data={data} />
    </div>
  );
};

export default GuestView;
