import { registerPayment } from "@/utils/db/register-payment";
import { backupPayment } from "@/utils/db/backup-register";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);
  //   const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleTimeString();

  try {
    // let event = stripe.webhooks.constructEvent(
    //   payload,
    //   sig!,
    //   process.env.STRIPE_WEBHOOK_SECRET!
    // );

    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created
    console.log("res", res);

    if (res?.failure_code) {
      console.log("card declined, failed or expired");
      return NextResponse.json({
        status: "Card declined",
      });
    }

    const response: any = await registerPayment(
      res?.billing_details?.email, // email
      res?.amount, // amount
      JSON.stringify(res), // payment info
      res?.type, // type
      String(timeString), // time
      String(dateTime), // date
      res?.receipt_email, // email
      res?.receipt_url, // url
      JSON.stringify(res?.payment_method_details), // Payment method details
      JSON.stringify(res?.billing_details), // Billing details
      res?.currency // Currency
    );

    if (response?.message === "success") {
      // console.log("response", response);
      return NextResponse.json({ status: "Success", response });
    }

    if (response?.message === "error") {
      console.log("response", response);
      throw new Error(response?.error as any);
    }

    return NextResponse.json({
      status: "DB registration didn't work",
      //   event: event?.type,
    });
  } catch (error: any) {
    return NextResponse.json({ status: "Failed", error });
  }
}
