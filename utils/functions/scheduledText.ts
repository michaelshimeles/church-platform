import { textLog } from "../db/text-log";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

type ScheduledTextProps = {
  eventName: string;
  messageBody: string;
  messagingServiceSid: string;
  fromNumber: string;
  toNumber: string;
};

export const scheduledText = async ({
  eventName,
  messageBody,
  messagingServiceSid,
  fromNumber,
  toNumber,
}: ScheduledTextProps) => {
    
  const message = await client.messages.create({
    body: messageBody,
    messagingServiceSid: messagingServiceSid,
    from: fromNumber,
    to: toNumber,
  });

  if (message) {
    await textLog(fromNumber, toNumber, messageBody);

    return message;
  }
};
