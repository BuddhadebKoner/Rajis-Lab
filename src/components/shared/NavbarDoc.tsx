"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
   const [active, setActive] = useState<string | null>(null);

   return (
      <div
         className={cn(
            "fixed top-10 inset-x-0 z-50 flex justify-center items-center px-4 sm:px-6 lg:px-8",
            className
         )}
      >
         {/* Menu Section */}
         <Menu setActive={setActive}>
            {/* Home */}
            <MenuItem setActive={setActive} active={active} item="Home">
               <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/">Go to Homepage</HoveredLink>
               </div>
            </MenuItem>

            {/* Products */}
            <MenuItem setActive={setActive} active={active} item="Products">
               <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
                  <ProductItem
                     title="Qr Attender"
                     href="/products"
                     src="/buddhadeb.png"
                     description="Your Daily Attendance App Simplify Attendance Tracking with QR Codes"
                  />
                  {/* Show more products */}
                  <div className="w-full h-full flex justify-center items-center space-y-4 text-sm">
                     <Link
                        href="/products"
                        className="text-blue-500 text-lg font-semibold"
                     >
                        View More Products
                     </Link>
                  </div>
               </div>
            </MenuItem>

            {/* Contact Us */}
            <MenuItem setActive={setActive} active={active} item="Contact Us">
               <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/contact">Contact Support</HoveredLink>
                  <HoveredLink href="/feedback">Give Feedback</HoveredLink>
               </div>
            </MenuItem>

            {/* About */}
            <MenuItem setActive={setActive} active={active} item="About">
               <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about-us">About the Team</HoveredLink>
                  <HoveredLink href="/mission">Our Mission</HoveredLink>
               </div>
            </MenuItem>

            {/* Blogs */}
            <MenuItem setActive={setActive} active={active} item="Blogs">
               <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/blog">Latest Blogs</HoveredLink>
                  <HoveredLink href="/categories">Blog Categories</HoveredLink>
               </div>
            </MenuItem>
         </Menu>
      </div>
   );
}
