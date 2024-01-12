"use server";

import { COLLECTION_NAMES } from "@/utils/supabase/enums";
import { createClient } from "@/utils/supabase/server";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { MenuPath } from "@/utils/enums/menuItems";
import { GuestUpdateError } from "@/utils/errors";
import { ERROR_MESSAGES, MessageType } from "@/utils/enums/messages";
import { addLogs } from "./logs";

// Fonction pour vérifier si l'invité existe déjà dans la base de données
const checkIfGuestExists = async (
  firstname: string,
  lastname: string
): Promise<boolean> => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: existingGuests, error: existingError } = await supabase
    .from(COLLECTION_NAMES.WEDDING_GUESTS)
    .select("*")
    .eq("firstname", firstname)
    .eq("lastname", lastname);

  if (existingError) {
    await addLogs({
      type: MessageType.ERROR,
      message: JSON.stringify(existingError),
      params: JSON.stringify({ firstname, lastname }),
      funcName: "checkIfGuestExists",
    });
    throw new Error(
      "Une erreur s'est produite lors de la vérification de l'invité."
    );
  }

  await addLogs({
    type: MessageType.SUCCESS,
    params: JSON.stringify({ firstname, lastname }),
    funcName: "checkIfGuestExists",
  });

  return existingGuests && existingGuests.length > 0;
};

export const addWeddingGuest = async (values: WeddingGuests): Promise<any> => {
  "use server";

  try {
    const {
      firstname,
      lastname,
      email,
      uuid,
      canComeWithSomeone,
      comeWithSomeone,
      guestOfGuestFirstname,
      guestOfGuestLastname,
      isPresent,
    } = values;

    const guestExists = await checkIfGuestExists(firstname, lastname);

    if (guestExists) {
      await addLogs({
        type: MessageType.ERROR,
        message: "Cet invité est déjà dans la liste !",
        params: JSON.stringify(values),
        funcName: "addWeddingGuest",
        guestID: values.id,
        guestUuid: values.uuid,
      });
      throw new Error("Cet invité est déjà dans la liste !");
    }

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const guestData: WeddingGuests = {
      firstname,
      lastname,
      email,
      uuid,
      canComeWithSomeone: canComeWithSomeone || false,
      comeWithSomeone,
      guestOfGuestFirstname,
      guestOfGuestLastname,
      isPresent,
    };

    const { data, error } = await supabase
      .from(COLLECTION_NAMES.WEDDING_GUESTS)
      .insert([guestData]);

    if (error) {
      await addLogs({
        type: MessageType.ERROR,
        message: JSON.stringify(error),
        params: JSON.stringify(values),
        funcName: "addWeddingGuest",
        guestID: values.id,
        guestUuid: values.uuid,
      });
      throw new Error("Une erreur s'est produite lors de l'ajout de l'invité.");
    }

    await addLogs({
      type: MessageType.SUCCESS,
      params: JSON.stringify(values),
      funcName: "addWeddingGuest",
      guestID: values.id,
      guestUuid: values.uuid,
    });

    revalidatePath(MenuPath.WEDDING_GUESTS);

    return data;
  } catch (error: any) {
    await addLogs({
      type: MessageType.ERROR,
      message: JSON.stringify(error),
      params: JSON.stringify(values),
      funcName: "addWeddingGuest",
      guestID: values.id,
      guestUuid: values.uuid,
    });

    console.error("Erreur lors de l'ajout des invités :", error.message);
    throw new Error(error.message);
  }
};

export const getGuestByUuid = async (
  uuid: string
): Promise<WeddingGuests | null> => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from(COLLECTION_NAMES.WEDDING_GUESTS)
    .select("*")
    .eq("uuid", uuid)
    .single();

  if (error) {
    await addLogs({
      type: MessageType.ERROR,
      message: JSON.stringify(error),
      params: JSON.stringify(uuid),
      funcName: "getGuestByUuid",
      guestUuid: uuid,
    });
    throw new Error(
      "Une erreur s'est produite lors de la récupération de l'invité."
    );
  }

  await addLogs({
    type: MessageType.SUCCESS,
    params: JSON.stringify(uuid),
    funcName: "getGuestByUuid",
    guestUuid: uuid,
  });

  return data;
};

