"use client";

import { Table, Switch, Tag, Button, Space, Menu, Dropdown } from "antd";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC, useState } from "react";
import SendEmailModal from "./SendEmailModal";
import { CopyOutlined, DownOutlined } from "@ant-design/icons";

const GuestListTable: FC<{ data: WeddingGuests[] }> = ({ data }) => {
  const [emailOpen, setSendEmailOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState({
    email: "",
    guestId: "",
  });

  const clearSelectedGuest = () => {
    setSelectedGuest({
      email: "",
      guestId: "",
    });
  };

  const actionsMenu = (record: any) => (
    <Menu className="isAdmin">
      {process.env.NEXT_PUBLIC_ACTIVATE_EMAIL === "1" &&
        record.email &&
        record.isPresent !== true &&
        record.isPresent !== false && (
          <Menu.Item
            key="sendEmail"
            onClick={() => {
              setSelectedGuest({ email: record.email, guestId: record.id });
              setSendEmailOpen(true);
            }}
          >
            Envoyer l'email d'invitation
          </Menu.Item>
        )}
    </Menu>
  );

  const columns = [
    {
      title: "Prénom",
      dataIndex: "firstname",
      key: "firstname",
      sorter: (a: any, b: any) => a.firstname.localeCompare(b.firstname),
    },
    {
      title: "Nom",
      dataIndex: "lastname",
      key: "lastname",
      sorter: (a: any, b: any) => a.lastname.localeCompare(b.lastname),
    },
    {
      title: "Url d'invitation",
      dataIndex: "id",
      key: "id",
      render: (id: string) => (
        <Space>
          <span>{`${process.env.NEXT_PUBLIC_BASE_URL}?id=${id}`}</span>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `${process.env.NEXT_PUBLIC_BASE_URL}?id=${id}`
              );
            }}
            icon={<CopyOutlined />}
          />
        </Space>
      ),
    },
    {
      title: "Réponse",
      dataIndex: "isPresent",
      key: "isPresent",
      render: (isPresent: boolean | null) => (
        <span>
          {isPresent === true ? (
            <Tag color="green">Présent</Tag>
          ) : isPresent === false ? (
            <Tag color="red">Absent</Tag>
          ) : (
            <Tag color="default">Non spécifié</Tag>
          )}
        </span>
      ),
    },
    {
      title: "Peut venir avec quelqu'un",
      dataIndex: "canComeWithSomeone",
      key: "canComeWithSomeone",
      render: (canComeWith: boolean, record: any) => (
        <Switch
          checked={canComeWith}
          onChange={(checked) => {
            // Mettre à jour la possibilité de venir avec quelqu'un ici avec l'appel à une fonction de mise à jour
            console.log(
              `Changement de la permission pour ${record.firstname} ${record.lastname} : ${checked}`
            );
          }}
        />
      ),
    },
    {
      title: "Vient avec",
      dataIndex: "comeWithSomeone",
      key: "comeWithSomeone",
      render: (comeWith: boolean | null, record: any) => {
        if (comeWith === true) {
          return (
            <Tag color="green">{`${record.guestOfGuestFirstname} ${record.guestOfGuestLastname}`}</Tag>
          );
        } else if (comeWith === false) {
          return <Tag color="red">Non</Tag>;
        } else {
          return <Tag color="default">Non spécifié</Tag>;
        }
      },
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "actions",
      render: (_: any, record: any) => (
        <>
          {process.env.NEXT_PUBLIC_ACTIVATE_EMAIL === "1" &&
            record.email &&
            record.isPresent !== true &&
            record.isPresent !== false && (
              <Dropdown overlay={actionsMenu(record)} trigger={["click"]}>
                <Button>
                  Actions <DownOutlined />
                </Button>
              </Dropdown>
            )}
        </>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        className="border-collapse border border-gray-300"
      />
      <SendEmailModal
        emailOpen={emailOpen}
        setSendEmailOpen={setSendEmailOpen}
        clearSelectedGuest={clearSelectedGuest}
        guestEmail={selectedGuest.email}
        guestId={selectedGuest.guestId}
      />
    </div>
  );
};

export default GuestListTable;
