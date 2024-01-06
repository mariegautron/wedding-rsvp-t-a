"use server";

import { deleteGuest, updateGuest } from "@/actions/guest";
import GuestListView from "@/components/admin/page/GuestListView";
import AdminLayout from "@/layouts/AdminLayout";
import { COLLECTION_NAMES } from "@/utils/supabase/enums";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function WeddingGuests() {
  let data = [];
  let error = null;

  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const response = await supabase
      .from(COLLECTION_NAMES.WEDDING_GUESTS)
      .select();
    data = response.data || [];

    if (response.error) {
      throw new Error(response.error.message);
    }
  } catch (err: any) {
    error =
      err.message ||
      "Une erreur s'est produite lors du chargement des invités.";
  }

  return (
    <AdminLayout>
      {!error && (
        <GuestListView
          data={data}
          updateGuest={updateGuest}
          deleteGuest={deleteGuest}
        />
      )}
    </AdminLayout>
  );
}
