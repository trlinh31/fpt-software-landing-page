import BannerSlideComponent from "@/components/banner-slide";
import CategoryListComponent from "@/components/category-list";
import ContactComponent from "@/components/contact";
import ServiceListComponent from "@/components/service-list";
import { BANNER_IMAGES } from "@/data/banner";

export default function Home() {
  return (
    <section className='space-y-10 md:space-y-16'>
      <BannerSlideComponent />
      <section className='space-y-10 md:space-y-16 pb-10'>
        <div className='container'>
          <CategoryListComponent />
        </div>
        <div className='container'>
          <ContactComponent />
        </div>
        <div className='bg-slate-100'>
          <div className='container'>
            <section className='gap-4 grid lg:grid-cols-6 lg:grid-rows-4 py-10'>
              <div className='col-span-1 lg:col-span-3 lg:row-span-4 rounded-2xl overflow-hidden'>
                <img src='https://s3-api.fpt.vn/fptvn-storage/2025-08-20/1755659149_lap-net-trung-laptop-c.png' alt='FPT Software' />
              </div>
              <div className='col-span-1 lg:col-span-3 lg:col-start-4 lg:row-span-2 rounded-2xl overflow-hidden'>
                <img src='https://s3-api.fpt.vn/fptvn-storage/2025-08-29/1756460702_tang-mesh-net-cang-fpt-home.jpg' alt='FPT Software' />
              </div>
              <div className='col-span-1 lg:col-span-3 lg:col-start-4 lg:row-span-2 lg:row-start-3 rounded-2xl overflow-hidden'>
                <img src='https://s3-api.fpt.vn/fptvn-storage/2025-03-03/1740999228_tuvanlapdatinternet.jpg' alt='FPT Software' />
              </div>
            </section>
          </div>
        </div>
        <div className='container'>
          <ServiceListComponent />
        </div>
      </section>
    </section>
  );
}
