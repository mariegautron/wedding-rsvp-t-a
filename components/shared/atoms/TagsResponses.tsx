import { formatDate } from "@/utils/functions/formatDate";
import { Tag } from "antd";
import { FC } from "react";

export const TagResponseIsPresent: FC<{
  isPresent: boolean | null | undefined;
}> = ({ isPresent }) => {
  return (
    <>
      {isPresent === true ? (
        <Tag color="green">Présent·e</Tag>
      ) : isPresent === false ? (
        <Tag color="red">Absent·e</Tag>
      ) : (
        <Tag color="default">Non répondu·e</Tag>
      )}
    </>
  );
};

export const TagResponseCanComeWithSomeone: FC<{
  canComeWithSomeone: boolean;
}> = ({ canComeWithSomeone }) => {
  return (
    <>
      {canComeWithSomeone ? (
        <Tag color="green">Peut être accompagné·e</Tag>
      ) : (
        <Tag color="red">Pas accompagné·e</Tag>
      )}
    </>
  );
};

export const TagRepsponseComeWithSomeone: FC<{
  comeWithSomeone?: boolean | null;
  guestOfGuestFirstname?: string;
  guestOfGuestLastname?: string;
}> = ({ comeWithSomeone, guestOfGuestFirstname, guestOfGuestLastname }) => {
  return (
    <>
      {comeWithSomeone === true ? (
        <Tag color="green">
          {guestOfGuestLastname
            ? `Accompagné·e par ${guestOfGuestFirstname} ${guestOfGuestLastname}`
            : `Accompagné·e par ${guestOfGuestFirstname}`}
        </Tag>
      ) : comeWithSomeone === false ? (
        <Tag color="red">Non accompagné·e</Tag>
      ) : (
        <Tag color="default">Non spécifié pour l'accompagnement</Tag>
      )}
    </>
  );
};

export const TagNameGuest: FC<{ firstname: string; lastname: string }> = ({
  firstname,
  lastname,
}) => {
  return <Tag color="default">{`${firstname} ${lastname}`}</Tag>;
};

export const TagEmailGuest: FC<{ email: string }> = ({ email }) => {
  return <Tag color="default">{`${email}`}</Tag>;
};

export const TagDateInviteGuest: FC<{
  invitSend?: boolean;
  dateInvitSend?: Date;
}> = ({ invitSend, dateInvitSend }) => {
  if (!invitSend) {
    return <Tag color="red">Invitation non envoyée</Tag>;
  } else if (dateInvitSend) {
    return (
      <Tag color="green">{`Invitation envoyée le ${formatDate(
        dateInvitSend
      )}`}</Tag>
    );
  } else {
    return <Tag color="green">Invitation envoyée</Tag>;
  }
};
