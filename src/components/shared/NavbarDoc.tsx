"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
   const [active, setActive] = useState<string | null>(null);

   return (
      <div
         className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex justify-center items-center", className)}
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
               <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                     title="Demo Product 1"
                     href="#"
                     src="/demo1.png"
                     description="Description for Demo Product 1."
                  />
                  <ProductItem
                     title="Demo Product 2"
                     href="#"
                     src="/demo2.png"
                     description="Description for Demo Product 2."
                  />
                  <ProductItem
                     title="Demo Product 3"
                     href="#"
                     src="/demo3.png"
                     description="Description for Demo Product 3."
                  />
                  <ProductItem
                     title="Demo Product 4"
                     href="#"
                     src="/demo4.png"
                     description="Description for Demo Product 4."
                  />
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
