"use client";
import { FaRegBell } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { LoginDetails } from "@/types/type";
import { useEffect, useState } from "react";
import { IoGrid } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Avatar from "./Avatar";
import Skeleton from "react-loading-skeleton";

function UserNavWidget() {
  const [user] = useLocalStorageState<LoginDetails | null>(null, "user");

  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (user) setName(user.email);
  }, [user]);

  return (
    <div className="ending">
      <p className="textHide">Docs</p>
      <FaRegBell size={20} color="#213F7D" className="iconHide" />
      {!name ? <Skeleton height={40} width={40} circle/>:<Avatar seed={name} />}

      <p>{name.split("@")[0] || <Skeleton height={20} width={75} />}</p>
      <IoGrid className="iconShow" />
      <HiOutlineDotsVertical className="iconShow" />

      <MdArrowDropDown className="iconHide" />
    </div>
  );
}

export default UserNavWidget;
