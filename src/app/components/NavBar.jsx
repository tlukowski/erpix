"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
export const NavBar = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="fixed top-2 sm:top-4 left-0 sm:left-1/2 sm:-translate-x-1/2 max-w-[calc(100%-16px)] sm:max-w-2xl md:max-w-5xl z-10 w-full bg-[#ededed] mx-2 py-4 flex items-center gap-4 justify-center flex-wrap sm:justify-between sm:py-3 sm:px-6 sm:mx-auto lg: rounded-[1rem]">
      <div className="flex gap-2 cursor-pointer" onClick={handleLogoClick}>
        <Image
          aria-hidden
          src="/karcher2.png"
          alt="Globe icon"
          width={94}
          height={34}
          priority
        />
        <Image
          aria-hidden
          src="/karcher.svg"
          alt="Globe icon"
          width={129}
          height={34}
          priority
        />
      </div>
      <div>
        <Link className="btn-primary" href="https://erpixkarcher24.pl/">Powrót do sklepu
        
        </Link>
      </div>
    </nav>
    
  );
};


