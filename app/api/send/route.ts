import { EmailTemplate } from "@/components/email-template";
import { FetchedCart } from "@/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend("re_83Xh2bRu_DMZW9U5ZaNquqtNwhdBqKLs3");

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email } = body as {
    name: string;
    email: string;
  };

  try {
    const emailOptions: CreateEmailOptions = {
      from: "MemaBookstore <onboarding@resend.dev>",
      to: ["jazencode@gmail.com", email],
      subject: "Hello world",
      text: "Hello world",
      react: EmailTemplate({ name }),
    };
    const data = await resend.emails.send(emailOptions);

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
