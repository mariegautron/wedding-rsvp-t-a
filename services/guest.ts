import { getGuestByUuid } from "@/actions/guest";
import { WeddingGuests } from "@/utils/types/weddinggests";

export const fetchGuestData = async (uuid: string) => {
  "use server";

  try {
    const guest: WeddingGuests | null = await getGuestByUuid(uuid as string);
    return guest;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données du guest :",
      error
    );
  }
};
