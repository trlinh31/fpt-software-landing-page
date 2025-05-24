"use client";

import React, { useState } from "react";
import FptLogoImage from "@/assets/images/fpt-logo.svg";
import Image from "next/image";
import { MENU_ITEMS } from "@/data/menu";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function NavbarComponent() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <>
      <div className='navbar'>
        <div className='container flex h-full'>
          <div className='w-full flex items-center justify-between py-4'>
            <Image src={FptLogoImage} alt='FPT logo' />

            <ul className='hidden md:flex items-center gap-x-14'>
              {MENU_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className='font-semibold text-[18px] hover:text-primary duration-100 transition-colors ease-in'>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>

            {/* Mobile */}
            <div className='md:hidden'>
              <button className='cursor-pointer' onClick={toggleMenu}>
                <Menu color='#ff6b17' size={30} />
              </button>

              <nav
                className={`fixed top-0 left-0 w-full h-screen bg-[#0b0b0b] bg-opacity-80 z-50 transition-opacity duration-300 ease-in-out ${
                  isShowMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleMenu}>
                <div
                  className={`h-full w-[70%] bg-white transform transition-transform duration-300 ease-in-out pt-10 ${
                    isShowMenu ? "translate-x-0" : "-translate-x-full"
                  }`}
                  onClick={(e) => e.stopPropagation()}>
                  <ul className='divide-y'>
                    {MENU_ITEMS.map((item, index) => (
                      <li key={index} className='w-full'>
                        <Link href={item.path} className='pl-[20px] py-[15px] block'>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
