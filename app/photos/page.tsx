"use server";

import { getImagesUrlFromStorage } from "@/actions/storage";
import PhotosPage from "@/components/website/page/PhotosPage";

export default async function Photos() {
  return <PhotosPage getImagesUrlFromStorage={getImagesUrlFromStorage} />;
}
