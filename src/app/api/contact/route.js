import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";

export async function POST(req) {
  const { fullName, phoneNumber, address, typeService } = await req.json();

  try {
    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

    const message =
      `🚀 *Vừa có khách hàng muốn liên hệ với bạn*\n\n` +
      `👤 *Họ và tên:* ${fullName}\n` +
      `📞 *Số điện thoại:* ${phoneNumber}\n` +
      `📍 *Địa chỉ:* ${address}\n` +
      `🛠️ *Loại dịch vụ:* ${typeService}\n\n` +
      `⏰ *Thời gian:* ${new Date().toLocaleString("vi-VN")}`;

    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
      parse_mode: "Markdown",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram error:", error);
    return NextResponse.json({ error: "Failed to send message to Telegram" }, { status: 500 });
  }
}
