"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Logout from "@/components/auth/logout";


function Dashboard() {
  const router = useRouter();

const {user,isAuthenticated} = useAuth()
  console.log(user)

  useEffect(() => {
    // If user is not found, redirect to login
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return <div><Logout/></div>;
}

export default Dashboard;
