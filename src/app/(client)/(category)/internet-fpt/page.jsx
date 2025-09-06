"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import HeadingComponent from "@/components/common/heading";
import ServiceListComponent from "@/components/service-list";
import { SUB_CATEGORY_1_ITEMS } from "@/data/category";
import CategoryCardComponent from "@/components/category-card";
import ContactComponent from "@/components/contact";
import toast from "react-hot-toast";
import { useLoadingStore } from "@/stores/useLoadingStore";

const headingMaps = {
  1: "Internet FPT - Dành cho cá nhân & Hộ gia đình",
  2: "Internet FPT - Dành cho doanh nghiệp",
};

export default function InternetFptPage() {
  const [categoryId, setCategoryId] = useState();
  const [imageData, setImageData] = useState();
  const { setLoading } = useLoadingStore();
  const sectionRef = useRef();
  const memoizedCategory = useMemo(() => SUB_CATEGORY_1_ITEMS.find((item) => item.id === categoryId), [categoryId]);

  useEffect(() => {
    setCategoryId(SUB_CATEGORY_1_ITEMS[0].id);
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const categoryName = memoizedCategory?.name;
        const res = await fetch(`/api/images?packageType=${encodeURIComponent(categoryName)}`);
        const data = await res.json();
        setImageData(data);
      } catch (err) {
        console.error(err);
        toast.error("Đã xảy ra lỗi khi tải ảnh! Vui lòng tải lại trang.");
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [categoryId]);

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
        {imageData && <img src={imageData.url} className='w-full h-auto' alt='FPT Software' loading='lazy' />}
      </section>

      <ServiceListComponent />
      <ContactComponent />
    </div>
  );
}
