import React from "react";
import Image from "next/image";
import { formatPriceVnd } from "@/helpers/formatPrice";
import ButtonComponent from "./common/button";
import { CircleCheck } from "lucide-react";

export default function PackageCardComponent({ pkg }) {
  return (
    <>
      <div className='border rounded-[10px] flex flex-col w-full relative overflow-hidden pb-4 hover:shadow-lg duration-150 transition-all ease-in-out'>
        <div className='w-full h-[274px]'>
          <Image src={pkg.image} className='w-full h-full object-cover' height={274} width={346} alt={pkg.name} />
        </div>
        <div className='text-center px-[24px]'>
          <h1 className='text-[24px] md:text-[32px] font-bold leading-[44px] py-[16px] md:py-[24px]'>{pkg.name}</h1>
          <span className='text-[#888888]'>Chỉ từ</span>
          <div className='text-[18px] md:text-[20px] font-bold mb-5'>
            {formatPriceVnd(pkg.price)}
            <span className='text-[#888888] font-normal'>/ Tháng</span>
          </div>
          <ul className='text-left space-y-2 mb-5'>
            {pkg.description.map((item, index) => (
              <li key={index} className='font-normal flex items-start gap-x-2'>
                <CircleCheck size={20} />
                <span className='flex-1'>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonComponent label={"Đăng ký ngay"} />
        </div>
      </div>
    </>
  );
}
