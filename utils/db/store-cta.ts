import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const storeCta = async (
  firstName: string,
  lastName: string,
  phone: string,
  church: string
) => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data, error } = await supabase
      .from("cta")
      .insert([{ firstName, lastName, phone, church }])
      .select();

    if (data) {
      console.log("Data", data);
      return {
        message: "success",
        data,
      };
    }

    if (error) {
      return {
        message: "error",
        error,
      };
    }
  } catch (error) {
    return error;
  }
};