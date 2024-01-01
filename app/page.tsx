"use server";

import { fetchGuestData } from "@/actions/guest";
import HomePage from "@/components/page/HomePage";

export default async function Index() {
  return <HomePage fetchGuestData={fetchGuestData} />;
}
