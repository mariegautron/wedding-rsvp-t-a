"use client";

import { WeddingGuests } from "@/utils/types/weddinggests";
import {
  CopyOutlined,
  EyeOutlined,
  MailOutlined,
  MenuOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Menu, Table, Tooltip } from "antd";
import { FC, useState } from "react";
import InvitSendCheckbox from "../atoms/InvitSendCheckbox";
import {
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "../../shared/atoms/TagsResponses";
import DrawerDetailsGuest from "./DrawerDetailsGuest";
import SendEmailModal from "./SendEmailModal";

const GuestListTable: FC<{
  data: WeddingGuests[];
  updateGuest: (
    updatedGuestData: Partial<WeddingGuests>
  ) => Promise<WeddingGuests[] | null | undefined>;
}> = ({ data, updateGuest }) => {
  const [emailOpen, setSendEmailOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<WeddingGuests>();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const clearSelectedGuest = () => {
    setSelectedGuest(undefined);
  };

  const rowClassName = (record: any) => {
    if (record.isPresent === true) {
      return "successRow";
    } else if (record.isPresent === false) {
      return "errorRow";
    }
    return "";
  };

  const actionsMenu = (record: any) => (
    <Menu className="isAdmin">
      <Menu.Item
        key="copyLink"
        onClick={() => {
          navigator.clipboard.writeText(
            `${process.env.NEXT_PUBLIC_BASE_URL}?uuid=${record.uuid}`
          );
        }}
        icon={<CopyOutlined />}
      >
        Copier le lien d'invitation
      </Menu.Item>
      <Menu.Item
        key="viewDetails"
        onClick={() => {
          setSelectedGuest({ ...record });
          setDrawerVisible(true);
        }}
        icon={<EyeOutlined />}
      >
        Voir le détail
      </Menu.Item>

      {process.env.NEXT_PUBLIC_ACTIVATE_EMAIL === "1" &&
        record.email &&
        record.isPresent !== true &&
        record.isPresent !== false && (
          <Menu.Item
            key="sendEmail"
            onClick={() => {
              setSelectedGuest({ ...record });
              setSendEmailOpen(true);
            }}
            icon={<MailOutlined />}
          >
            Envoyer l'email d'invitation
          </Menu.Item>
        )}
    </Menu>
  );

  const columns = [
    {
      title: "Invit envoyée",
      key: "invitSend",
      render: (_: any, record: WeddingGuests) => (
        <InvitSendCheckbox
          checked={record.invitSend}
          updateGuest={updateGuest}
          guest={record}
          setSelectedGuest={setSelectedGuest}
          clearSelectedGuest={clearSelectedGuest}
        />
      ),
    },
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
      title: "Réponse",
      dataIndex: "isPresent",
      key: "isPresent",
      render: (isPresent: boolean | null) => (
        <TagResponseIsPresent isPresent={isPresent} />
      ),
    },
    {
      title: "Peut venir avec quelqu'un",
      dataIndex: "canComeWithSomeone",
      key: "canComeWithSomeone",
      render: (canComeWith: boolean) => (
        <TagResponseCanComeWithSomeone canComeWithSomeone={canComeWith} />
      ),
    },
    {
      title: "Vient avec",
      dataIndex: "comeWithSomeone",
      key: "comeWithSomeone",
      render: (comeWith: boolean | null, record: any) => (
        <TagRepsponseComeWithSomeone
          comeWithSomeone={comeWith}
          guestOfGuestFirstname={record.guestOfGuestFirstname}
          guestOfGuestLastname={record.guestOfGuestLastname}
        />
      ),
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "actions",
      render: (_: any, record: any) => (
        <>
          <Dropdown overlay={actionsMenu(record)} trigger={["click"]}>
            <Badge dot={record.message ? true : false}>
              <Button type="text" icon={<MenuOutlined />} />
            </Badge>
          </Dropdown>
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
        rowClassName={rowClassName}
      />
      <SendEmailModal
        emailOpen={emailOpen}
        setSendEmailOpen={setSendEmailOpen}
        clearSelectedGuest={clearSelectedGuest}
        guestEmail={selectedGuest?.email}
        guestUuid={selectedGuest?.uuid}
      />
      {drawerVisible && selectedGuest && (
        <DrawerDetailsGuest
          guest={selectedGuest}
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
          clearSelectedGuest={clearSelectedGuest}
        />
      )}
    </div>
  );
};

export default GuestListTable;
