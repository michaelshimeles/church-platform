import { scheduleText } from "@/utils/db/schedule-text";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest, res: NextResponse) {
  const schema = z.object({
    fullName: z.string(),
    phoneNumber: z.string(),
    event: z.string(),
  });

  const { fullName, phoneNumber, event } = schema.parse(await req.json());

  try {
    const response = (await scheduleText(fullName, phoneNumber, event)) as any;

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
