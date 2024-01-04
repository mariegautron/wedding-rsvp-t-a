"use server";

import { updateGuest } from "@/actions/guest";
import HomePage from "@/components/page/HomePage";
import { fetchGuestData } from "@/services/guest";

export default async function Index() {
  return <HomePage fetchGuestData={fetchGuestData} updateGuest={updateGuest} />;
}
