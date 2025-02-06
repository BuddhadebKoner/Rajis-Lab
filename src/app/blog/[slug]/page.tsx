"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import BlogSidebarCard from "@/components/shared/BlogSidebarCard";
import { useGetOneBlog } from "../../../../utils/react-query/queriesAndMutation";

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
   videoLink?: string;
   updatedAt: string;
}

export default function BlogDetailPage() {
   const { slug } = useParams();
   const { data, error, isLoading } = useGetOneBlog(slug as string);

   if (isLoading) {
      return (
         <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">
            Loading blog...
         </div>
      );
   }

   if (error || !data?.blog) {
      return (
         <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
            {error?.message || "Blog not found!"}
         </div>
      );
   }

   const blog: Blog = data.blog;

   // Extract YouTube video ID
   const getYouTubeID = (url: string | undefined) => {
      if (!url) return null;
      const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
      return match ? match[1] : null;
   };

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
                        {item.type === "text" && <p className="text-lg text-gray-200">{item.value}</p>}
                        {item.type === "heading" && <h2 className="text-2xl font-bold text-white">{item.value}</h2>}
                        {item.type === "bold" && <p className="text-lg font-semibold text-gray-100">{item.value}</p>}
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
                  {blog.videoLink && getYouTubeID(blog.videoLink) && (
                     <div className="mt-10">
                        <div className="relative h-0 pb-[56.25%]">
                           <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${getYouTubeID(blog.videoLink)}`}
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
                  <BlogSidebarCard author={blog.author} />
               </div>
            </div>
         </div>
      </>
   );
}
