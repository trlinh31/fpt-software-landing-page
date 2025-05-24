import React from "react";
import HeadingComponent from "./common/heading";
import PackageCardComponent from "./package-card";
import { PROPOSAL_PACKAGES } from "@/data/proposal-package";

export default function ProposalPackageComponent() {
  return (
    <>
      <section className='container pb-10'>
        <HeadingComponent
          title='Gói đề xuất'
          description='Bao gồm gói giá khuyến mái - Đáp ứng mọi nhu cầu cuộc sống cá nhân, gia đình'
        />

        <div className='grid md:grid-cols-4 gap-4'>
          {PROPOSAL_PACKAGES.map((item, index) => (
            <PackageCardComponent key={index} pkg={item} />
          ))}
        </div>
      </section>
    </>
  );
}
