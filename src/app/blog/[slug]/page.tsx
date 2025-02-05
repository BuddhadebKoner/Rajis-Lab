"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import BlogSidebarCard from "@/components/shared/BlogSidebarCard";
import { useParams } from "next/navigation";

interface Blog {
   _id: string;
   title: string;
   author: {
      fullName: string;
      profileImage: string;
   };
   readTime: string;
   content: {
      type: string;
      value: string;
      _id: string;
   }[];
   imageUrl: string;
   slugParams: string;
   videoLink: string;
   updatedAt: string;
}

export default function BlogDetailPage() {
   const [blog, setBlog] = useState<Blog | null>(null);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const { slug } = useParams();

   useEffect(() => {
      if (!slug) return;

      // Check if the blog is already cached in sessionStorage
      const cachedBlog = sessionStorage.getItem(`blog_${slug}`);
      if (cachedBlog) {
         setBlog(JSON.parse(cachedBlog)); // Use cached blog data
         setLoading(false); // No need to fetch data
      } else {
         // Fetch the blog data from the API if not cached
         const fetchBlog = async () => {
            try {
               const response = await fetch(`/api/blogs/${slug}`);
               const data = await response.json();

               if (!response.ok) throw new Error(data.message || "Failed to fetch blog!");

               setBlog(data.blog);
               sessionStorage.setItem(`blog_${slug}`, JSON.stringify(data.blog)); // Cache the blog data in sessionStorage
            } catch (error) {
               setError(error instanceof Error ? error.message : "An unknown error occurred");
            } finally {
               setLoading(false);
            }
         };

         fetchBlog();
      }
   }, [slug]);

   if (loading) {
      return <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">Loading...</div>;
   }

   if (error) {
      return <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">{error}</div>;
   }

   if (!blog) {
      return <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">Blog not found!</div>;
   }

   return (
      <>
         <Logo />
         <div className="min-h-screen bg-transparent text-white lg:py-10 py-20 px-6 md:px-20">
            {/* Breadcrumb */}
            <section className="max-w-4xl mx-auto">
               <p className="text-gray-400 text-base py-5">
                  <Link href="/blog" className="text-blue-400 underline">BLOGS</Link> / {blog.title.length > 25 ? `${blog.title.slice(0, 20)}...` : blog.title}
               </p>
               <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image src={blog.imageUrl} alt={blog.title} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                     <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                        {blog.title}
                     </h1>
                  </div>
               </div>
            </section>

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto mt-10 flex flex-col md:flex-row gap-10">
               <div className="w-full md:w-3/4">
                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-6">
                     <Image src={blog.author.profileImage} alt={blog.author.fullName} width={50} height={50} className="rounded-full" />
                     <div>
                        <p className="text-lg font-semibold">{blog.author.fullName}</p>
                        <div className="flex items-center gap-4">
                           <p className="text-gray-400 text-sm">
                              {new Date(blog.updatedAt).toLocaleDateString("en-IN", {
                                 month: "long",
                                 day: "numeric",
                                 year: "numeric",
                              })}
                           </p>
                           <p className="text-gray-400 text-sm">{blog.readTime}</p>
                        </div>
                     </div>
                  </div>
                  {/* Blog Content */}
                  {blog.content.map((item) => (
                     <div key={item._id} className="mb-4">
                        {item.type === "text" && (
                           <p className="text-lg text-gray-200">{item.value}</p>
                        )}
                        {item.type === "heading" && (
                           <h2 className="text-2xl font-bold text-white">{item.value}</h2>
                        )}
                        {item.type === "bold" && (
                           <p className="text-lg font-semibold text-gray-100">{item.value}</p>
                        )}
                        {item.type === "highlight" && (
                           <p className="text-lg bg-yellow-300 text-black px-2 py-1 inline-block rounded">
                              {item.value}
                           </p>
                        )}
                        {item.type === "code" && (
                           <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
                              <code>{item.value}</code>
                           </pre>
                        )}
                     </div>
                  ))}

                  {/* Video section if present */}
                  {blog.videoLink && (
                     <div className="mt-10">
                        <div className="relative h-0 pb-[56.25%]">
                           <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${new URL(blog.videoLink).pathname.split("/")[1]}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                           ></iframe>
                        </div>
                     </div>
                  )}
               </div>
               <div className="w-full md:w-1/4">
                  <BlogSidebarCard
                     author={blog.author}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
