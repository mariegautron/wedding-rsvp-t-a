"use client";

import { messageService } from "@/components/design-system/Message/messageService";
import { MenuPath } from "@/utils/enums/menuItems";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/utils/enums/messages";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import AddOrUpdateForm from "./AddOrUpdateForm";
import Heading from "@/components/design-system/Headings";

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
      messageService.success(SUCCESS_MESSAGES.ADD_GUEST);
      router.push(MenuPath.WEDDING_GUESTS);
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout de l'invité :",
        (error as any).message
      );
      messageService.error(ERROR_MESSAGES.ADMIN_ERROR);
    }
  };

  return (
    <div className="flex flex-col space-y-5">
      <Heading level={3}>Ajouter une nouvelle personne invitée</Heading>
      <AddOrUpdateForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddGuestForm;
