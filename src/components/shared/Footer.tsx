import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
   return (
      <footer className="border-t border-gray-700 px-8 py-20 bg-black text-gray-400">
         <div className="max-w-7xl mx-auto text-sm flex flex-col sm:flex-row justify-between items-start">
            {/* Logo and Info Section */}
            <div className="mb-10 sm:mb-0">
               <div className="flex items-center space-x-4 mb-4">
                  <Link
                     href="/"
                     className="flex items-center space-x-2 text-2xl font-bold text-gray-100"
                  >
                     <div className="relative h-8 w-8 md:h-6 md:w-6 bg-gray-800 border border-gray-600 text-white flex items-center justify-center rounded-md">
                        <div className="absolute h-10 w-full bg-gray-600/20 -top-10 inset-x-0 rounded-full blur-xl"></div>
                        <Image
                           alt="Logo"
                           loading="lazy"
                           width="50"
                           height="50"
                           decoding="async"
                           className="block dark:hidden"
                           src="/RajisLabIcon.jpeg"
                        />
                        <Image
                           alt="Logo"
                           loading="lazy"
                           width="50"
                           height="50"
                           decoding="async"
                           className="hidden dark:block"
                           src="/logo-dark.png"
                        />
                     </div>
                     <div>
                        <h1 className="text-white font-sans">Rajis Lab</h1>
                     </div>
                  </Link>
               </div>
               <div>
                  A product by{" "}
                  <Link
                     href="https://aceternity.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-medium text-sky-400"
                  >
                     Rajis Lab
                  </Link>
               </div>
               <div className="mt-2">
                  Building in public at{" "}
                  <Link
                     href="https://twitter.com/mannupaaji"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-medium text-sky-400"
                  >
                     @rajibul
                  </Link>
               </div>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {/* Column 1 */}
               <div className="flex flex-col space-y-4">
                  <Link
                     href="/pricing"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Pricing
                  </Link>
                  <Link
                     href="/components"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Components
                  </Link>
                  <Link
                     href="/templates"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Templates
                  </Link>
                  <Link
                     href="/categories"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Categories
                  </Link>
                  <Link
                     href="/blog"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Blog
                  </Link>
                  <Link
                     href="/tools/box-shadows"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Box Shadows
                  </Link>
                  <Link
                     href="/showcase"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Showcase
                  </Link>
               </div>

               {/* Column 2 */}
               <div className="flex flex-col space-y-4">
                  <Link
                     href="https://twitter.com/aceternitylabs"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Twitter
                  </Link>
                  <Link
                     href="https://discord.gg/ftZbQvCdN7"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     Discord
                  </Link>
               </div>

               {/* Column 3 */}
               <div className="flex flex-col space-y-4">
                  <Link
                     href="https://pro.aceternity.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="transition-colors hover:text-white text-gray-400"
                  >
                     QrAttender
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
