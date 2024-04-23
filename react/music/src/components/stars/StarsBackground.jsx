import React, { useEffect } from "react";

const StarsBackground = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
        rel="stylesheet"
      />

      <div
        className="
          w-full
          h-screen
          bg-gradient-to-r
          from-black
          via-green-700
          to-black
          background-animate
        "
      ></div>

      <style>
        {`
          body {
            font-family: "Inter", sans-serif;
          }

          .background-animate {
            background-size: 400%;
            -webkit-animation: AnimationName 5s ease infinite;
            -moz-animation: AnimationName 5s ease infinite;
            animation: AnimationName 5s ease infinite;
          }

          @keyframes AnimationName {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
    </>
  );
};

export default StarsBackground;
