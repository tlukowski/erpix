import React from "react";
import Image from "next/image";
import Link from "next/link";
export const NavBar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 max-w-5xl z-10 w-full bg-[#ededed] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-3 md:px-6 md:mx-auto rounded-[1rem]">
      <div className="flex gap-2">
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


