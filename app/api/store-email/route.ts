import { NextRequest, NextResponse } from "next/server";
import { storeEmail } from "@/utils/db/store-emails";

export async function POST(req: NextRequest) {
  const res = await req.json();

  try {
    const response:
      | {
          message: string;
          data: [];
        }
      | any = await storeEmail(
      res?.firstName,
      res?.lastName,
      res?.email,
      res?.source,
      res?.message
    );

    if (response?.message === "success") {
      return NextResponse.json(response?.data);
    }

    if (response?.message === "error") {
      throw Error(response?.error);
      return NextResponse.json(response?.error);
    }
  } catch (error: any) {
    throw Error(error?.message);

    return NextResponse.json("Response Object return failed", error);
  }
}
