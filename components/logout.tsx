"use client";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { LoginDetails } from "@/types/type";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toast";

function Logout() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [, setUser] = useLocalStorageState<LoginDetails | null>(
    null,
    "user"
  );

  const handleLogout = () => {
    setIsloading(true);

    setTimeout(() => {
      setUser(null);
      toast.success("Logged out Successfully 😐")
      router.push("/login");
    }, 800);
  };

  return (
    <>
      <div className={"logout"} onClick={handleLogout}>
        <LogOut />
        <span>
          {isLoading ? (
            <ClipLoader size={20} color="#213f7d" loading={isLoading} />
          ) : (
            "logout"
          )}
        </span>
      </div>
      <span className={"version"}>v1.2.0</span>
    </>
  );
}

export default Logout;
