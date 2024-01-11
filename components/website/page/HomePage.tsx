"use client";

import Heading from "@/components/design-system/Headings";
import Loading from "@/components/design-system/Loading";
import Subtile from "@/components/design-system/Subtitle";
import useDeadlineCheck from "@/utils/hooks/useDeadlineCheck";
import useGuestData from "@/utils/hooks/useGuestData";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC } from "react";
import Footer from "../atoms/Footer";
import Hero from "../molecules/Hero";
import HeroTemplatePage from "../molecules/HeroTemplatePage";
import ImportantInformation from "../molecules/ImportantInformations";
import PhotoGallery from "../molecules/PhotoGallery";
import RSVPStepper from "../molecules/RSVPStepper";

const HomePage: FC<{
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
  getImagesUrlFromStorage: () => Promise<any>;
}> = ({ fetchGuestData, updateGuest, getImagesUrlFromStorage }) => {
  const [guestData, loading] = useGuestData(fetchGuestData);

  const deadlinePassed = useDeadlineCheck();

  if (loading) {
    return <Loading />;
  }

  if (!guestData) {
    return (
      <HeroTemplatePage>
        <div>
          <Subtile mode="dark">Il y a une erreur !</Subtile>
        </div>{" "}
        <Heading level={1} className="my-5">
          Ton lien d'invitation n'est sûrement pas bon !
        </Heading>{" "}
      </HeroTemplatePage>
    );
  }

  return (
    <div className="flex flex-col md:gap-20 gap-10">
      <Hero guest={guestData} />
      {!deadlinePassed && (
        <RSVPStepper guest={guestData} updateGuest={updateGuest} />
      )}
      <ImportantInformation />
      <PhotoGallery getImagesUrlFromStorage={getImagesUrlFromStorage} />
      <Footer />
    </div>
  );
};

export default HomePage;
