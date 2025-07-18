import { Suspense } from "react";
import OAuthCodePage from "./OAuthCodePage";

export default function Page() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <OAuthCodePage />
    </Suspense>
  );
}
