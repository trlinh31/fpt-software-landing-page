import React, { useState } from "react";

export default function InputComponent({ label, isRequired = true, validate, ...props }) {
  const [error, setError] = useState("");

  const handleTrimOnBlur = (e) => {
    const value = e.target.value.trim();
    e.target.value = value;
  };

  const handleOnInputChange = (e) => {
    const value = e.target.value;
    props.onChange?.(e);

    if (validate) {
      const err = validate(value);
      setError(err);
    }
  };

  return (
    <>
      <div className='space-y-[6px]'>
        <label htmlFor={props.id} className='flex items-center gap-x-[5px] font-medium'>
          {label}
          {isRequired && <span className='text-[#FF0000]'>*</span>}
        </label>
        <div className='box-border flex border-[#dbdee0] border-2 focus-within:border-custom rounded-[6px] overflow-hidden'>
          <input
            {...props}
            type={props.type}
            className='block box-border bg-white py-[12px] pr-[10px] pl-[16px] border-0 outline-none w-full min-h-[44px] font-medium placeholder:text-slate-400'
            placeholder={props.placeholder}
            onBlur={handleTrimOnBlur}
            onChange={handleOnInputChange}
            minLength={props.minlength || 0}
            maxLength={props.maxlength || 255}
          />
        </div>

        {error && <p className='text-red-500 text-sm'>{error}</p>}
      </div>
    </>
  );
}
