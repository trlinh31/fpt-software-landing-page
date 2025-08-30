"use client";

import React, { useEffect, useState } from "react";
import HeadingComponent from "@/components/common/heading";
import ServiceListComponent from "@/components/service-list";
import { SUB_CATEGORY_2_ITEMS } from "@/data/category";
import CategoryCardComponent from "@/components/category-card";
import ContactComponent from "@/components/contact";
import { useLoadingStore } from "@/stores/useLoadingStore";

const headingMaps = {
  0: "Combo Internet + Truyện hình FPT",
  1: "Combo Zplay",
};

export default function ComboInternetPage() {
  const [categorySelectedIndex, setCategorySelectedIndex] = useState(0);
  const [categoryName, setCategoryName] = useState(SUB_CATEGORY_2_ITEMS[0].name);
  const [imageData, setImageData] = useState(null);
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    fetchImage();
  }, [categorySelectedIndex, categoryName]);

  const fetchImage = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/images?packageType=${encodeURIComponent(categoryName)}`, {
        method: "GET",
      });
      const data = await response.json();
      setImageData(data);
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi tải ảnh");
    } finally {
      setLoading(false);
    }
  };

  const onCategorySelect = (index) => {
    setCategorySelectedIndex(index);
    setCategoryName(SUB_CATEGORY_2_ITEMS[index].name);
  };

  return (
    <>
      <div className='container py-10 space-y-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {SUB_CATEGORY_2_ITEMS.map((item, index) => (
            <div onClick={() => onCategorySelect(index)} key={item.name}>
              <CategoryCardComponent category={item} isDisabled={index !== categorySelectedIndex} />
            </div>
          ))}
        </div>
        <section>
          <HeadingComponent
            title={headingMaps[categorySelectedIndex]}
            description='FPT Telecom tự hào là Nhà cung cấp Dịch vụ Internet hàng đầu Việt Nam'
          />
          {imageData && <img src={imageData.url} className='w-full h-auto' alt='FPT' />}
        </section>
        <ServiceListComponent />
        <ContactComponent />
      </div>
    </>
  );
}
