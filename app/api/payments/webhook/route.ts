import { registerPayment } from "@/utils/db/register-payment";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json();

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleTimeString();

  try {
    const response: any = await registerPayment(
      res?.data?.object?.billing_details?.email, // email
      res?.data?.object?.amount, // amount
      JSON.stringify(res), // payment info
      res?.type, // type
      String(timeString), // time
      String(dateTime), // date
      res?.data?.object?.receipt_email, // email
      res?.data?.object?.receipt_url, // url
      JSON.stringify(res?.data?.object?.payment_method_details), // Payment method details
      JSON.stringify(res?.data?.object?.billing_details), // Billing details
      res?.data?.object?.currency // Currency
    );

    if (response?.message === "success") {
      return NextResponse.json({ status: "Success", response });
    }

    if (response?.message === "error") {
      console.log("Response", response);
      return NextResponse.json({ status: "Error", response });
    }

    return NextResponse.json({
      status: "DB registration didn't work",
      response,
    });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}
