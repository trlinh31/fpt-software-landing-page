"use client";

import { useEffect } from "react";
import BannerSlideComponent from "@/components/banner-slide";
import CategoryListComponent from "@/components/category-list";
import ContactComponent from "@/components/contact";
import ServiceListComponent from "@/components/service-list";
import Hotline from "@/components/hotline";

export default function Home() {
  useEffect(() => {
    let interval = null;
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let show = true;
        interval = setInterval(() => {
          document.title = show ? "1 tin nhắn mới" : originalTitle;
          show = !show;
        }, 1000);
      } else {
        if (interval) clearInterval(interval);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (interval) clearInterval(interval);
      document.title = originalTitle;
    };
  }, []);

  return (
    <>
      <section className='space-y-10 md:space-y-16'>
        <BannerSlideComponent />
        <section className='space-y-10 md:space-y-16 pb-10'>
          <section className='container'>
            <CategoryListComponent />
          </section>

          <section className='container'>
            <ContactComponent />
          </section>

          <section className='bg-slate-100'>
            <section className='py-10 container'>
              <Hotline />
            </section>
          </section>

          <section className='container'>
            <div className='gap-4 grid lg:grid-cols-6 lg:grid-rows-4 py-10'>
              <div className='col-span-1 lg:col-span-3 lg:row-span-4 rounded-2xl overflow-hidden'>
                <img src='https://s3-api.fpt.vn/fptvn-storage/2025-08-20/1755659149_lap-net-trung-laptop-c.png' alt='FPT Software' loading='lazy' />
              </div>
              <div className='col-span-1 lg:col-span-3 lg:col-start-4 lg:row-span-2 rounded-2xl overflow-hidden'>
                <img
                  src='https://s3-api.fpt.vn/fptvn-storage/2025-08-29/1756460702_tang-mesh-net-cang-fpt-home.jpg'
                  alt='FPT Software'
                  loading='lazy'
                />
              </div>
              <div className='col-span-1 lg:col-span-3 lg:col-start-4 lg:row-span-2 lg:row-start-3 rounded-2xl overflow-hidden'>
                <img src='https://s3-api.fpt.vn/fptvn-storage/2025-03-03/1740999228_tuvanlapdatinternet.jpg' alt='FPT Software' loading='lazy' />
              </div>
            </div>
          </section>

          <section className='container'>
            <ServiceListComponent />
          </section>
        </section>
      </section>
    </>
  );
}
