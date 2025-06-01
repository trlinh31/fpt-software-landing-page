import BannerSlideComponent from "@/components/banner-slide";
import CategoryListComponent from "@/components/category-list";
import ContactComponent from "@/components/contact";

export default function Home() {
  return (
    <>
      <div className='space-y-16'>
        <BannerSlideComponent />
        <div className='container space-y-16 pb-10'>
          <CategoryListComponent />
          <ContactComponent />
        </div>
      </div>
    </>
  );
}
