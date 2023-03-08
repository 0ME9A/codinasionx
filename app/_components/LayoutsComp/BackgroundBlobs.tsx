"use client";
import { theContext } from "app/_context/theContext";
import { useContext } from "react";
import Image from "next/image";

export default function BackgroundBlobs() {
  const context = useContext(theContext)
  
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 z-10 border-b-[.5rem] dark:border-white border-black bg-gradient-to-tr from-very-light to-lightII dark:from-very-dark dark:to-darkII">
      <Image
        src={
          context.values.theme === "dark"
            ? "/svg/darkBlob.svg"
            : "/svg/lightBlob.svg"
        }
        alt="background blob"
        width={500}
        height={500}
        className="scale-[2] lg:scale-[3] rotate-[30deg] absolute bottom-[50%] right-0 lg:right-[10%] opacity-70 animate-blob"
      />
      <Image
        src={
          context.values.theme === "dark"
            ? "/svg/darkBlob.svg"
            : "/svg/lightBlob.svg"
        }
        alt="background blob"
        width={500}
        height={500}
        className="scale-[2.5] lg:scale-[3] rotate-[-10deg] absolute bottom-[50%] -right-[50%] md:-right-[10%] lg:right-[0%] opacity-70 animate-blob"
      />
      <Image
        src={
          context.values.theme === "dark"
            ? "/svg/darkBlob.svg"
            : "/svg/lightBlob.svg"
        }
        alt="background blob"
        width={500}
        height={500}
        className="scale-[2.7] lg:scale-[3] rotate-[20deg] absolute bottom-[40%] -right-[30%] md:-right-[0%] opacity-50 animate-blob"
      />
    </div>
  );
}
