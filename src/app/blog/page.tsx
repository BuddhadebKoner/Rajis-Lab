"use client";

import React from "react";
import Logo from "@/components/shared/Logo";
import BlogCard from "@/components/shared/BlogCard";
import { useGetBlogs } from "../../../utils/react-query/queriesAndMutation";

export default function BlogPage() {
   const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
   } = useGetBlogs();

   const blogs = data?.pages.flatMap((page) => page.blogs) || [];

   return (
      <div className="w-full min-h-screen lg:py-0 py-20">
         <Logo />
         <h1 className="text-2xl font-semibold text-white text-start pt-10 px-4 lg:px-16">
            My Blogs
         </h1>

         {error && <p className="text-red-500 text-center mt-4">Failed to load blogs.</p>}

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
                           .map((item: { value: string }) => item.value)
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
         {hasNextPage && (
            <div className="flex justify-center mt-6">
               <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
               >
                  {isFetchingNextPage ? "Loading..." : "See More"}
               </button>
            </div>
         )}
      </div>
   );
}
