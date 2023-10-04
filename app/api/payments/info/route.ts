import { financialData } from "@/utils/db/financial-data";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const info = await req.json();

  console.log("info", info)

  try {
    const financials: any = await financialData(info?.emailAddress);

    return NextResponse.json({ status: "success", financials });
  } catch (error) {
    return NextResponse.json(error);
  }
}
