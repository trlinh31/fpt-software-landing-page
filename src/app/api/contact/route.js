import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { fullName, phoneNumber, address, typeService } = await req.json();

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
    subject: "Vừa có khách hàng muốn liên hệ với bạn 🚀",
    html: `
      <p><strong>Họ và tên:</strong> ${fullName}</p>
      <p><strong>Số điện thoại:</strong> ${phoneNumber}</p>
      <p><strong>Địa chỉ:</strong> ${address}</p>
      <p><strong>Loại dịch vụ:</strong> ${typeService}</p>
      <hr />
      <small>Thời gian: ${new Date().toLocaleString()}</small>
    `,
  });

  return NextResponse.json({ ok: true });
}
