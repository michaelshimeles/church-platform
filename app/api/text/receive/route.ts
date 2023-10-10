import { textLog } from "@/utils/db/text-log";
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
  const info = await req.text();
  const result = parseSmsQueryString(info);

  const textBody = formatString(result?.Body);

  await textLog(result?.From, result?.To, textBody);

  if (textBody.toLocaleLowerCase() === "give") {
    try {
      const message = await client.messages.create({
        body: "Thank you for wanting to make a donation to our church. Go to tsegabiblechurch.com/give",
        messagingServiceSid: messagingServiceSid,
        from: result?.To,
        to: result?.From,
      });

      return NextResponse.json({ status: "Sent", messageSid: message.sid });
    } catch (error: any) {
      // Instead of returning a string, return a JSON response with an error message.
      return NextResponse.json({ status: "Error", error: error });
    }
  }

  if (textBody.toLocaleLowerCase() === "encourage") {
    try {
      const message = await client.messages.create({
        body: "Jesus loves you and is with you!",
        messagingServiceSid: messagingServiceSid,
        from: result?.To,
        to: result?.From,
      });
      return NextResponse.json({ status: "Sent", messageSid: message.sid });
    } catch (error) {
      throw new Error(error as any);
      // Instead of returning a string, return a JSON response with an error message.
      return NextResponse.json({ status: "Error", error });
    }
  }

  if (textBody.toLocaleLowerCase() === "address") {
    try {
      const message = await client.messages.create({
        body: "Our church is at 65 Sunrise Ave, see you there!",
        messagingServiceSid: messagingServiceSid,
        from: result?.To,
        to: result?.From,
      });
      return NextResponse.json({ status: "Sent", messageSid: message.sid });
    } catch (error) {
      throw new Error(error as any);
      // Instead of returning a string, return a JSON response with an error message.
      return NextResponse.json({ status: "Error", error });
    }
  }

  return NextResponse.json("Done");
}

interface SmsQueryObject {
  [key: string]: string;
}

function parseSmsQueryString(queryString: string): SmsQueryObject {
  const queryObject: SmsQueryObject = {};
  const queryStringPairs = queryString.split("&");

  for (const pair of queryStringPairs) {
    const [key, value] = pair.split("=");
    queryObject[key] = decodeURIComponent(value);
  }

  return queryObject;
}

function formatString(inputString: string) {
  if (typeof inputString !== "string") {
    return ""; // Return an empty string if inputString is not a string or is undefined/null
  }
  return inputString.replace(/\+/g, " ");
}
