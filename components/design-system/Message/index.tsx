import { MessageType } from "@/utils/enums/messages";
import React, { FC, useEffect, useState } from "react";
import Tag from "../Tag";

export interface MessageProps {
  type: MessageType;
  text: string;
}

const Message: FC<MessageProps> = ({ type, text }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisible(true);
  }, []);

  const tagVariant =
    type === MessageType.INFO || type === MessageType.WARNING
      ? "default"
      : type === MessageType.SUCCESS
      ? "success"
      : "error";

  return <>{visible && <Tag variant={tagVariant}>{text}</Tag>}</>;
};

export default Message;
