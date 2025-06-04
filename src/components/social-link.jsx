import React from "react";

export default function SocialLink() {
  const phoneContact = process.env.NEXT_PUBLIC_PHONE_CONTACT;
  const messengerContact = process.env.NEXT_PUBLIC_MESSENGER_CONTACT;
  const zaloContact = process.env.NEXT_PUBLIC_ZALO_CONTACT;

  return (
    <>
      <div className='fixed bottom-20 right-5 md:right-10 z-40'>
        <div className='flex flex-col gap-y-8'>
          <div className='relative flex w-[40px] h-[40px] md:w-[60px] md:h-[60px] animate-bounce'>
            <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></div>
            <a href={`tel:${phoneContact}`} target='_blank' className='relative inline-flex rounded-full w-full h-full'>
              <img src='https://clickbuy.com.vn/assets/images/icon-phone.png' className='w-full h-full' alt='Phone' />
            </a>
          </div>
          <div className='relative flex w-[40px] h-[40px] md:w-[60px] md:h-[60px] animate-bounce'>
            <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></div>
            <a href={messengerContact} target='_blank' className='relative inline-flex rounded-full w-full h-full'>
              <img
                src='https://clickbuy.com.vn/assets/images/icon-mess.png'
                className='w-full h-full'
                alt='Messenger'
              />
            </a>
          </div>
          <div className='relative flex w-[40px] h-[40px] md:w-[60px] md:h-[60px] animate-bounce'>
            <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></div>
            <a href={zaloContact} target='_blank' className='relative inline-flex rounded-full w-full h-full'>
              <img src='https://clickbuy.com.vn/assets/images/icon-zalo.png' className='w-full h-full' alt='Zalo' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
