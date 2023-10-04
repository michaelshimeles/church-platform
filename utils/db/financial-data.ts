import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const financialData = async (email: string) => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data: payments, error } = await supabase
      .from("payments")
      .select("*")
      .eq("email", email);

    if (!error) {
      return {
        message: "success",
        payments,
      };
    }

    return {
      message: "error",
      error,
    };
  } catch (error) {
    return error;
  }
};
