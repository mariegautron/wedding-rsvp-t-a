"use client";

import { MenuPath } from "@/utils/constants/menuItems";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/utils/constants/messages";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import AddOrUpdateForm from "./AddOrUpdateForm";

interface AddGuestFormProps {
  addWeddingGuest: (values: WeddingGuests) => Promise<void>;
}

const AddGuestForm: FC<AddGuestFormProps> = ({ addWeddingGuest }) => {
  const router = useRouter();

  const handleFormSubmit = async (values: WeddingGuests) => {
    try {
      const uuid = uuidv4();

      const guestWithUUID = { ...values, uuid };

      await addWeddingGuest(guestWithUUID);
      message.success(SUCCESS_MESSAGES.ADD_GUEST);
      router.push(MenuPath.WEDDING_GUESTS);
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout de l'invité :",
        (error as any).message
      );
      message.error(ERROR_MESSAGES.ADMIN_ERROR);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Ajouter une nouvelle personne invitée</h2>
      <AddOrUpdateForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddGuestForm;
