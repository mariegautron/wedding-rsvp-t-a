import { Drawer, Tag, Divider, Space, Button } from "antd";
import { FC } from "react";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { CopyOutlined } from "@ant-design/icons";

const DrawerDetailsGuest: FC<{
  guest: WeddingGuests;
  drawerVisible: boolean;
  setDrawerVisible: (drawerVisible: boolean) => void;
}> = ({ guest, drawerVisible, setDrawerVisible }) => {
  return (
    <Drawer
      className="isAdmin"
      title="Détails de l'invité"
      placement="right"
      onClose={() => setDrawerVisible(false)}
      visible={drawerVisible}
      width={400}
    >
      <div>
        <p>
          <strong>Prénom :</strong> {guest?.firstname}
        </p>
        <p>
          <strong>Nom :</strong> {guest?.lastname}
        </p>
        <Space>
          <p>
            <strong>Lien d'invitation :</strong>{" "}
            <span>{`${process.env.NEXT_PUBLIC_BASE_URL}?uuid=${guest.uuid}`}</span>
          </p>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `${process.env.NEXT_PUBLIC_BASE_URL}?uuid=${guest.uuid}`
              );
            }}
            icon={<CopyOutlined />}
          />
        </Space>
        <p>
          <strong>Réponse :</strong>{" "}
          {guest?.isPresent === true ? (
            <Tag color="green">Présent</Tag>
          ) : guest?.isPresent === false ? (
            <Tag color="red">Absent</Tag>
          ) : (
            <Tag color="default">Non spécifié</Tag>
          )}
        </p>
        <p>
          <strong>Peut venir avec quelqu'un :</strong>{" "}
          {guest?.canComeWithSomeone ? "Oui" : "Non"}
        </p>
        {guest?.canComeWithSomeone && (
          <p>
            <strong>Vient avec :</strong>{" "}
            {guest?.comeWithSomeone === true ? (
              <Tag color="green">{`${guest.guestOfGuestFirstname} ${guest.guestOfGuestLastname}`}</Tag>
            ) : guest?.comeWithSomeone === false ? (
              <Tag color="red">Non</Tag>
            ) : (
              <Tag color="default">Non spécifié</Tag>
            )}
          </p>
        )}
        {guest.message && (
          <p>
            <strong>Message :</strong> {guest.message || "Non spécifié"}
          </p>
        )}
      </div>
    </Drawer>
  );
};
export default DrawerDetailsGuest;
