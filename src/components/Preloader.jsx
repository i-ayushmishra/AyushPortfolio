import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => setLoading(false), 800);
    });
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-primaryBg/90 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-700">
      
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full bg-accent rounded-sm 
                        shadow-[0_0_20px_rgba(74,141,252,0.7),0_0_40px_rgba(74,141,252,0.5)]
                        animate-spin-slow transform rotate-45 origin-center"></div>
        <div className="absolute w-full h-full bg-accent rounded-sm 
                        shadow-[0_0_15px_rgba(74,141,252,0.5),0_0_30px_rgba(74,141,252,0.3)]
                        animate-spin-slow transform -rotate-45 origin-center"></div>
      </div>

    </div>
  );
};

export default Preloader;