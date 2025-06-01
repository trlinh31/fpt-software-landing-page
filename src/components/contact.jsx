"use client";

import React, { useState } from "react";
import HeadingComponent from "@/components/common/heading";
import ContactImagePath from "@/assets/images/contact.jpg";
import InputComponent from "./common/input";
import SelectComponent from "./common/select";
import ButtonComponent from "./common/button";
import { TYPE_SERVICES } from "@/data/services";
import { REGEX } from "@/constants/regex";
import { formatDateTime } from "@/helpers/formatDateTime";
import { MESSAGES } from "@/constants/message";
import toast from "react-hot-toast";

export default function ContactComponent() {
  const [formValue, setFormValue] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    typeService: "",
  });
  const [isLoading, setLoading] = useState(false);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };

  const onSelectChange = (value) => {
    setFormValue({ ...formValue, typeService: value });
  };

  const isFormInvalid = () => {
    return (
      !formValue.fullName.trim() ||
      !formValue.phoneNumber.trim() ||
      !formValue.address.trim() ||
      !REGEX.VALID_FULLNAME.test(formValue.fullName) ||
      !REGEX.VALID_VIETNAM_PHONE_NUMBER.test(formValue.phoneNumber)
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isFormInvalid()) return;
    if (isLoading) return;

    try {
      setLoading(true);

      const payload = {
        fullName: formValue.fullName.trim(),
        phoneNumber: formValue.phoneNumber.trim(),
        address: formValue.address.trim(),
        typeService: formValue.typeService,
        submittedAt: formatDateTime(new Date()),
      };

      await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      toast.success(MESSAGES.SUBMIT_FORM_SUCCESS);
    } catch (error) {
      console.error("Lỗi khi gửi form: ", error.message);
      toast.error(MESSAGES.SUBMIT_FORM_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeadingComponent title='Liên hệ' description='Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        <div className='flex items-center justify-center h-auto max-h-[592px]'>
          <img src={ContactImagePath.src} className='w-full h-full' alt='' />
        </div>

        <form onSubmit={onSubmit}>
          <div className='flex flex-col gap-y-4 mb-8'>
            <InputComponent
              id='fullName'
              label='Họ và tên'
              placeholder='Nhập họ và tên của bạn'
              onChange={onInputChange}
              validate={(value) => {
                if (!REGEX.VALID_FULLNAME.test(value)) return MESSAGES.INVALID_FULLNAME;
                return "";
              }}
            />
            <InputComponent
              id='phoneNumber'
              label='Số điện thoại'
              type='tel'
              maxLength={12}
              placeholder='Nhập số điện thoại của bạn'
              onChange={onInputChange}
              validate={(value) => {
                if (!REGEX.VALID_VIETNAM_PHONE_NUMBER.test(value)) return MESSAGES.INVALID_PHONE_NUMBER;
                return "";
              }}
            />
            <InputComponent
              id='address'
              label='Địa chỉ'
              placeholder='Nhập địa chỉ của bạn'
              onChange={onInputChange}
              validate={(value) => {
                if (!REGEX.REQUIRED_FIELD.test(value)) return MESSAGES.INVALID_ADDRESS;
                return "";
              }}
            />
            <SelectComponent
              label='Dịch vụ đăng ký'
              options={TYPE_SERVICES}
              onSelectChange={onSelectChange}
              placeholder='Chọn loại dịch vụ'
            />
          </div>
          <ButtonComponent label='Gửi' type='submit' disabled={isFormInvalid() || isLoading} />
        </form>
      </div>
    </>
  );
}
