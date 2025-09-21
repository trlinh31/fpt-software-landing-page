import { CONTACT_INFORMATION } from "@/data/contact-information";

export default function Hotline() {
  return (
    <div className='text-gray-600'>
      <p className='mb-6 md:mb-10 font-bold text-xl text-center'>
        Hotline <span className='font-black text-red-600 text-xl md:text-2xl'>{CONTACT_INFORMATION.phone}</span>
      </p>
      <p className='mb-0'>Khách hàng có thể đăng ký bằng cách:</p>
      <ul className='space-y-2 my-2 list-disc list-inside'>
        <li>
          Nhắn tin theo cú pháp: <span className='font-black text-red-600 text-xl md:text-2xl'>DK FPT</span> gửi tới số{" "}
          <span className='font-black text-red-600 text-xl md:text-2xl'>{CONTACT_INFORMATION.phone}</span>. Trong vòng 5p nhân viên kinh doanh sẽ chủ
          động liên lạc lại khách hàng để tư vấn gói cước và chương trình khuyến mãi.
        </li>
        <li>Gọi Hotline bên góc phải màn hình để được tư vấn trực tiếp</li>
        <li>
          Nhắn tin qua Zalo số <span className='font-black text-red-600 text-xl md:text-2xl'>{CONTACT_INFORMATION.phone}</span> hoặc biểu tượng Zalo
          bên góc phải màn hình
        </li>
      </ul>
      <p>Thời gian lắp đặt trong vòng 48h sẽ hoàn tất, quy trình như sau:</p>
      <ul className='space-y-2 my-2 list-disc list-inside'>
        <li>Nhân viên tiếp nhận thông tin, tư vấn giá cước và chương trình khuyến mãi</li>
        <li>Nhân viên tạo phiếu triển khai trên hệ thống</li>
        <li>Kỹ thuật sẽ liên lạc khách hàng để triển khai đường truyền cho khách hàng.</li>
      </ul>
    </div>
  );
}
