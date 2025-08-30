"use client";

import { useEffect } from "react";
import BannerSlideComponent from "@/components/banner-slide";
import CategoryListComponent from "@/components/category-list";
import ContactComponent from "@/components/contact";
import ServiceListComponent from "@/components/service-list";

export default function Home() {
  const trackVisitor = async () => {
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const { ip } = await ipRes.json();

      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userAgent: navigator.userAgent,
          ip,
        }),
      });
    } catch (err) {
      console.error("Tracking failed:", err);
    }
  };

  useEffect(() => {
    trackVisitor();
  }, []);

  return (
    <>
      <div className='space-y-10 md:space-y-16'>
        <BannerSlideComponent />
        <div className='container space-y-10 md:space-y-16 pb-10'>
          <CategoryListComponent />
          <ContactComponent />
          <ServiceListComponent />
        </div>
      </div>
    </>
  );
}
