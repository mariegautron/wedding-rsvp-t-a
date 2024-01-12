import { Logs } from "@/utils/types/logs";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { COLLECTION_NAMES } from "@/utils/supabase/enums";

export const addLogs = async (log: Logs): Promise<any> => {
  "use server";

  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const logToAdd = { ...log, date: new Date() };

    const { data } = await supabase
      .from(COLLECTION_NAMES.LOGS)
      .insert([logToAdd])
      .select();

    return data;
  } catch (error: any) {
    console.log(error.message);
    console.error("Erreur du log :", error.message);
  }
};
