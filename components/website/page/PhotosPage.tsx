"use client";

import { FC } from "react";
import Footer from "../atoms/Footer";
import Header from "../molecules/Header";
import PhotoGallery from "../molecules/PhotoGallery";
import PhotoShareCard from "../molecules/PhotoShareCard";

const PhotosPage: FC<{
  getImagesUrlFromStorage: () => Promise<any>;
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
