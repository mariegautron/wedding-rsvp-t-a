import Tag from "@/components/design-system/Tag";
import { formatDate } from "@/utils/functions/formatDate";
import { hasResponded } from "@/utils/functions/hasResponded";
import { FC } from "react";

export const TagResponseIsPresent: FC<{
  isPresent: boolean | null | undefined;
}> = ({ isPresent }) => {
  return (
    <>
      {isPresent === true ? (
        <Tag variant="success">Présent·e</Tag>
      ) : isPresent === false ? (
        <Tag variant="error">Absent·e</Tag>
      ) : (
        <Tag variant="default">Non répondu·e</Tag>
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
        <Tag variant="success">Peut être accompagné·e</Tag>
      ) : (
        <Tag variant="error">Pas accompagné·e</Tag>
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
        <Tag variant="success">
          {guestOfGuestLastname
            ? `Accompagné·e par ${guestOfGuestFirstname} ${guestOfGuestLastname}`
            : `Accompagné·e par ${guestOfGuestFirstname}`}
        </Tag>
      ) : comeWithSomeone === false ? (
        <Tag variant="error">Non accompagné·e</Tag>
      ) : (
        <Tag variant="default">Non spécifié pour l'accompagnement</Tag>
      )}
    </>
  );
};

export const TagNameGuest: FC<{ firstname: string; lastname: string }> = ({
  firstname,
  lastname,
}) => {
  return <Tag variant="default">{`${firstname} ${lastname}`}</Tag>;
};

export const TagEmailGuest: FC<{ email: string }> = ({ email }) => {
  return <Tag variant="default">{`${email}`}</Tag>;
};

export const TagDateInviteGuest: FC<{
  invitSend?: boolean;
  dateInvitSend?: Date;
}> = ({ invitSend, dateInvitSend }) => {
  if (!invitSend) {
    return <Tag variant="error">Invitation non envoyée</Tag>;
  } else if (dateInvitSend) {
    return (
      <Tag variant="success">{`Invitation envoyée le ${formatDate(
        dateInvitSend
      )}`}</Tag>
    );
  } else {
    return <Tag variant="success">Invitation envoyée</Tag>;
  }
};

export const TagDateResponseGuest: FC<{
  isPresent?: boolean;
  dateResponseSend?: Date;
}> = ({ isPresent, dateResponseSend }) => {
  const guestHasResponded = hasResponded(isPresent);

  if (!guestHasResponded) {
    return <Tag variant="default">N'a pas répondu</Tag>;
  } else if (dateResponseSend) {
    return (
      <Tag variant="default">{`Répondu le ${formatDate(
        dateResponseSend
      )}`}</Tag>
    );
  }
};
