"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        Cookies.set("token", data.token);
        router.push("/admin/content");
      } else {
        throw new Error("Sai mật khẩu");
      }
    } catch (err) {
      toast.error(err.message || "Đăng nhập thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='max-w-[900px] mx-auto flex items-center justify-center min-h-screen'>
      <div className='container flex justify-center'>
        <Card className='w-full max-w-sm'>
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription>Nhập mật khẩu của bạn bên dưới để đăng nhập vào hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Mật khẩu</Label>
              </div>
              <Input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type='button' className='w-full' disabled={!password || isLoading} onClick={handleLogin}>
              {isLoading ? "Đang xác thực..." : "Đăng nhập"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
