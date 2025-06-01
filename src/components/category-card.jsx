"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function CategoryCardComponent({ category, isDisabled }) {
  return (
    <>
      <Link href={category.path} className={`${isDisabled ? "brightness-50 opacity-30" : ""}`}>
        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card border-black/[0.1] w-full h-auto rounded-xl border'>
            <CardItem translateZ='100' className='w-full'>
              <img
                src={category.imageUrl}
                height='1000'
                width='1000'
                className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='FPT Software'
              />
            </CardItem>
            <div className='py-6'>
              <h1 className='text-center text-2xl font-bold'>{category.name}</h1>
            </div>
          </CardBody>
        </CardContainer>
      </Link>
    </>
  );
}
