import { textLog } from "@/utils/db/text-log";
import { NextRequest, NextResponse } from "next/server";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_ID;

/* 
  Abstract the word to trigger the text response
*/

export async function POST(req: NextRequest, res: NextResponse) {
  const info = await req.json();


  return NextResponse.json("Done");
}

