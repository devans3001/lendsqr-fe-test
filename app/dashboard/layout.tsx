"use client";

import { ReactNode, useEffect,useLayoutEffect, useRef, useState } from "react";
import style from "./dashboard.module.css"
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const {  isAuthenticated } = useAuth();
  // console.log(user);

   const navRef = useRef<HTMLElement | null>(null);
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

console.log(isSidebarOpen)
  
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

  const heightStyle = {
    height: `calc(100vh - ${navbarHeight}px)`,
  };

  return (
    <SkeletonTheme highlightColor="#39cdcd57" >

    <div className={style.container}>
      <Navbar navRef={navRef} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className={style.section}>
     <Sidebar heightStyle={heightStyle} />


      <Sidebar
        isMobile
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

        <main style={heightStyle}>
          
          {children}
          </main>
      </div>
    </div>
    </SkeletonTheme>
  );
}

export default DashboardLayout;
