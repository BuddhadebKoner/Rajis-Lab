"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/shared/Logo";
import BlogCard from "@/components/shared/BlogCard";

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

   useEffect(() => {
      // Check if blogs data is already in sessionStorage
      const cachedBlogs = sessionStorage.getItem("blogs");
      if (cachedBlogs) {
         setBlogs(JSON.parse(cachedBlogs)); // Use cached data
      } else {
         // If no cached data, fetch from API
         const fetchBlogs = async () => {
            try {
               const response = await fetch("/api/blogs/");
               if (!response.ok) throw new Error("Failed to fetch blogs!");

               const data = await response.json();
               setBlogs(data.blogs);
               sessionStorage.setItem("blogs", JSON.stringify(data.blogs)); // Cache the data in sessionStorage
            } catch (error) {
               setError(error instanceof Error ? error.message : "An unknown error occurred");
            }
         };

         fetchBlogs();
      }
   }, []); // Empty dependency array ensures it runs once when the component is mounted

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
                     _id={blog._id}
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
                     slug={blog.slugParams}
                  />
               ))
            ) : (
               !error && <p className="text-center text-gray-400">Loading blogs...</p>
            )}
         </div>
      </div>
   );
}
