"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import val from "@/public/bankloan.json";

function Page() {
  return <DotLottieReact data={val} loop autoplay />;
}

export default Page;
