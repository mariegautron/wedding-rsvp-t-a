import { COLLECTION_NAMES } from "@/utils/supabase/enums";
import { createClient } from "@/utils/supabase/server";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { cookies } from "next/headers";

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
    const { firstname, lastname } = values;

    const guestExists = await checkIfGuestExists(firstname, lastname);

    if (guestExists) {
      throw new Error("Cet invité est déjà dans la liste !");
    }

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const guestData: WeddingGuests = {
      firstname,
      lastname,
      canComeWithSomeone: values.canComeWithSomeone || false,
    };

    const { data, error } = await supabase
      .from(COLLECTION_NAMES.WEDDING_GUESTS)
      .insert([guestData]);

    if (error) {
      throw new Error("Une erreur s'est produite lors de l'ajout de l'invité.");
    }

    console.log("Nouveaux invités ajoutés :", data);
    return data;
  } catch (error: any) {
    console.error("Erreur lors de l'ajout des invités :", error.message);
    throw new Error(error.message);
  }
};
