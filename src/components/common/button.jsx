import clsx from "clsx";
import React from "react";

export default function ButtonComponent({ label, ...props }) {
  return (
    <>
      <button
        {...props}
        className={`text-white bg-custom w-full py-[11px] rounded-[10px] font-medium border-0 outline-none cursor-pointer hover:bg-custom/90 hover:scale-105 duration-150 transition-all ease-in-out ${clsx(
          props.disabled && "cursor-not-allowed opacity-50"
        )}`}
        onClick={props.onClick}>
        {label}
      </button>
    </>
  );
}
