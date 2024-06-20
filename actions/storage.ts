// actions/storage.ts
"use server";

import { BucketName } from "@/utils/enums/bucket";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const getImagesFromStorage = async (bucket: BucketName) => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase.storage.from(bucket).list();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};

export const getImagesUrlFromStorage = async (
  bucket: BucketName
): Promise<string[]> => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const data = await getImagesFromStorage(bucket);

    if (!data) {
      throw new Error();
    }

    const imageUrls = data
      .map((image) => {
        return supabase.storage.from(bucket).getPublicUrl(image.name);
      })
      .map((url) => url.data.publicUrl)
      .filter((publicUrl) => !publicUrl.includes(".emptyFolderPlaceholder"));

    return imageUrls;
  } catch (error) {
    console.error("Error fetching url photos:", error);
    return [];
  }
};
