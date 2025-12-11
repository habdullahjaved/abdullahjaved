/* ====================== app/api/contact/route.ts ====================== */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: `New Portfolio Message from ${name}`,
    text: `Email: ${email}
Message: ${message}`,
  });

  return NextResponse.json({ success: true });
}
