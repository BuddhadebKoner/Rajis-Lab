import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
   return (
      <footer className="border-t border-gray-700 bg-transparent text-gray-400">
         <div className="px-8 py-16 max-w-7xl mx-auto text-sm flex flex-col space-y-16">
            {/* Top Section: Logo and Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start space-y-10 sm:space-y-0">
               <div>
                  <Link href="/" className="flex items-center space-x-4 text-2xl font-bold text-gray-100">
                     <div className="relative h-10 w-10 bg-gray-800 border border-gray-600 text-white flex items-center justify-center rounded-md">
                        <div className="absolute h-10 w-full bg-gray-600/20 -top-10 inset-x-0 rounded-full blur-xl"></div>
                        <Image
                           alt="Logo"
                           loading="lazy"
                           width="40"
                           height="40"
                           className="block dark:hidden"
                           src="/RajisLabIcon.jpeg"
                        />
                        <Image
                           alt="Logo"
                           loading="lazy"
                           width="40"
                           height="40"
                           className="hidden dark:block"
                           src="/logo-dark.png"
                        />
                     </div>
                     <span className="text-white">Rajis Lab</span>
                  </Link>
                  <p className="mt-4">
                     A product by{" "}
                     <Link
                        href="https://aceternity.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-400"
                     >
                        Rajis Lab
                     </Link>
                  </p>
                  <p className="mt-2">
                     Building in public at{" "}
                     <Link
                        href="https://twitter.com/mannupaaji"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sky-400"
                     >
                        @rajibul
                     </Link>
                  </p>
               </div>

               {/* Additional Info */}
               <div>
                  <h3 className="text-lg font-semibold text-white">About Us</h3>
                  <p className="mt-2 text-gray-400">
                     We aim to provide exceptional tools and resources for developers, helping you build projects faster
                     and more efficiently.
                  </p>
               </div>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Column 1 */}
               <div>
                  <h4 className="text-white font-semibold mb-4">Explore</h4>
                  <div className="flex flex-col space-y-2">
                     <Link href="/pricing" className="hover:text-white">Pricing</Link>
                     <Link href="/components" className="hover:text-white">Components</Link>
                     <Link href="/templates" className="hover:text-white">Templates</Link>
                     <Link href="/categories" className="hover:text-white">Categories</Link>
                     <Link href="/blog" className="hover:text-white">Blog</Link>
                     <Link href="/showcase" className="hover:text-white">Showcase</Link>
                  </div>
               </div>

               {/* Column 2 */}
               <div>
                  <h4 className="text-white font-semibold mb-4">Resources</h4>
                  <div className="flex flex-col space-y-2">
                     <Link href="/tools/box-shadows" className="hover:text-white">Box Shadows</Link>
                     <Link href="/faq" className="hover:text-white">FAQ</Link>
                     <Link href="/docs" className="hover:text-white">Documentation</Link>
                  </div>
               </div>

               {/* Column 3 */}
               <div>
                  <h4 className="text-white font-semibold mb-4">Connect</h4>
                  <div className="flex flex-col space-y-2">
                     <Link href="https://twitter.com/aceternitylabs" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</Link>
                     <Link href="https://discord.gg/ftZbQvCdN7" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord</Link>
                  </div>
               </div>

               {/* Column 4 */}
               <div>
                  <h4 className="text-white font-semibold mb-4">Legal</h4>
                  <div className="flex flex-col space-y-2">
                     <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
                     <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Section */}
         <div className="border-t border-gray-600 py-4">
            <div className="text-center text-gray-400 text-xs">
               &copy; {new Date().getFullYear()} Rajis Lab. All rights reserved.
            </div>
         </div>
      </footer>
   );
};

export default Footer;
