import React from "react";
import Image from "next/image";
import FptLogoImagePath from "@/assets/images/fpt-logo.svg";

export default function FooterComponent() {
  return (
    <>
      <footer className='footer'>
        <section className='bg-slate-100 py-10'>
          <div className='container'>
            <div className='border-b border-slate-300 pb-5 mb-5'>
              <Image src={FptLogoImagePath} alt='FPT Software' />
            </div>
            <div className='space-y-2 text-md text-neutral-700'>
              <p>Giấy chứng nhận ĐKDN số 0101778163 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 28/07/2005</p>
              <p>Giấy phép cung cấp dịch vụ viễn thông số 255/GP-CVT do Cục Viễn Thông cấp ngày 07/11/2022</p>
              <p>Địa chỉ: Hoàng Mai, Hà Nội</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
