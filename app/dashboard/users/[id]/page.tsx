"use client";

import { useRouter } from "next/navigation";
import style from "./user.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import UserDetails from "./userDetails";
import ProfileSummary from "./userSummary";

function User() {
  const router = useRouter();

  const goBack = () => {
    router.push("/dashboard/users");
  };

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
      <UserDetails />

      {/* PROFILE SUMMARY  */}
      <ProfileSummary/>
    </div>
  );
}

export default User;
