import React from "react";
import ReactDOM from "react-dom";
import Message, { MessageProps } from "@/components/design-system/Message";
import { MessageType } from "@/utils/enums/messages";

const showMessage = (props: MessageProps) => {
  const messageRoot = document.getElementById("message-root");

  if (messageRoot) {
    const uniqueKey = Date.now().toString();
    const messageElement = React.createElement(Message, {
      ...props,
      key: uniqueKey,
    });
    ReactDOM.render(messageElement, messageRoot);
  } else {
    console.error("Message root element not found.");
  }
};

export const messageService = {
  success: (text: string) => showMessage({ type: MessageType.SUCCESS, text }),
  error: (text: string) => showMessage({ type: MessageType.ERROR, text }),
  info: (text: string) => showMessage({ type: MessageType.INFO, text }),
  warning: (text: string) => showMessage({ type: MessageType.WARNING, text }),
};
