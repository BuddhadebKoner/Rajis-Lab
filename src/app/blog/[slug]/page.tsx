"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import BlogSidebarCard from "@/components/shared/BlogSidebarCard";


const blogs = [
   {
      slug: "learn-git-in-hindi",
      title: "Learn Git in Hindi for Free",
      author: "Buddhadeb Koner",
      avatar: "/buddhadeb.png",
      imageUrl: "/exampleImage.jpeg",
      content: "This is a long video tutorial about Git and Github in Hindi created by Chai aur Code. It covers basic and advanced Git commands like `git add`, `git commit`, and explains GitHub as a platform.",
      videoLink: "https://youtu.be/3cR1KqyFp6I?si=vVzXOFymSUvi_LH4",
      readTime: "8 min read",
      date: "Jan 31, 2025",
   },
   {
      slug: "nextjs-beginners-guide",
      title: "Next.js Guide for Beginners",
      author: "John Doe",
      avatar: "/buddhadeb.png",
      imageUrl: "/exampleImage.jpeg",
      content: "A complete guide to Next.js for beginners, covering routing, data fetching, and SSR vs CSR concepts.",
      videoLink: "https://youtu.be/3cR1KqyFp6I?si=vVzXOFymSUvi_LH4",
      readTime: "6 min read",
      date: "Feb 10, 2025",
   },
   {
      slug: "react-performance-optimization",
      title: "Optimizing Performance in React",
      author: "Alice Smith",
      avatar: "/buddhadeb.png",
      imageUrl: "/exampleImage.jpeg",
      content: "Learn techniques like memoization, lazy loading, and code splitting to improve React app performance.",
      videoLink: "https://youtu.be/3cR1KqyFp6I?si=vVzXOFymSUvi_LH4",
      readTime: "10 min read",
      date: "March 5, 2025",
   }
];



export default function BlogDetailPage() {
   const { slug } = useParams();
   const blog = blogs.find((b) => b.slug === slug);

   if (!blog) return notFound();

   return (
      <>
         <Logo />
         <div className="w-full min-h-screen bg-transparent text-white pt-10 px-6 md:px-20">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto">
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
            <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto mt-10">
               {/* Main Content */}
               <article className="flex-1">
                  {/* Author Section */}
                  <div className="flex items-center space-x-4 mb-6">
                     <Image src={blog.avatar} alt={blog.author} width={50} height={50} className="rounded-full" />
                     <div>
                        <p className="text-gray-300 text-lg font-semibold">{blog.author}</p>
                        <p className="text-gray-500 text-sm">{blog.date} • {blog.readTime}</p>
                     </div>
                  </div>

                  {/* Blog Text */}
                  <div className="text-gray-400 text-lg leading-relaxed">
                     <p>{blog.content}</p>
                  </div>

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

               </article>

               {/* Sidebar */}
               <BlogSidebarCard blog={blog} />
            </div>
         </div>
      </>
   );
}
