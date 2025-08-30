"use client";

import React, { useId, useRef, useState } from "react";
import toast from "react-hot-toast";

const FILE_DOC_MAX = 5 * 1024 * 1024; // 5MB

export default function Upload({ label }) {
  const id = useId();
  const inputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = (file) => {
    if (file.size > FILE_DOC_MAX) {
      toast.error(`Ảnh tải lên giới hạn dung lượng không quá ${FILE_DOC_MAX / 1024 / 1024}MB`);
      return false;
    }
    return true;
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!validateFile(file)) {
      e.target.value = "";
      return;
    }

    handleUploadFile(file);
    e.target.value = "";
  };

  const handleUploadFile = async (file) => {
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("packageType", label);

    const response = await fetch("/api/upload", { method: "POST", body: formData });
    const data = await response.json();

    if (data.id) {
      toast.success("Tải ảnh lên thành công");
      setIsUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    if (!validateFile(file)) return;

    handleUploadFile(file);
  };

  return (
    <section className='space-y-[8px]'>
      <label htmlFor={id} className='text-[12px] leading-[16px] text-[#2C2C2C]'>
        {label}
      </label>
      <div
        className={`border-[#B7B8B9] h-[96px] border border-dashed rounded-[8px] flex items-center justify-center bg-[#F8F8F8] ${
          isDragging ? "border-[#ed1b34]" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
        <button
          type='button'
          className='border border-[#ECEAEA] rounded-[8px] px-[16px] py-[8px] bg-white flex items-center gap-2 cursor-pointer'
          onClick={() => inputRef?.current?.click()}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.6 19.1501H17.48C19.66 19.1501 21.25 16.7301 21.25 14.6901C21.2365 14.0244 21.0866 13.3687 20.8097 12.7632C20.5328 12.1578 20.1347 11.6156 19.64 11.1701C18.8605 10.4984 17.8461 10.1639 16.82 10.2401C16.7306 10.2497 16.6402 10.2416 16.554 10.2161C16.4678 10.1906 16.3875 10.1483 16.3177 10.0916C16.248 10.0348 16.1902 9.96483 16.1476 9.88561C16.1051 9.8064 16.0787 9.71954 16.07 9.63006C15.66 3.11006 5.89999 3.20006 5.74999 9.90006C5.74758 10.0368 5.70572 10.17 5.62944 10.2835C5.55316 10.3971 5.4457 10.4861 5.31999 10.5401C4.39568 10.9978 3.6507 11.7512 3.20324 12.6805C2.75578 13.6099 2.63145 14.662 2.84999 15.6701C2.97502 16.2979 3.23115 16.8924 3.60164 17.4145C3.97212 17.9366 4.44862 18.3747 4.99999 18.7001C5.69114 19.075 6.47611 19.2417 7.25999 19.1801H8.50999'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path d='M12 19.19V12.26' stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
              d='M9.83008 14.2601L12.0001 12.1001L14.1701 14.2601'
              stroke='black'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='text-[14px] leading-[20px] text-[#2C2C2C]'>{isUploading ? "Đang tải lên..." : "Nhấn hoặc thả vào để tải lên"}</span>
        </button>
        <input id={id} ref={inputRef} type='file' hidden onChange={onFileChange} />
      </div>
    </section>
  );
}
