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

  const group = [
    {
      name: "Whatsapp Group",
      link: process.env.WHATSAPP_GROUP_LINK,
    },
    {
      name: "Viber Group",
      link: process.env.WHATSAPP_GROUP_LINK,
    },
  ];

  const ministry = info?.ministry === "english" ? 0 : 1;

  try {
    const message = await client.messages.create({
      body: `Thank you for requesting to join our ${group?.[ministry]?.name}, here's the link to join: ${group?.[ministry]?.link}`,
      messagingServiceSid: messagingServiceSid,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: info?.phone,
    });

    console.log("Message", message);
    return NextResponse.json({ status: "Sent", messageSid: message.sid });
  } catch (error: any) {
    console.log("Error", error);

    // Instead of returning a string, return a JSON response with an error message.
    return NextResponse.json({ status: "Error", error: error.message });
  }
}
