"use server";

import { LoginFormValues } from "@/components/LoginForm";
import { MenuPath } from "@/utils/constants/menuItems";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (values: LoginFormValues) => {
  "use server";

  const { email, password } = values;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(MenuPath.WEDDING_GUESTS);
  }

  return redirect("/");
};
