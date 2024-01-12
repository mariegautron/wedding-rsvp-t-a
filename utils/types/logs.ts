import { MessageType } from "../enums/messages";

export type Logs = {
  type: MessageType;
  message?: string;
  params: unknown;
  funcName: string;
  guestID?: number;
  guestUuid?: string;
};
