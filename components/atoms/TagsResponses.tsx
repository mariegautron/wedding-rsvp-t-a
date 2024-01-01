import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC } from "react";
import { Tag } from "antd";

export const TagResponseIsPresent: FC<{
  isPresent: boolean | null | undefined;
}> = ({ isPresent }) => {
  return (
    <span>
      {isPresent === true ? (
        <Tag color="green">Présent</Tag>
      ) : isPresent === false ? (
        <Tag color="red">Absent</Tag>
      ) : (
        <Tag color="default">N'a pas encore répondu</Tag>
      )}
    </span>
  );
};

export const TagResponseCanComeWithSomeone: FC<{
  canComeWithSomeone: boolean;
}> = ({ canComeWithSomeone }) => {
  return (
    <span>
      {canComeWithSomeone ? (
        <Tag color="green">Oui, peut venir avec quelqu'un</Tag>
      ) : (
        <Tag color="red">Non, ne peut pas venir avec quelqu'un</Tag>
      )}
    </span>
  );
};

export const TagRepsponseComeWithSomeone: FC<{
  comeWithSomeone?: boolean | null;
  guestOfGuestFirstname?: string;
  guestOfGuestLastname?: string;
}> = ({ comeWithSomeone, guestOfGuestFirstname, guestOfGuestLastname }) => {
  return (
    <span>
      {comeWithSomeone === true ? (
        <Tag color="green">{`Vient avec ${guestOfGuestFirstname} ${guestOfGuestLastname}`}</Tag>
      ) : comeWithSomeone === false ? (
        <Tag color="red">Ne vient pas accompagné·e</Tag>
      ) : (
        <Tag color="default">N'a pas indiqué si accompagné</Tag>
      )}
    </span>
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
