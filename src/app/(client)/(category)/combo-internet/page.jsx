"use client";

import CategoryCardComponent from "@/components/category-card";
import HeadingComponent from "@/components/common/heading";
import ContactComponent from "@/components/contact";
import Hotline from "@/components/hotline";
import ServiceListComponent from "@/components/service-list";
import { SUB_CATEGORY_2_ITEMS } from "@/data/category";
import { useLoadingStore } from "@/stores/useLoadingStore";
import { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";

const headingMaps = {
  1: "Combo Internet + Truyền hình FPT",
  2: "Combo Zplay",
};

const IMAGES_DATA = {
  1: "https://res.cloudinary.com/drfnttm55/image/upload/v1756868848/lapmangfpt/lri1bisvjflkrrtdrzvb.jpg",
  2: "https://res.cloudinary.com/drfnttm55/image/upload/v1757037413/lapmangfpt/i5dshqp80bjb2xwgejv1.png",
};

export default function ComboInternetPage() {
  const [categoryId, setCategoryId] = useState(1);
  const [imageData, setImageData] = useState();
  const { setLoading } = useLoadingStore();
  const sectionRef = useRef();
  const memoizedCategory = useMemo(() => SUB_CATEGORY_2_ITEMS.find((item) => item.id === categoryId), [categoryId]);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const imageUrl = IMAGES_DATA[memoizedCategory.id];
        setImageData({ url: imageUrl });
      } catch {
        toast.error("Đã có lỗi xảy ra khi tải hình ảnh. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [memoizedCategory, setLoading]);

  const handleCategoryClick = (id) => {
    setCategoryId(id);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className='space-y-16 py-10 container'>
      <div className='gap-16 grid grid-cols-1 md:grid-cols-2'>
        {SUB_CATEGORY_2_ITEMS.map((item) => (
          <button key={item.id} onClick={() => handleCategoryClick(item.id)} className='w-full text-left'>
            <CategoryCardComponent category={item} isDisabled={item.id !== categoryId} />
          </button>
        ))}
      </div>

      <section ref={sectionRef}>
        <HeadingComponent title={headingMaps[categoryId]} description='FPT Telecom tự hào là Nhà cung cấp Dịch vụ Internet hàng đầu Việt Nam' />
        {imageData && <img src={imageData.url} className='w-full h-auto' alt='FPT Software' />}
      </section>

      <section className='bg-slate-100'>
        <section className='py-10 container'>
          <Hotline />
        </section>
      </section>

      <ServiceListComponent />
      <ContactComponent />
    </div>
  );
}
