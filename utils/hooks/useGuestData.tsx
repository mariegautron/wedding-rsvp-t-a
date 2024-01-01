import { useSearchParams } from "next/navigation";
import { WeddingGuests } from "../types/weddinggests";
import { useEffect, useState } from "react";

const useGuestData = (
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>
): [WeddingGuests | null | undefined, boolean] => {
  const searchParams = useSearchParams();
  const [guestData, setGuestData] = useState<WeddingGuests | null | undefined>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const uuid = searchParams.get("uuid");

    if (!uuid) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      try {
        const guest = await fetchGuestData(uuid as string);
        setGuestData(guest);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du guest :",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return [guestData, loading];
};

export default useGuestData;
