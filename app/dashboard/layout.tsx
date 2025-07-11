"use client";

import { ReactNode, useEffect } from "react";
import style from "./dashboard.module.css"
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Logout from "@/components/auth/logout";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const { user, isAuthenticated } = useAuth();
  console.log(user);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.main}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
