import React, { Fragment } from "react";
import { formatPriceVnd } from "@/helpers/formatPrice";

export default function ServicePriceTableComponent({ data, title }) {
  const rowColors = {
    0: "bg-blue-200",
    1: "bg-yellow-200",
    2: "bg-green-200",
  };

  return (
    <>
      <div className='overflow-x-auto w-full'>
        <table className='min-w-[700px] w-full text-center border border-collapse border-black font-semibold'>
          <thead>
            <tr>
              <th rowSpan='2' colSpan={2} className='border border-black'>
                <img
                  src='https://dangkyinternet.com/wp-content/uploads/2021/05/logo-fpt-telecom-vn-file-chuan.png'
                  className='block mx-auto'
                  alt='FPT Telecom'
                  width='100'
                />
              </th>
              <th colSpan='4' className='border border-black py-4'>
                {title}
              </th>
            </tr>
            <tr>
              <th className='border border-black py-6'>Tốc Độ (Down/Upload)</th>
              <th className='border border-black py-6 text-red-600'>Giá cước KV Quận</th>
              <th className='border border-black py-6 text-blue-600'>Giá cước KV Huyện</th>
              <th className='border border-black py-6'>Phí Hòa mạng</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Fragment key={index}>
                <tr className={rowColors[index]}>
                  <td className='border border-black px-2' rowSpan='5'>
                    {index + 1}
                  </td>
                  <td className='border border-black py-2' colSpan='5'>
                    {item.planGroup}
                  </td>
                </tr>
                {item.plans.map((plan, index) => (
                  <tr key={index}>
                    <td className='border border-black py-4'>{plan.name}</td>
                    <td className='border border-black py-4'>{plan.speed}</td>
                    <td className='border border-black py-4 text-red-600'>{formatPriceVnd(plan.districtPrice)}</td>
                    <td className='border border-black py-4 text-blue-600'>{formatPriceVnd(plan.suburbPrice)}</td>
                    <td className='border border-black py-4'>{formatPriceVnd(plan.networkFee)}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
            <tr>
              <td colSpan={6} className='text-sm py-2 text-red-600'>
                Báo giá trên đã bao gồm 10% phí VAT
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
