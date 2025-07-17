"use client"
import val from "@/public/bankloan.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-animation-wrapper">
        <DotLottieReact 
          data={val} 
          loop 
          autoplay 
          className="loading-lottie-animation"
        />
      </div>
      
      <div className="loading-text-content">
        <h2 className="loading-title">Processing Your Request</h2>
        <p className="loading-subtitle">Please wait while we secure your loan details...</p>
       
       <ClipLoader/>
      </div>
    </div>
  );
};

export default Loading;