"use client";

import { messageService } from "@/components/design-system/Message/messageService";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/utils/enums/messages";
import { WeddingGuests } from "@/utils/types/weddinggests";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Menu, Table } from "antd";
import { FC, useState } from "react";
import {
  TagRepsponseComeWithSomeone,
  TagResponseCanComeWithSomeone,
  TagResponseIsPresent,
} from "../../shared/atoms/TagsResponses";
import InvitSendCheckbox from "../atoms/InvitSendCheckbox";
import DrawerDetailsGuest from "./DrawerDetailsGuest";
import ModalUpdateGuest from "./ModalUpdateGuest";
import SendEmailModal from "./SendEmailModal";

const GuestListTable: FC<{
  data: WeddingGuests[];
  updateGuest: (
    updatedGuestData: Partial<WeddingGuests>
  ) => Promise<WeddingGuests[] | null | undefined>;
  deleteGuest: (guestId: string) => Promise<{ success: boolean }>;
}> = ({ data, updateGuest, deleteGuest }) => {
  const [emailOpen, setSendEmailOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<WeddingGuests>();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false);

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

  const handleDeleteGuest = async (guestId: string) => {
    try {
      // Appelle la fonction pour supprimer l'invité en utilisant l'ID
      await deleteGuest(guestId);

      messageService.success(SUCCESS_MESSAGES.DELETE_GUEST);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'invité :", error);
      messageService.error(ERROR_MESSAGES.ADMIN_ERROR);
    }
  };

  const actionsMenu = (record: any) => (
    <Menu>
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
      <Menu.Item
        key="edit"
        onClick={() => {
          setSelectedGuest({ ...record });
          setModalUpdateVisible(true);
        }}
        icon={<EditOutlined />}
      >
        Modifier
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
      <Menu.Item
        key="updateGuest"
        onClick={() => handleDeleteGuest(record.id)}
        icon={<DeleteOutlined color="#bc5354" />}
        style={{ color: "#bc5354" }}
      >
        Supprimer
      </Menu.Item>
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
    <div className="text-Raleway text-current bg-[#ffff] p-4 rounded">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
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
      {modalUpdateVisible && selectedGuest && (
        <ModalUpdateGuest
          visible={modalUpdateVisible}
          handleCancel={() => setModalUpdateVisible(false)}
          updateGuest={updateGuest}
          selectedGuest={selectedGuest}
        />
      )}
    </div>
  );
};

export default GuestListTable;
