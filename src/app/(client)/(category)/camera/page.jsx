import HeadingComponent from "@/components/common/heading";
import ContactComponent from "@/components/contact";
import Hotline from "@/components/hotline";
import ServiceListComponent from "@/components/service-list";
import { BANNER_IMAGES } from "@/data/banner";

export default function CameraPage() {
  return (
    <>
      <section className='space-y-10'>
        <section>
          <div className='w-full'>
            <picture>
              <source media='(min-width: 768px)' srcSet={BANNER_IMAGES[0].desktop} />
              <img src={BANNER_IMAGES[0].mobile} className='w-full h-full object-cover' alt='FPT Camera' loading='lazy' />
            </picture>
          </div>
          <div className='bg-[#1B1B1B] py-10'>
            <HeadingComponent title='Vì sao nên chọn FPT Camera' />
            <div className='container'>
              <iframe src='https://www.youtube.com/embed/kqlB9X20ClU?autoplay=1&rel=0' className='w-full md:h-[800px]' allowFullScreen></iframe>
            </div>
          </div>
        </section>

        <section className='bg-slate-100'>
          <section className='py-10 container'>
            <Hotline />
          </section>
        </section>

        <div className='space-y-10 container'>
          <ServiceListComponent />
          <ContactComponent />
        </div>
      </section>
    </>
  );
}
