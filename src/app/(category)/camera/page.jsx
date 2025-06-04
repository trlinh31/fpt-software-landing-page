import HeadingComponent from "@/components/common/heading";
import ContactComponent from "@/components/contact";
import ServiceListComponent from "@/components/service-list";
import React from "react";

export default function CameraPage() {
  return (
    <>
      <section className='space-y-10'>
        <div className='w-full h-[500px]'>
          <img
            src='https://s3-api.fpt.vn/fptvn-storage/2025-01-16/1737014670_fptcameraantoanvuottroi.webp'
            className='w-full h-full'
            alt='FPT Software'
          />
        </div>
        <div className='container space-y-10'>
          <ServiceListComponent />
          <ContactComponent />
        </div>
        <div className='bg-[#1B1B1B] py-10'>
          <HeadingComponent title='Vì sao nên chọn FPT Camera' />
          <div className='container'>
            <iframe
              src='https://www.youtube.com/embed/kqlB9X20ClU?autoplay=1&rel=0'
              className='w-full h-[800px]'
              frameBorder='0'></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
