"use server";

import { MessageType } from "@/utils/enums/messages";
import { addLogs } from "./logs";

export const sendEmail = async (
  guestEmail: string,
  invitationMessage: string,
  guestUuid: string
) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ guestEmail, invitationMessage, guestUuid }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await addLogs({
        type: MessageType.SUCCESS,
        params: JSON.stringify({ guestEmail, invitationMessage, guestUuid }),
        funcName: "sendEmail",
        guestUuid,
      });
      console.log("Email sent successfully!");
    } else {
      await addLogs({
        type: MessageType.ERROR,
        message: JSON.stringify(response),
        params: JSON.stringify({ guestEmail, invitationMessage, guestUuid }),
        funcName: "sendEmail",
        guestUuid,
      });
      console.error("Failed to send email");
    }
  } catch (error) {
    await addLogs({
      type: MessageType.ERROR,
      message: JSON.stringify(error),
      params: JSON.stringify({ guestEmail, invitationMessage, guestUuid }),
      funcName: "sendEmail",
      guestUuid,
    });
    console.error("Error sending email:", error);
    // Gérer les erreurs à l'utilisateur ic
  }
};
