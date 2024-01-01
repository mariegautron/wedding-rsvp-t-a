"use client";

import useGuestData from "@/utils/hooks/useGuestData";
import { Result, Spin } from "antd";
import { FC } from "react";
import HeroTemplatePage from "../atoms/HeroTemplatePage";
import Hero from "../molecules/Hero";
import { WeddingGuests } from "@/utils/types/weddinggests";

const HomePage: FC<{
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>;
}> = ({ fetchGuestData }) => {
  const [guestData, loading] = useGuestData(fetchGuestData);

  if (loading) {
    return (
      <HeroTemplatePage>
        <Spin size="large" />
      </HeroTemplatePage>
    );
  }

  if (!guestData) {
    return (
      <HeroTemplatePage>
        <Result
          status="error"
          title="Ton lien d'invitation n'est sûrement pas bon !"
        />
      </HeroTemplatePage>
    );
  }

  return (
    <div>
      <Hero guest={guestData} />
    </div>
  );
};

export default HomePage;
