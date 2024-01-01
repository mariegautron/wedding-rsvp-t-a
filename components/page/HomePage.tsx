"use client";

import { WeddingGuests } from "@/utils/types/weddinggests";
import { Result, Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

const HomePage: FC<{
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>;
}> = ({ fetchGuestData }) => {
  const searchParams = useSearchParams();
  const [guestData, setGuestData] = useState<WeddingGuests | null | undefined>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const uuid = searchParams.get("uuid");

    if (!uuid) {
      // Si l'UUID est manquant dans les query params
      return; // Ou tu peux afficher un message ici
    }

    // Récupérer les données du guest en utilisant l'UUID
    const guestData = async () => {
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

    guestData();
  }, [searchParams]);

  if (!searchParams.get("uuid")) {
    return (
      <Result
        status="warning"
        title="Tu dois recevoir un lien d'invitation pour accéder au site."
      />
    );
  }

  if (loading) {
    return <Spin size="large" />;
  }

  if (!guestData) {
    return (
      <Result
        status="error"
        title="Ton lien d'invitation n'est surement pas bon !"
      />
    );
  }

  // Afficher les données du guest
  return (
    <div>
      <p>Bienvenue, {guestData.firstname}!</p>
      {/* Affiche les autres données du guest ici */}
    </div>
  );
};

export default HomePage;
