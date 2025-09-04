import React from "react";
import CategoryCardComponent from "./category-card";
import HeadingComponent from "./common/heading";
import { CATEGORY_ITEMS } from "@/data/category";

export default function CategoryListComponent() {
  return (
    <>
      <HeadingComponent title='Dịch vụ nổi bật' description='Dịch vụ nào hot, ở đây có hết - lướt nhẹ xem thử nha!' />
      <div className='gap-8 lg:gap-16 grid grid-cols-1 md:grid-cols-3'>
        {CATEGORY_ITEMS.map((item, index) => (
          <CategoryCardComponent key={index} category={item} />
        ))}
      </div>
    </>
  );
}
