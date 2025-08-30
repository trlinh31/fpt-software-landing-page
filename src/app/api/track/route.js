import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { userAgent, ip } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Lắp đặt mạng FPT" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: "Vừa có một người truy cập vào Website của bạn 🚀",
    html: `
      <p><strong>User Agent:</strong> ${userAgent}</p>
      <p><strong>IP:</strong> ${ip || "N/A"}</p>
      <hr />
      <small>Thời gian: ${new Date().toLocaleString()}</small>
    `,
  });

  return NextResponse.json({ ok: true });
}
