"use client";

import React, { useState } from "react";
import HeadingComponent from "@/components/common/heading";
import ServiceListComponent from "@/components/service-list";
import { SUB_CATEGORY_2_ITEMS } from "@/data/category";
import CategoryCardComponent from "@/components/category-card";
import ServicePriceTableComponent from "@/components/service-price-table";
import data3 from "@/data/internet-plans-3.json";
import data4 from "@/data/internet-plans-4.json";
import ContactComponent from "@/components/contact";

export default function ComboInternetPage() {
  const [categorySelectedIndex, setCategorySelectedIndex] = useState(0);

  const headingMaps = {
    0: "Combo Internet + Truyện hình FPT",
    1: "Combo Zplay",
  };

  const onCategorySelect = (index) => {
    setCategorySelectedIndex(index);
  };

  return (
    <>
      <div className='container py-10 space-y-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {SUB_CATEGORY_2_ITEMS.map((item, index) => (
            <div onClick={() => onCategorySelect(index)} key={index}>
              <CategoryCardComponent category={item} isDisabled={index !== categorySelectedIndex} />
            </div>
          ))}
        </div>
        <section>
          <HeadingComponent
            title={headingMaps[categorySelectedIndex]}
            description='FPT Telecom tự hào là Nhà cung cấp Dịch vụ Internet hàng đầu Việt Nam'
          />
          {categorySelectedIndex === 0 && (
            <ServicePriceTableComponent
              data={data3}
              title='Bảng giá internet + truyền hình FPT Play kèm Box Tivi chất lượng 4K'
            />
          )}
          {categorySelectedIndex === 1 && (
            <ServicePriceTableComponent data={data4} title='Bảng giá Combo Zplay Internet + Tài khoản giải trí' />
          )}
        </section>
        <ServiceListComponent />
        <ContactComponent />
      </div>
    </>
  );
}
