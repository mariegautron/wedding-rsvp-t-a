import { CopyOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { FC } from "react";

const InvitationLink: FC<{ uuid: string }> = ({ uuid }) => {
  return (
    <Space>
      <p>
        <strong>Lien d'invitation :</strong>{" "}
        <span>{`${process.env.NEXT_PUBLIC_BASE_URL}?uuid=${uuid}`}</span>
      </p>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(
            `${process.env.NEXT_PUBLIC_BASE_URL}?uuid=${uuid}`
          );
        }}
        icon={<CopyOutlined />}
      />
    </Space>
  );
};

export default InvitationLink;
