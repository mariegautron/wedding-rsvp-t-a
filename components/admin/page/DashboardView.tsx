// components/admin/page/DashboardView.tsx
import React from "react";
import StatisticList from "@/components/admin/molecules/StatisticList";
import { WeddingGuests } from "@/utils/types/weddinggests";
import { BucketName } from "@/utils/enums/bucket";
import { getImagesUrlFromStorage } from "@/actions/storage";
import ImageDownloader from "../molecules/ImageDownloader";

interface DashboardViewProps {
  data: WeddingGuests[];
}

const DashboardView: React.FC<DashboardViewProps> = ({ data }) => {
  const comeWithSomeoneCount = data.filter(
    (guest) => guest.comeWithSomeone === true
  ).length;
  const guestCount = data.length + comeWithSomeoneCount;

  const statistics = [
    {
      title: "Personnes invitées (personnes présentes + leurs +1 + vous 2)",
      value: guestCount + 2,
    },
    { title: "Personnes invitées avec un·e +1", value: comeWithSomeoneCount },
  ];

  return (
    <div className="container mx-auto p-6">
      <StatisticList statistics={statistics} />
    </div>
  );
};

export default DashboardView;
