import React from "react";

export default function ServiceListComponent() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
        <div className='flex flex-col items-center gap-3'>
          <img
            src='https://dangkyinternet.com/wp-content/uploads/2020/02/ic_01.png'
            className='w-[100px] h-[100px]'
            alt='FPT Software'
          />
          <h3 className='text-custom font-bold text-lg'>Thương hiệu uy tín</h3>
          <p className='text-md'>Sự lựa chọn hàng đầu của các doanh nghiệp, tổ chức</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <img
            src='https://dangkyinternet.com/wp-content/uploads/2020/02/ic_09.png'
            className='w-[100px] h-[100px]'
            alt='FPT Software'
          />
          <h3 className='text-custom font-bold text-lg'>Chất lượng dịch vụ tốt nhất</h3>
          <p className='text-md'>Giao dịch điện tử an toàn, tiết kiệm. Hỗ trợ 24/7 MIỄN PHÍ.</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <img
            src='https://dangkyinternet.com/wp-content/uploads/2020/02/ic_15-1.png'
            className='w-[100px] h-[100px]'
            alt='FPT Software'
          />
          <h3 className='text-custom font-bold text-lg'>Công nghệ nổi trội</h3>
          <p className='text-md'>Đạt tiêu chuẩn quốc tế về bảo mật. Áp dụng các công nghệ mới nhất.</p>
        </div>
      </div>
    </>
  );
}
