"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function CategoryCardComponent({ category, isDisabled }) {
  return (
    <CardContainer className={`inter-var ${isDisabled ? "brightness-50 opacity-30 pointer-events-none" : ""}`}>
      <Link href={category.path}>
        <CardBody className='group/card relative bg-gray-50 border border-black/[0.1] rounded-xl w-full h-auto'>
          <CardItem translateZ='100' className='w-full'>
            <img
              src={category.imageUrl}
              height='1000'
              width='1000'
              className='group-hover/card:shadow-xl rounded-xl w-full h-80 object-cover'
              alt={category.name}
            />
          </CardItem>
          <div className='py-6'>
            <h1 className='font-bold text-2xl text-center'>{category.name}</h1>
          </div>
        </CardBody>
      </Link>
    </CardContainer>
  );
}
