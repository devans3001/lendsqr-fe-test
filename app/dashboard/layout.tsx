"use client";

import { ReactNode, useEffect,useLayoutEffect, useRef, useState } from "react";
import style from "./dashboard.module.css"
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Logout from "@/components/auth/logout";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const {  isAuthenticated } = useAuth();
  // console.log(user);

   const navRef = useRef<HTMLElement | null>(null);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
  
    useLayoutEffect(() => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
    }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }

    if(isAuthenticated) router.push("/dashboard/users")
  }, [isAuthenticated]);

  return (
    <div className={style.container}>
      <Navbar navRef={navRef} />
      <div className={style.main}>
        <Sidebar navbarHeight={navbarHeight}/>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
