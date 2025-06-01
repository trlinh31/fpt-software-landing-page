import React, { useState } from "react";

export default function InputComponent({ label, isRequired = true, validate, ...props }) {
  const [error, setError] = useState("");

  const handleTrimOnBlur = (e) => {
    const value = e.target.value.trim();
    e.target.value = value;

    if (validate) {
      const err = validate(value);
      setError(err);
    }
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
      <div className='space-y-[12px]'>
        <label htmlFor={props.id} className='flex items-center gap-x-[5px] font-medium'>
          {label}
          {isRequired && <span className='text-[#FF0000]'>*</span>}
        </label>
        <div className='flex box-border border-2 border-[#dbdee0] rounded-[6px] overflow-hidden focus-within:border-custom'>
          <input
            {...props}
            type={props.type}
            className='block py-[12px] pr-[10px] pl-[16px] w-full box-border bg-white min-h-[44px] outline-none border-0 font-medium placeholder:text-slate-400'
            placeholder={props.placeholder}
            onBlur={handleTrimOnBlur}
            onChange={handleOnInputChange}
            minLength={props.minlength || 0}
            maxLength={props.maxlength || 255}
          />
        </div>

        {error && <p className='text-sm text-red-500'>{error}</p>}
      </div>
    </>
  );
}
