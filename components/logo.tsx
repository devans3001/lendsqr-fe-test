import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

function Logo({position="login-logo"}:{position?:string}) {
  return (
    <div className={position}>
      <Image src={logo} alt="lendsqr logo" width={30} height={30} />

      <h2>lendsqr</h2>
    </div>
  );
}

export default Logo;
