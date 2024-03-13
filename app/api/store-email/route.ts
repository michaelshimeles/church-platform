import { NextRequest, NextResponse } from "next/server";
import { storeEmail } from "@/utils/db/store-emails";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    source: z.string(),
    message: z.string(),
  });

  const { firstName, lastName, email, source, message } = schema.parse(
    await req.json()
  );

  try {
    const response:
      | {
          message: string;
          data: [];
        }
      | any = await storeEmail(firstName, lastName, email, source, message);

    if (response?.message === "success") {
      return NextResponse.json(response?.data);
    }

    if (response?.message === "error") {
      throw Error(response?.error);
    }
  } catch (error: any) {
    throw Error(error?.message);
  }
}
