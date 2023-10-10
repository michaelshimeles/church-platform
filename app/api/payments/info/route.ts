import { financialData } from "@/utils/db/financial-data";
import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const info = await req.json();

  try {
    const financials: any = await financialData(info?.emailAddress);

    if (financials?.message === "error") {
      throw new Error(financials.error?.code, financials.error?.message);
    }
    return NextResponse.json({ status: "success", financials });

  } catch (error: any) {
    throw new Error(error);
    return NextResponse.json(error);
  }
}
