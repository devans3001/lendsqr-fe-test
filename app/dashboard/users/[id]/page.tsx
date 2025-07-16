"use client";

import { useRouter } from "next/navigation";
import style from "./user.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import UserDetails from "./userDetails";
import ProfileSummary from "./userSummary";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { User } from "@/types/type";
import { usePageTitle } from "@/hooks/usePageTitle";

function UserPage() {
  const [user] = useLocalStorageState<User | null>(null, `selectedUser`);

  const router = useRouter();

  const goBack = () => {
    router.push("/dashboard/users");
  };

   usePageTitle("User | Lendsqr")

  return (
    <div className={style.container}>
      <p onClick={goBack}>
        <HiOutlineArrowNarrowLeft />
        Back to Users
      </p>

      <header>
        <h1>user details</h1>

        <div>
          <button>blacklist user</button>
          <button>activate user</button>
        </div>
      </header>

      {/* BASIC INFO  AND TABS*/}
      <UserDetails user={user}/>

      {/* PROFILE SUMMARY  */}
      <ProfileSummary user={user} />
    </div>
  );
}

export default UserPage;
