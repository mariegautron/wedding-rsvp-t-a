"use client";

import Heading from "@/components/design-system/Headings";
import Loading from "@/components/design-system/Loading";
import Subtile from "@/components/design-system/Subtitle";
import useDeadlineCheck from "@/utils/hooks/useDeadlineCheck";
import useGuestData from "@/utils/hooks/useGuestData";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { FC, Suspense } from "react";
import Footer from "../atoms/Footer";
import Hero from "../molecules/Hero";
import HeroTemplatePage from "../molecules/HeroTemplatePage";
import ImportantInformation from "../molecules/ImportantInformations";
import RSVPStepper from "../molecules/RSVPStepper";

const GuestDataComponent: FC<{
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
}> = ({ fetchGuestData, updateGuest }) => {
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
      <Footer />
    </div>
  );
};

const HomePage: FC<{
  fetchGuestData: (uuid: string) => Promise<WeddingGuests | null | undefined>;
  updateGuest: (
    updatedGuestData: WeddingGuests
  ) => Promise<WeddingGuests[] | null | undefined>;
}> = ({ fetchGuestData, updateGuest }) => {
  return (
    <Suspense fallback={<Loading />}>
      <GuestDataComponent
        fetchGuestData={fetchGuestData}
        updateGuest={updateGuest}
      />
    </Suspense>
  );
};

export default HomePage;
