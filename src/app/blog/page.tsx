"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/shared/Logo";
import BlogCard from "@/components/shared/BlogCard";
import { getAllBlogs } from "../../../api-calls/blogs-api";

interface Blog {
   _id: string;
   title: string;
   author: {
      fullName: string;
      profileImage: string;
   };
   readTime: string;
   content: { type: string; value: string }[];
   imageUrl: string;
   slugParams: string;
}

export default function BlogPage() {
   const [blogs, setBlogs] = useState<Blog[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [page, setPage] = useState(1);
   const [totalBlogs, setTotalBlogs] = useState(0);
   const limit = 10;

   const fetchBlogs = async (pageNumber = 1) => {
      try {
         const data = await getAllBlogs(pageNumber, limit);

         if (!data || !data.blogs) {
            throw new Error("Failed to fetch blogs!");
         }

         console.log(data);
         setBlogs((prevBlogs) =>
            pageNumber === 1 ? data.blogs : [...prevBlogs, ...data.blogs]
         );
         setTotalBlogs(data.totalBlogs);
      } catch (error) {
         setError(error instanceof Error ? error.message : "An unknown error occurred");
      }
   };

   useEffect(() => {
      fetchBlogs();
   }, []);

   const loadMoreBlogs = () => {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchBlogs(nextPage);
   };

   return (
      <div className="w-full min-h-screen lg:py-0 py-20">
         <Logo />
         <h1 className="text-2xl font-semibold text-white text-start pt-10 px-4 lg:px-16">
            My Blogs
         </h1>

         {error && <p className="text-red-500 text-center mt-4">{error}</p>}

         <div className="w-full bg-transparent text-white pt-10 flex flex-wrap justify-center items-center gap-10">
            {blogs.length > 0 ? (
               blogs.map((blog) => (
                  <BlogCard
                     key={blog._id}
                     title={blog.title}
                     author={{
                        profileImage: blog.author.profileImage,
                        name: blog.author.fullName,
                     }}
                     timeToRead={blog.readTime}
                     content={
                        blog.content
                           .map((item) => item.value)
                           .join(" ")
                           .slice(0, 100) + "..."
                     }
                     imageUrl={blog.imageUrl}
                     slugParams={blog.slugParams}
                  />
               ))
            ) : (
               !error && <p className="text-center text-gray-400">Loading blogs...</p>
            )}
         </div>

         {/* Load More Button */}
         {blogs.length < totalBlogs && (
            <div className="flex justify-center mt-6">
               <button
                  onClick={loadMoreBlogs}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
               >
                  See More
               </button>
            </div>
         )}
      </div>
   );
}
