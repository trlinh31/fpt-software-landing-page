"use client";

import React, { useEffect, useState } from "react";
import HeadingComponent from "@/components/common/heading";
import ServiceListComponent from "@/components/service-list";
import { SUB_CATEGORY_2_ITEMS } from "@/data/category";
import CategoryCardComponent from "@/components/category-card";
import ContactComponent from "@/components/contact";
import toast from "react-hot-toast";
import { useLoadingStore } from "@/stores/useLoadingStore";

const headingMaps = {
  0: "Combo Internet + Truyện hình FPT",
  1: "Combo Zplay",
};

export default function ComboInternetPage() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [imageData, setImageData] = useState(null);
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    const fetchImage = async () => {
      setLoading(true);
      try {
        const categoryName = SUB_CATEGORY_2_ITEMS[categoryIndex].name;
        const res = await fetch(`/api/images?packageType=${encodeURIComponent(categoryName)}`, { signal: controller.signal });
        if (!res.ok) throw new Error("Fetch error");
        const data = await res.json();
        if (!ignore) setImageData(data);
      } catch (err) {
        if (!ignore) toast.error("Đã xảy ra lỗi khi tải ảnh");
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchImage();
    return () => {
      ignore = true;
      controller.abort();
    };
  }, [categoryIndex, setLoading]);

  return (
    <div className='container py-10 space-y-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        {SUB_CATEGORY_2_ITEMS.map((item, index) => (
          <button key={item.name} onClick={() => setCategoryIndex(index)} className='w-full text-left'>
            <CategoryCardComponent category={item} isDisabled={index !== categoryIndex} />
          </button>
        ))}
      </div>

      <section>
        <HeadingComponent title={headingMaps[categoryIndex]} description='FPT Telecom tự hào là Nhà cung cấp Dịch vụ Internet hàng đầu Việt Nam' />
        {imageData && <img src={imageData.url} className='w-full h-auto' alt={SUB_CATEGORY_2_ITEMS[categoryIndex].name} />}
      </section>

      <ServiceListComponent />
      <ContactComponent />
    </div>
  );
}
