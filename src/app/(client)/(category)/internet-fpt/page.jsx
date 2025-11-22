"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HeadingComponent from "@/components/common/heading";
import ServiceListComponent from "@/components/service-list";
import { SUB_CATEGORY_1_ITEMS } from "@/data/category";
import CategoryCardComponent from "@/components/category-card";
import ContactComponent from "@/components/contact";
import toast from "react-hot-toast";
import { useLoadingStore } from "@/stores/useLoadingStore";
import Hotline from "@/components/hotline";

const headingMaps = {
  1: "Internet FPT - Dành cho cá nhân & Hộ gia đình",
  2: "Internet FPT - Dành cho doanh nghiệp",
};

const IMAGES_DATA = {
  1: "https://res.cloudinary.com/drfnttm55/image/upload/v1756868831/lapmangfpt/ut0ip0ezly5wplrhqzeh.jpg",
  2: "https://res.cloudinary.com/drfnttm55/image/upload/v1756544140/lapmangfpt/hmhqy9v9worus2gc4kmb.png",
};

export default function InternetFptPage() {
  const [categoryId, setCategoryId] = useState(1);
  const [imageData, setImageData] = useState();
  const { setLoading } = useLoadingStore();
  const sectionRef = useRef();
  const memoizedCategory = useMemo(() => SUB_CATEGORY_1_ITEMS.find((item) => item.id === categoryId), [categoryId]);

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
        {SUB_CATEGORY_1_ITEMS.map((item) => (
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
