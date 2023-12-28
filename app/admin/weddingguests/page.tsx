"use server";

import GuestListView from "@/components/page/GuestListView";
import AdminLayout from "@/layouts/AdminLayout";
import { COLLECTION_NAMES } from "@/utils/supabase/enums";
import { createClient } from "@/utils/supabase/server";
import { Alert } from "antd";
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

    console.log({ data });

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
      {error && (
        <Alert message="Erreur" description={error} type="error" showIcon />
      )}
      {!error && <GuestListView data={data} />}
    </AdminLayout>
  );
}
