import { scheduleText } from "@/utils/db/schedule-text";
import { NextRequest, NextResponse } from "next/server";

interface ScheduleTextType {
  message: string;
  data: {
    id: string;
    created_at: string;
    name: string;
    phoneNumber: string;
    event: string;
  };
}
export async function POST(req: NextRequest, res: NextResponse) {
  const info = await req.json();

  try {
    const response = (await scheduleText(
      info?.fullName,
      info.phoneNumber,
      info.event
    )) as ScheduleTextType;

    if (response?.message === "success") {
      return NextResponse.json({ status: "Scheduled", response });
    }

    if (response?.message === "error") {
      return NextResponse.json({ status: "Schedule Error", response });
    }
  } catch (error) {
    return NextResponse.json({ status: "error", error });
  }

  return NextResponse.json("Failed");
}
