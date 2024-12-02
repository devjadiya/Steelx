import React, { useState, useEffect } from 'react';

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`h-screen w-full fixed top-0 left-0 bg-bg-orange z-[999999] ${showLoader ? '' : 'hidden'}`}>
        <style>
            {`.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } `}
        </style>
      {showLoader && (
        <div className="flex items-center justify-center h-full">
<span className='loader'></span>


        </div>
      )}
    </div>
  );
}