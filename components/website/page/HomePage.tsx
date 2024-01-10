"use client";

import Subtile from "@/components/design-system/Subtitle";
import useDeadlineCheck from "@/utils/hooks/useDeadlineCheck";
import useGuestData from "@/utils/hooks/useGuestData";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { Spin } from "antd";
import { FC } from "react";
import Hero from "../molecules/Hero";
import HeroTemplatePage from "../molecules/HeroTemplatePage";
import Loading from "@/components/design-system/Loading";
import RSVPStepper from "../molecules/RSVPStepper";
import Heading from "@/components/design-system/Headings";

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
    <div>
      <Hero guest={guestData} />
      {!deadlinePassed && (
        <RSVPStepper guest={guestData} updateGuest={updateGuest} />
      )}
      {/* <ImportantInformation />
      <PhotoGallery getImagesUrlFromStorage={getImagesUrlFromStorage} />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
