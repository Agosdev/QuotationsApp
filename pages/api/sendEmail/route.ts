import { NextResponse } from "next/server";
const nodemailer = require('nodemailer')


export async function POST(request: any) {
  try {
      const { email, subject, message } = await request.json();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
          pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
        },
      });

      const mailOption = {
        from: email,
        to: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
        subject: subject,
        text: message,
        html: `<p>${message}</p>`,
      };

      await transporter.sendMail(mailOption)

      return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
      return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}