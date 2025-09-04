import "@/assets/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FPT Software | Lắp Mạng FPT Hà Nội - Khuyến Mãi Đăng Ký Cáp Quang",
  description: "Lắp Mạng FPT Hà Nội Giá Chỉ Từ 185k - Khuyến Mãi 2025: Free 100% Wifi + 02 Tháng Cước . Đăng Ký Lắp Đặt Internet FPT Hà Nội Ngay!",
  openGraph: {
    title: "FPT Software | Lắp Mạng FPT Hà Nội - Khuyến Mãi Đăng Ký Cáp Quang",
    description: "Lắp Mạng FPT Hà Nội Giá Chỉ Từ 185k - Khuyến Mãi 2025: Free 100% Wifi + 02 Tháng Cước . Đăng Ký Lắp Đặt Internet FPT Hà Nội Ngay!",
    url: "https://lapmangfpt.vercel.app/",
    siteName: "FPT Software",
    images: [
      {
        url: "https://s3-api.fpt.vn/fptvn-storage/2025-08-22/1755845669_fpt-speedx2-wifi-7.jpg",
        width: 1200,
        height: 630,
        alt: "FPT Software",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <main>{children}</main>
        <Toaster toastOptions={{ duration: 5000 }} />
      </body>
    </html>
  );
}
