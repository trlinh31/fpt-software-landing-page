"use client";

import React from "react";
import Image from "next/image";
import FptLogoImagePath from "@/assets/images/fpt-logo.svg";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <div className='w-full flex items-center justify-between py-4 border-b mb-6'>
      <Image src={FptLogoImagePath} alt='FPT' />
      <Button size='sm' variant='outline' onClick={handleLogout}>
        <LogOut />
        Đăng xuất
      </Button>
    </div>
  );
}
