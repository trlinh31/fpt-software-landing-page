import React from "react";
import Upload from "@/components/common/upload";

export default function ContentPage() {
  return (
    <section className='space-y-4'>
      <Upload label='Internet FPT Hộ gia đình' />
      <Upload label='Combo Internet Doanh nghiệp' />
      <Upload label='Combo Internet + Truyền hình' />
      <Upload label='Combo Zplay' />
    </section>
  );
}
