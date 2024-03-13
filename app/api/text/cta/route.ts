import { storeCta } from "@/utils/db/store-cta";
import { NextRequest, NextResponse } from "next/server";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_ID;
import { z } from "zod";

/*
  Abstract the word to trigger the text response
*/

export async function POST(req: NextRequest, res: NextResponse) {
  const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    ministry: z.string(),
  });

  const { firstName, lastName, phone, ministry } = schema.parse(
    await req.json()
  );

  const group = {
    name: "Whatsapp Group",
    link: process.env.WHATSAPP_GROUP_LINK,
  };

  // Store CTA record in db
  await storeCta(firstName, lastName, phone, ministry);

  if (ministry === "english") {
    try {
      const message = await client.messages.create({
        body: `Thank you for requesting to join our ${group?.name}, here's the link to join: ${group?.link}`,
        messagingServiceSid: messagingServiceSid,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone,
      });

      return NextResponse.json({ status: "Sent", messageSid: message.sid });
    } catch (error: any) {
      throw new Error(error);
      // Instead of returning a string, return a JSON response with an error message.
      return NextResponse.json({ status: "Error", error });
    }
  } else {
    try {
      const message = await client.messages.create({
        body: `Hey Pastor Berhanu, someone named ${firstName} ${lastName} wants to join our church. Their number is ${phone}`,
        messagingServiceSid: messagingServiceSid,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: "2899461487",
      });

      return NextResponse.json({ status: "Sent", messageSid: message.sid });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
