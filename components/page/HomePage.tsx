"use client";

import useGuestData from "@/utils/hooks/useGuestData";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Result, Spin } from "antd";
import { FC } from "react";
import Footer from "../atoms/Footer";
import HeroTemplatePage from "../atoms/HeroTemplatePage";
import Hero from "../molecules/Hero";
import RSVPStepper from "../molecules/RSVPStepper";

const HomePage: FC<{
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
}> = ({ fetchGuestData, updateGuest }) => {
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
      <RSVPStepper guest={guestData} updateGuest={updateGuest} />
      {/* <PhotoGallery /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
