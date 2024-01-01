"use client";

import useGuestData from "@/utils/hooks/useGuestData";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Result, Spin } from "antd";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import Hero from "../molecules/Hero";

const HomePage: FC<{
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>;
}> = ({ fetchGuestData }) => {
  const searchParams = useSearchParams();

  const [guestData, loading] = useGuestData(fetchGuestData);

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

  return (
    <div>
      <Hero firstname={guestData.firstname} />
    </div>
  );
};

export default HomePage;
