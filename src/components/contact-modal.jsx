"use client";

import InputComponent from "./common/input";
import SelectComponent from "./common/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MESSAGES } from "@/constants/message";
import { useLoadingStore } from "@/stores/useLoadingStore";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { formatDateTime } from "@/helpers/formatDateTime";
import { TYPE_SERVICES } from "@/data/services";
import { REGEX } from "@/constants/regex";

export default function ContactModal() {
  const [isContactModalOpen, setContactModalOpen] = useState(true);
  const [formValue, setFormValue] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    typeService: "",
  });
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setContactModalOpen(true);
    }, 60000); // 1 phút

    return () => clearTimeout(timer);
  }, [isContactModalOpen]);

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };

  const onSelectChange = (value) => {
    setFormValue({ ...formValue, typeService: value });
  };

  const isFormInvalid = useMemo(
    () =>
      !formValue.fullName.trim() ||
      !formValue.phoneNumber.trim() ||
      !formValue.address.trim() ||
      !REGEX.VALID_FULLNAME.test(formValue.fullName) ||
      !REGEX.VALID_VIETNAM_PHONE_NUMBER.test(formValue.phoneNumber) ||
      !formValue.typeService,
    [formValue]
  );

  const resetForm = () => {
    setFormValue({
      fullName: "",
      phoneNumber: "",
      address: "",
      typeService: "",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        fullName: formValue.fullName.trim(),
        phoneNumber: formValue.phoneNumber.trim(),
        address: formValue.address.trim(),
        typeService: formValue.typeService,
        submittedAt: formatDateTime(new Date()),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Đã xảy ra lỗi, vui lòng thử lại!");

      resetForm();
      toast.success(MESSAGES.SUBMIT_FORM_SUCCESS);
    } catch (error) {
      toast.error(error.message || MESSAGES.SUBMIT_FORM_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isContactModalOpen} onOpenChange={() => setContactModalOpen(false)}>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Liên hệ</DialogTitle>
          <DialogDescription>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col gap-y-4 mb-8'>
            <InputComponent
              id='fullName'
              label='Họ và tên'
              placeholder='Nhập họ và tên của bạn'
              value={formValue.fullName}
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
              value={formValue.phoneNumber}
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
              value={formValue.address}
              onChange={onInputChange}
              validate={(value) => {
                if (!REGEX.REQUIRED_FIELD.test(value)) return MESSAGES.INVALID_ADDRESS;
                return "";
              }}
            />
            <SelectComponent
              label='Dịch vụ đăng ký'
              options={TYPE_SERVICES}
              value={formValue.typeService}
              onSelectChange={onSelectChange}
              placeholder='Chọn loại dịch vụ'
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' variant='ghost'>
                Đóng
              </Button>
            </DialogClose>
            <Button type='submit' disabled={isFormInvalid}>
              Liên hệ ngay
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
