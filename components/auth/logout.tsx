"use client";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { LoginDetails } from "@/types/type";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./logout.module.css";
import { ClipLoader } from "react-spinners";

function Logout() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [user, setUser] = useLocalStorageState<LoginDetails | null>(
    null,
    "user"
  );
  // console.log(user )

  const handleLogout = () => {
    setIsloading(true);

    setTimeout(() => {
      setUser(null);
      router.push("/login");
    }, 800);
  };

  return (
    <>
      <div className={style.logout} onClick={handleLogout}>
        <LogOut />
        <span>
          {isLoading ? (
            <ClipLoader size={20} color="#213f7d" loading={isLoading} />
          ) : (
            "logout"
          )}
        </span>
      </div>
      <span className={style.version}>v1.2.0</span>
    </>
  );
}

export default Logout;
