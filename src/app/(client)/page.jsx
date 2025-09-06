import BannerSlideComponent from "@/components/banner-slide";
import CategoryListComponent from "@/components/category-list";
import ContactComponent from "@/components/contact";
import ServiceListComponent from "@/components/service-list";

export default function Home() {
  return (
    <div className='space-y-10 md:space-y-16'>
      <BannerSlideComponent />
      <div className='space-y-10 md:space-y-16 pb-10 container'>
        <CategoryListComponent />
        <ContactComponent />
        <ServiceListComponent />
      </div>
    </div>
  );
}
