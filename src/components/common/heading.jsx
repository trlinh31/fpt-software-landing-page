export default function HeadingComponent({ title, description }) {
  return (
    <section className='mb-[30px] md:mb-[60px] pt-3 text-center'>
      <h1 className='mb-[8px] font-bold text-[24px] text-custom md:text-[32px] uppercase leading-[32px] md:leading-[38px]'>{title}</h1>
      <p className='font-normal text-[#4e4e4e] text-[16px] md:text-[22px] md:leading-[26px]'>{description}</p>
    </section>
  );
}
