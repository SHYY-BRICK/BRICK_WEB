"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";

const KakaoRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { mutate, data, isPending, isError } = useLogin();

  useEffect(() => {
    if (code) {
      mutate(code);
    }
  }, [code, mutate]);

  useEffect(() => {
    const access = data?.tokenResponse?.accessToken;
    const refresh = data?.tokenResponse?.refreshToken;

    if (access && refresh) {
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      const destination = data.detail ? "/stock" : "/setname";
      router.push(destination);
    }
  }, [data, router]);

  useEffect(() => {
    if (isError) {
      alert("로그인 실패! 다시 시도해주세요.");
      router.push("/");
    }
  }, [isError, router]);

  if (isPending) return <div>로그인 처리 중입니다...</div>;
  return null;
};

export default KakaoRedirect;
