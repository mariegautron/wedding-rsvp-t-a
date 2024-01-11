"use server";

import { COLLECTION_NAMES } from "@/utils/supabase/enums";
import { createClient } from "@/utils/supabase/server";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { MenuPath } from "@/utils/enums/menuItems";
import { GuestUpdateError } from "@/utils/errors";
import { ERROR_MESSAGES } from "@/utils/enums/messages";

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
    throw new Error(
      "Une erreur s'est produite lors de la vérification de l'invité."
    );
  }

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
      throw new Error("Une erreur s'est produite lors de l'ajout de l'invité.");
    }

    revalidatePath(MenuPath.WEDDING_GUESTS);

    return data;
  } catch (error: any) {
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
    throw new Error(
      "Une erreur s'est produite lors de la récupération de l'invité."
    );
  }

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
      throw new Error(JSON.stringify(updateError));
    }

    revalidatePath(`/?uuid=${updatedGuestData.uuid}`);
    revalidatePath(MenuPath.WEDDING_GUESTS);

    return data;
  } catch (error: any | GuestUpdateError) {
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
      throw new Error(
        "Une erreur s'est produite lors de la suppression de l'invité."
      );
    }

    revalidatePath(MenuPath.WEDDING_GUESTS);

    return { success: true };
  } catch (error: any) {
    console.error("Erreur lors de la suppression de l'invité :", error.message);
    throw new Error(error.message);
  }
};
