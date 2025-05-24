import React from "react";

export default function HeadingComponent({ title, description }) {
  return (
    <>
      <section className='text-center mb-[40px] md:mb-[80px]'>
        <h1 className='text-[24px] md:text-[32px] font-semibold md:font-extrabold leading-[22px] md:leading-[38px] mb-[8px] uppercase'>
          {title}
        </h1>
        <p className='text-[16px] md:text-[22px] font-normal md:leading-[26px] text-[#4e4e4e]'>{description}</p>
      </section>
    </>
  );
}
