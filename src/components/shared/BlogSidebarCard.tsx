"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaTelegram, FaBookmark } from "react-icons/fa";


export default function BlogSidebarCard({ blog }: {
   blog: {
      avatar: string;
      author: string;
   };
}) {
   return (
      <>
         <aside className="w-full md:w-64 bg-transparent p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Author</h3>
            <div className="flex items-center space-x-3">
               <Image src={blog.avatar} alt={blog.author} width={40} height={40} className="rounded-full" />
               <span className="text-gray-300">{blog.author}</span>
            </div>

            {/* Bookmark & Social */}
            <div className="mt-6">
               <button className="flex items-center text-gray-400 hover:text-white space-x-2">
                  <FaBookmark />
                  <span>Bookmark</span>
               </button>
               <h4 className="mt-4 text-gray-300">Share With</h4>
               <div className="flex space-x-3 mt-2">
                  <FaFacebook className="text-blue-500 cursor-pointer" />
                  <FaLinkedin className="text-blue-400 cursor-pointer" />
                  <FaTwitter className="text-blue-300 cursor-pointer" />
                  <FaTelegram className="text-blue-500 cursor-pointer" />
               </div>
            </div>
         </aside>
      </>
   )
}