import React from "react";

export default function ServicePriceTableSecondComponent({ data }) {
  return (
    <>
      <div className='overflow-x-auto w-full'>
        <table className='min-w-[700px] w-full text-center border border-collapse border-black font-semibold text-sm md:text-md'>
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
              <th colSpan='5' className='border border-black py-4'>
                Gói cước cáp quang tốc độ cao cho doanh nghiệp, nhà hàng, quán game, quán coffe,...
              </th>
            </tr>
            <tr>
              <th className='border border-black py-6 text-red-600'>Super 250</th>
              <th className='border border-black py-6 text-green-600'>Super 400</th>
              <th className='border border-black py-6 text-orange-600'>Super 500</th>
              <th className='border border-black py-6 text-purple-600'>Lux 500 (Wifi 6)</th>
              <th className='border border-black py-6 text-blue-600'>Lux 800 (Wifi 6)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td colSpan={2} className='border border-black p-4'>
                  {item.name}
                </td>
                <td className='border border-black p-4'>{item.super250}</td>
                <td className='border border-black p-4'>{item.super400}</td>
                <td className='border border-black p-4'>{item.super500}</td>
                <td className='border border-black p-4'>{item.lux500}</td>
                <td className='border border-black p-4'>{item.lux800}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={7} className='text-sm py-2 text-red-600'>
                Báo giá trên đã bao gồm 10% phí VAT
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
