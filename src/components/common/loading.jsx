"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { useLoadingStore } from "../../stores/useLoadingStore";

export default function Loading() {
  const { isLoading } = useLoadingStore();

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-[999] bg-black/30 backdrop-blur-sm'>
      <div className='flex justify-center items-center w-full h-screen'>
        <Loader2 className='animate-spin w-10 h-10 text-white' />
      </div>
    </div>
  );
}