export const updateGuest = async (
  updatedGuestData: Partial<WeddingGuests>
): Promise<WeddingGuests[] | null | undefined> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { guestOfGuestFirstname, guestOfGuestLastname } = updatedGuestData;

    if (guestOfGuestFirstname && guestOfGuestLastname) {
      const guestExists = await checkIfGuestExists(
        guestOfGuestFirstname,
        guestOfGuestLastname
      );

      if (guestExists) {
        const error: GuestUpdateError = {
          type: "guestExists",
          message: ERROR_MESSAGES.GUEST_EXIST,
        };

        await addLogs({
          type: MessageType.ERROR,
          message: JSON.stringify(error),
          params: JSON.stringify(updatedGuestData),
          funcName: "updateGuest",
          guestID: updatedGuestData.id,
          guestUuid: updatedGuestData.uuid,
        });
        throw new Error(JSON.stringify(error));
      }
    }

    const {
      data,
      error,
    }: { data: WeddingGuests[] | null | undefined; error: any } = await supabase
      .from(COLLECTION_NAMES.WEDDING_GUESTS)
      .update(updatedGuestData)
      .eq("id", updatedGuestData.id)
      .select();

    if (error) {
      const updateError: GuestUpdateError = {
        type: "updateError",
        message:
          "Une erreur s'est produite lors de la mise à jour de l'invité.",
      };

      await addLogs({
        type: MessageType.ERROR,
        message: JSON.stringify(error),
        params: JSON.stringify(updatedGuestData),
        funcName: "updateGuest",
        guestID: updatedGuestData.id,
        guestUuid: updatedGuestData.uuid,
      });
      throw new Error(JSON.stringify(updateError));
    }

    await addLogs({
      type: MessageType.SUCCESS,
      params: JSON.stringify(updatedGuestData),
      funcName: "updateGuest",
      guestID: updatedGuestData.id,
      guestUuid: updatedGuestData.uuid,
    });

    revalidatePath(`/?uuid=${updatedGuestData.uuid}`);
    revalidatePath(MenuPath.WEDDING_GUESTS);

    return data;
  } catch (error: any | GuestUpdateError) {
    await addLogs({
      type: MessageType.ERROR,
      message: JSON.stringify(error),
      params: JSON.stringify(updatedGuestData),
      funcName: "updateGuest",
      guestID: updatedGuestData.id,
      guestUuid: updatedGuestData.uuid,
    });

    console.error("Erreur lors de la mise à jour de l'invité :", error.message);
    throw error;
  }
};

export const deleteGuest = async (
  guestId: string
): Promise<{ success: boolean }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase
      .from(COLLECTION_NAMES.WEDDING_GUESTS)
      .delete()
      .eq("id", guestId);

    if (error) {
      await addLogs({
        type: MessageType.ERROR,
        message: JSON.stringify(error),
        params: JSON.stringify(guestId),
        funcName: "deleteGuest",
        guestID: parseInt(guestId),
      });
      throw new Error(
        "Une erreur s'est produite lors de la suppression de l'invité."
      );
    }

    await addLogs({
      type: MessageType.SUCCESS,
      params: JSON.stringify(guestId),
      funcName: "deleteGuest",
      guestID: parseInt(guestId),
    });

    revalidatePath(MenuPath.WEDDING_GUESTS);

    return { success: true };
  } catch (error: any) {
    await addLogs({
      type: MessageType.ERROR,
      message: JSON.stringify(error),
      params: JSON.stringify(guestId),
      funcName: "deleteGuest",
      guestID: parseInt(guestId),
    });

    console.error("Erreur lors de la suppression de l'invité :", error.message);
    throw new Error(error.message);
  }
};
