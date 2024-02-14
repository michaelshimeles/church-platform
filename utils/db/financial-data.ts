import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const financialData = async (email: string) => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data: payments, error } = await supabase
      .from("payments")
      .select("*")
      .eq("receipt_email", email)
      .order("id", { ascending: true }); // Sort by 'created_time' in ascending order

    if (error?.code) {
      return error;
    }

    return {
      message: "success",
      payments,
    };
  } catch (error) {
    return error;
  }
};
