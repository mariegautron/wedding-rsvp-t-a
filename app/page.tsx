"use server";

import { updateGuest } from "@/actions/guest";
import { getImagesUrlFromStorage } from "@/actions/storage";
import HomePage from "@/components/website/page/HomePage";
import { fetchGuestData } from "@/services/guest";

export default async function Index() {
  return <HomePage fetchGuestData={fetchGuestData} updateGuest={updateGuest} />;
}
