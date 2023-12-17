"use client";

import { Table, Switch, Tag } from "antd";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC } from "react";

const GuestList: FC<{ data: WeddingGuests[] }> = ({ data }) => {
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
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des invités</h1>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        className="border-collapse border border-gray-300"
      />
    </div>
  );
};

export default GuestList;
