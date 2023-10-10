import { scheduleText } from "@/utils/db/schedule-text";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const info = await req.json();

  try {
    const response = (await scheduleText(
      info?.fullName,
      info.phoneNumber,
      info.event
    )) as any;

    if (response?.message === "success") {
      return NextResponse.json({ status: "Scheduled", response });
    }

    if (response?.message === "error") {
      throw new Error(
        "Error with Supabase in /api/text/register",
        response?.error
      );
      return NextResponse.json({ status: "Schedule Error", response });
    }
  } catch (error) {
    throw new Error("Error in /api/text/register", error as any);
    return NextResponse.json({ status: "error", error });
  }

  return NextResponse.json("Failed");
}
