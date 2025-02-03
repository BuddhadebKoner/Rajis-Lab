"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
   return (
      <>
         <div className="w-screen items-center justify-start mt-5 px-4 lg:px-16 z-10 hidden lg:flex">
            <Link
               href="/"
               className="w-fit flex justify-center items-center gap-4 z-50"
            >
               <Image
                  width={40}
                  height={40}
                  src="/RajisLabIcon.jpeg"
                  alt="Website Logo"
                  className="w-10 h-10 rounded-full"
               />
               <h1 className="text-xl font-semibold">Rajis Lab</h1>
            </Link>
         </div>
      </>
   )
}