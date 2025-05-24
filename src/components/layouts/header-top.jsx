import React from "react";
import { CONTACT_INFORMATION } from "@/data/contact-information";

export default function HeaderTopComponent() {
  return (
    <>
      <div className='header-top md:block hidden'>
        <div className='w-full bg-[#191E67] h-[36px]'>
          <div className='container flex h-full'>
            <ul className='w-full flex items-center justify-center divide-x'>
              {Object.entries(CONTACT_INFORMATION).map(([key, value]) => (
                <li
                  className='text-white px-4 text-sm cursor-pointer hover:underline duration-100 transition-all ease-in-out'
                  key={key}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
