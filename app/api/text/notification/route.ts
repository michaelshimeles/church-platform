import { readSchedule } from "@/utils/db/read-scheduled";
import { textLog } from "@/utils/db/text-log";
import { NextRequest, NextResponse } from "next/server";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_ID;
import { headers } from "next/headers";
import { z } from "zod";

/*
- Someone requests to be notified (need to confirm they own the number)
- Store a number into a db
- Cron job fires api
- api reads numbers from DB, and sends message
*/

/*
  time = 1 (1 day before event)
  time = 2 (30 minutes before event)
  time = 3 (Event has started)
*/

export async function POST(req: NextRequest, res: NextResponse) {
  const scheduledSchema = z.object({
    id: z.string(),
    created_at: z.string(),
    name: z.string(),
    phoneNumber: z.string().min(10),
    timeZone: z.string(),
    event: z.string(),
  });
  const timeSchema = z.object({
    time: z.string(),
  });

  type ScheduledText = z.infer<typeof scheduledSchema>;
  const { time } = timeSchema.parse(await req.json());

  const headersList = headers();

  const currentDate = new Date();

  // Check if authorized
  // if (headersList?.get("pass") === "work") {
    try {
      const result: any = await readSchedule();

      // Check if scheduled texts have been read from db successfully
      if (result.message === "success") {
        const schedule: ScheduledText[] = result.scheduled_text;

        // Reminder 1 day before event
        if (time === "1") {
          // Loop through all the scheduled events
          for (let i = 0; i < schedule.length; i++) {
            // Checks specific event and sends text for that event
            if (
              schedule?.[i]?.event === "Virtual Bible Study" &&
              currentDate.getDay() === 2
            ) {
              // Check if number is valid
              try {
                const message = await client.messages.create({
                  body: "Just a friendly reminder that the Virtual Bible Study will is tomorrow! Make sure you make time and don't miss it!",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Just a friendly reminder that the Virtual Bible Study will is tomorrow! Make sure you make time and don't miss it!"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }

            if (
              schedule?.[i]?.event === "In-Person Bible Study & Prayer" &&
              currentDate.getDay() === 4
            ) {
              try {
                const message = await client.messages.create({
                  body: "Just a friendly reminder that the In-Person Bible Study & Prayer is tomorrow! Make sure you make time and don't miss it! The address is 100 Halsey Avenue and it starts at 9:00pm EST",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Just a friendly reminder that the In-Person Bible Study & Prayer is tomorrow! Make sure you make time and don't miss it! The address is 100 Halsey Avenue and it starts at 9:00pm EST"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }

            if (
              schedule?.[i]?.event === "Church Service" &&
              currentDate.getDay() === 6
            ) {
              try {
                const message = await client.messages.create({
                  body: "Just a friendly reminder that our Sunday Church Service is tomorrow! Make sure you make time and don't miss it! The address is 65 Sunrise Ave and it starts at 4:00pm EST",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Just a friendly reminder that our Sunday Church Service is tomorrow! Make sure you make time and don't miss it! The address is 65 Sunrise Ave and it starts at 4:00pm EST"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }
          }

          return NextResponse.json({ status: "Scheduled", schedule });
        }

        // Reminder 30 minutes before event
        if (time === "2") {
          for (let i = 0; i < schedule.length; i++) {
            if (
              schedule?.[i]?.event === "Virtual Bible Study" &&
              currentDate.getDay() === 3
            ) {
              try {
                const message = await client.messages.create({
                  body: "Just a friendly reminder that our virtual bible study is in 30 minutes. Excited to see you there!",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "JJust a friendly reminder that our virtual bible study is in 30 minutes. Excited to see you there!"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }

            if (
              schedule?.[i]?.event === "In-Person Bible Study & Prayer" &&
              currentDate.getDay() === 5
            ) {
              try {
                const message = await client.messages.create({
                  body: "Just a friendly reminder that the In-Person Bible Study & Prayer is in 30 minutes! Make sure you make time and don't miss it! The address is 100 Halsey Avenue and it starts at 9:00pm EST",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Just a friendly reminder that the Virtual Bible Study will is tomorrow! Make sure you make time and don't miss it!"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }

            if (
              schedule?.[i]?.event === "Church Service" &&
              currentDate.getDay() === 7
            ) {
              try {
                const message = await client.messages.create({
                  body: "Just a friendly reminder that our Sunday Church Service doors open in 30 mins!",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Just a friendly reminder that our Sunday Church Service doors open in 30 mins!"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }
          }

          return NextResponse.json({ status: "Scheduled", schedule });
        }

        // Reminder when event start
        if (time === "3") {
          for (let i = 0; i < schedule.length; i++) {
            if (
              schedule?.[i]?.event === "Virtual Bible Study" &&
              currentDate.getDay() === 3
            ) {
              try {
                const message = await client.messages.create({
                  body: "Virtual Bible Study has started. See you there!",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Virtual Bible Study has started. See you there!"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }

            if (
              schedule?.[i]?.event === "In-Person Bible Study & Prayer" &&
              currentDate.getDay() === 5
            ) {
              try {
                const message = await client.messages.create({
                  body: "Our In-Person Bible Study & Prayer has started. If you're on the way, don't worry, you can still make it! See you there!",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Our In-Person Bible Study & Prayer has started. If you're on the way, don't worry, you can still make it! See you there!"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }

            if (
              schedule?.[i]?.event === "Church Service" &&
              currentDate.getDay() === 7
            ) {
              try {
                const message = await client.messages.create({
                  body: "Our Church Service doors have opened. If you're on the way, don't worry, you can still make it! See you there!",
                  messagingServiceSid: messagingServiceSid,
                  from: "+17576459906",
                  to: schedule[i]?.phoneNumber,
                });

                if (message) {
                  await textLog(
                    "+17576459906",
                    schedule[i]?.phoneNumber,
                    "Our Church Service doors have opened. If you're on the way, don't worry, you can still make it! See you there!"
                  );
                }
              } catch (error) {
                throw new Error(error as any);
              }
            }
          }

          return NextResponse.json({ status: "Scheduled", schedule });
        }

        return NextResponse.json({ status: "No Schedule" });
      } else {
        // Handle the case when reading schedule data fails
        throw new Error(result.error);
        return NextResponse.json({ status: "Failed", error: result.error });
      }
    } catch (error) {
      throw new Error(error as any);
      return NextResponse.json({ status: "Failed", error });
    }
  // } else {
  //   return NextResponse.json({ status: "Not Authorized" });
  // }
}
