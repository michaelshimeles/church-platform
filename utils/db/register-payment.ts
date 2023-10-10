import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const registerPayment = async (
  email: string,
  amount: string,
  payment: string,
  type: string,
  payment_time: string,
  payment_date: string,
  receipt_email: string,
  receipt_url: string,
  payment_details: string,
  billing_details: string,
  currency: string
) => {
  const supabase = createServerComponentClient({ cookies });
  try {
    const { data, error } = await supabase
      .from("paymens")
      .insert([
        {
          email,
          amount,
          payment,
          type,
          payment_time,
          payment_date,
          receipt_email,
          receipt_url,
          payment_details,
          billing_details,
          currency
        },
      ])
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
