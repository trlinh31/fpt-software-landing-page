import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function SelectComponent({
  label,
  isRequired = true,
  value: propValue,
  options,
  onSelectChange,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedValue = options.find((o) => o.value === propValue)?.label;

  const handleSelectChange = (value) => {
    setIsOpen(false);
    onSelectChange(value);
  };

  return (
    <div className='space-y-[12px]'>
      <div className='flex items-center gap-x-[5px] font-medium'>
        {label}
        {isRequired && <span className='text-[#FF0000]'>*</span>}
      </div>
      <div
        className={`relative flex box-border border-2 border-[#dbdee0] rounded-[6px] ${clsx(
          isOpen && "border-custom"
        )}`}>
        <div
          className='flex items-center justify-between py-[12px] pr-[10px] pl-[16px] w-full box-border bg-white min-h-[44px] outline-none border-0 rounded-[6px] font-medium cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}>
          <span className='text-slate-400'>{selectedValue ? selectedValue : props.placeholder}</span>
          <ChevronDown color='#94a3b8' />
        </div>

        <ul
          className={`absolute top-[calc(100%_+_2px)] left-0 w-full bg-white border border-[#dbdee0] rounded-b-[6px] divide-y-2 bg-white z-10 ${
            !isOpen && "hidden"
          }`}>
          {options?.map((option) => (
            <li
              key={option.value}
              className='p-4 cursor-pointer hover:bg-slate-100'
              onClick={() => handleSelectChange(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
