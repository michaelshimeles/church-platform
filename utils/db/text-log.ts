import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const textLog = async (
  from_number: string,
  to_number: string,
  message: string
) => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data, error } = await supabase
      .from("text_log")
      .insert([{ from_number, to_number, message }])
      .select();

    if (data) {
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
