import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const readSchedule = async () => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data: scheduled_text, error } = await supabase
      .from("scheduled_text")
      .select("*");

    if (scheduled_text) {
      return {
        message: "success",
        scheduled_text,
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
