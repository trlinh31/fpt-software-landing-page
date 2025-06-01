"use client";

import React, { useState } from "react";
import HeadingComponent from "@/components/common/heading";
import ServiceListComponent from "@/components/service-list";
import { SUB_CATEGORY_1_ITEMS } from "@/data/category";
import CategoryCardComponent from "@/components/category-card";
import ServicePriceTableComponent from "@/components/service-price-table";
import data1 from "@/data/internet-plans-1.json";
import data2 from "@/data/internet-plans-2.json";
import ServicePriceTableSecondComponent from "@/components/service-price-table-second";
import ContactComponent from "@/components/contact";

export default function InternetFptPage() {
  const [categorySelectedIndex, setCategorySelectedIndex] = useState(0);

  const headingMaps = {
    0: "Internet FPT - Dành cho cá nhân & Hộ gia đình",
    1: "Internet FPT - Dành cho doanh nghiệp",
  };

  const onCategorySelect = (index) => {
    setCategorySelectedIndex(index);
  };

  return (
    <>
      <div className='container py-10 space-y-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {SUB_CATEGORY_1_ITEMS.map((item, index) => (
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
              data={data1}
              title='Bảng giá internet cho cá nhân, hộ gia đình, hộ kinh doanh,...'
            />
          )}
          {categorySelectedIndex === 1 && <ServicePriceTableSecondComponent data={data2} />}
        </section>
        <ServiceListComponent />
        <ContactComponent />
      </div>
    </>
  );
}
