"use client";

import { FC } from "react";
import Footer from "../atoms/Footer";
import Header from "../molecules/Header";
import PhotoGallery from "../molecules/PhotoGallery";
import PhotoShareCard from "../molecules/PhotoShareCard";
import { BucketName } from "@/utils/enums/bucket";

const PhotosPage: FC<{
  getImagesUrlFromStorage: (bucket: BucketName) => Promise<string[]>;
}> = ({ getImagesUrlFromStorage }) => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <Header />
      <PhotoShareCard />
      <PhotoGallery getImagesUrlFromStorage={getImagesUrlFromStorage} />
      <Footer />
    </div>
  );
};

export default PhotosPage;
