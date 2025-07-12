"use client";
import { FaRegBell } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { LoginDetails } from "@/types/type";
import { useEffect, useState } from "react";

function UserNavWidget() {
  const [user] = useLocalStorageState<LoginDetails | null>(null, "user");

  const [name,setName] = useState<string>("")

  useEffect(()=>{
    if(user) setName(user.email)
  },[user])
  console.log(name);
  const avatar = createAvatar(initials, {
    seed: name,
    radius:50
  });

  const svg = avatar.toString();

  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  return (
    <div className="ending">
      <p>Docs</p>
      <FaRegBell size={20} color="#213F7D" />

      <Image
        src={dataUrl}
        alt="User avatar"
        width={40}
        height={40}
      />
      <p>
        {name.split("@")[0] || "User"}
      </p>
      <MdArrowDropDown/>
    </div>
  );
}

export default UserNavWidget;
