import React from "react";

export default function ButtonComponent({ label, onClick }) {
  return (
    <>
      <button
        className='text-white bg-primary w-full py-[11px] rounded-[10px] font-medium border-0 outline-none cursor-pointer hover:bg-primary/90 hover:scale-105 duration-150 transition-all ease-in-out'
        onClick={onClick}>
        {label}
      </button>
    </>
  );
}
