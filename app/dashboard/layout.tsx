"use client";

import { ReactNode, useEffect,useLayoutEffect, useRef, useState } from "react";
import style from "./dashboard.module.css"
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useViewport } from "@/hooks/useViewport";

function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const {  isAuthenticated } = useAuth();
  // console.log(user);

   const navRef = useRef<HTMLElement | null>(null);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    const {width} = useViewport()
  
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

  const mainStyle = {
    height: `calc(100vh - ${navbarHeight}px)`,
  };

  return (
    <div className={style.container}>
      <Navbar navRef={navRef} />
      <div className={style.section}>
       {width >= 1100 && <Sidebar navbarHeight={navbarHeight}/>}

        <main style={mainStyle}>
          {children}
          </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
