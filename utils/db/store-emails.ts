import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const storeEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  source: string,
  message: string
) => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data, error } = await supabase
      .from("emails")
      .insert({ firstName, lastName, email, source, message })
      .select();

    if (error) {
      return {
        message: "error",
        error,
      };
    }

    if (data) {
      return {
        message: "success",
        data,
      };
    }
  } catch (error) {
    throw Error(error as any)
    return error;
  }
};
