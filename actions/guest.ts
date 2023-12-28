"use server";

import { COLLECTION_NAMES } from "@/utils/supabase/enums";
import { createClient } from "@/utils/supabase/server";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { cookies } from "next/headers";

export const addWeddingGuest = async (values: WeddingGuests): Promise<any> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const guestData: WeddingGuests = {
      firstname: values.firstname,
      // Ajoutez les autres champs du formulaire ici en fonction de vos besoins
    };

    const { data, error } = await supabase
      .from(COLLECTION_NAMES.WEDDING_GUESTS)
      .insert([guestData]);

    if (error) {
      throw new Error(error.message);
    }

    console.log("Nouveaux invités ajoutés :", data);
    return data;
  } catch (error: any) {
    console.error("Erreur lors de l'ajout des invités :", error.message);
    throw new Error("Une erreur s'est produite lors de l'ajout des invités.");
  }
};
