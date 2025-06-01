import { Lexend } from "next/font/google";
import "@/assets/styles/globals.css";
import HeaderComponent from "@/components/layouts/header";
import { Toaster } from "react-hot-toast";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "FPT Software | Lắp Mạng FPT Hà Nội - Khuyến Mãi Đăng Ký Cáp Quang",
  description:
    "Lắp Mạng FPT Hà Nội Giá Chỉ Từ 185k - Khuyến Mãi 2025: Free 100% Wifi + 02 Tháng Cước . Đăng Ký Lắp Đặt Internet FPT Hà Nội Ngay!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${lexend.className} antialiased`}>
        <HeaderComponent />
        <main>{children}</main>
        <Toaster toastOptions={{ duration: 5000 }} />
      </body>
    </html>
  );
}
