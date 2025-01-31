"use client";

import React from "react";
import Logo from "@/components/shared/Logo";
import Blogard from "@/components/shared/BlogCard";

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


export default function Page() {
   return (
      <>
         <div className="w-full min-h-screen">
            <Logo />
            <div className="w-full bg-transparent text-white pt-10 flex flex-wrap justify-center items-center gap-10">
               {blogs.map((blog) => (
                  <Blogard
                     key={blog.slug}
                     title={blog.title}
                     author={blog.author}
                     timeToRead={blog.readTime}
                     content={blog.content.substring(0, 100) + "..."}
                     imageUrl={blog.imageUrl}
                     avatar={blog.avatar}
                     slug={blog.slug}
                  />
               ))}
            </div>
         </div>
      </>
   );
}