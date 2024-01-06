"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const getImagesFromStorage = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase.storage.from("images").list();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};

export const getImagesUrlFromStorage = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const data = await getImagesFromStorage();

    if (!data) {
      throw new Error();
    }

    const imageUrls = data.map((image) => {
      return supabase.storage.from("images").getPublicUrl(image.name);
    });

    return imageUrls;
  } catch (error) {
    console.error("Error fetching url photos:", error);
    return [];
  }
};
