import { financialData } from "@/utils/db/financial-data";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const schema = z.object({
    emailAddress: z.string().email({ message: "Invalid email address" }),
  });

  const { emailAddress } = (await req.json());

  try {
    const financials: any = await financialData(emailAddress);

    if (financials?.message === "error") {
      throw new Error(financials.error?.code, financials.error?.message);
    }
    return NextResponse.json({ status: "success", financials });
  } catch (error: any) {
    throw new Error(error);
    return NextResponse.json(error);
  }
}
