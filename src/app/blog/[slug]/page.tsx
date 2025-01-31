"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import BlogSidebarCard from "@/components/shared/BlogSidebarCard";
import Link from "next/link";


const blogs = [
   {
      slug: "mastering-mern-stack",
      title: "Mastering MERN Stack Development – A Complete Roadmap",
      author: "Buddhadeb Koner",
      avatar: "/buddhadeb.png",
      imageUrl: "/exampleImage.jpeg",
      content: [
         {
            type: "text",
            value: "MERN Stack (MongoDB, Express.js, React, Node.js) is a popular choice for full-stack web development. In this guide, we'll cover each component and how they interact."
         },
         {
            type: "text",
            value: "MongoDB is a NoSQL database that stores data in JSON-like format. It is scalable and flexible, making it ideal for modern applications."
         },
         {
            type: "code",
            value: "const mongoose = require('mongoose'); \n mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });"
         },
         {
            type: "text",
            value: "Express.js is a minimal and flexible Node.js framework that helps in building APIs efficiently. It simplifies routing and middleware handling."
         },
         {
            type: "code",
            value: "const express = require('express'); \n const app = express(); \n app.get('/', (req, res) => res.send('Hello World')); \n app.listen(3000, () => console.log('Server running on port 3000'));"
         },
         {
            type: "text",
            value: "React is a JavaScript library for building user interfaces. It allows component-based development and makes UI updates efficient using the virtual DOM."
         },
         {
            type: "code",
            value: "import React from 'react'; \n function App() { \n return <h1>Hello, MERN Stack!</h1>; \n } \n export default App;"
         }
      ],
      videoLink: "https://youtu.be/Vi9bxu-M-ag?si=mnqtIFuQBMowcy6r",
      readTime: "12 min read",
      date: "March 1, 2025",
   },
   {
      slug: "secure-authentication-node",
      title: "Secure Authentication in Node.js with JWT",
      author: "Buddhadeb Koner",
      avatar: "/buddhadeb.png",
      imageUrl: "/exampleImage.jpeg",
      content: [
         {
            type: "text",
            value: "Authentication is a critical part of any web application. JSON Web Tokens (JWT) provide a secure way to manage authentication in Node.js applications."
         },
         {
            type: "text",
            value: "JWT consists of three parts: Header, Payload, and Signature. It is used to securely transmit information between parties as a JSON object."
         },
         {
            type: "code",
            value: "const jwt = require('jsonwebtoken'); \n const token = jwt.sign({ userId: '12345' }, 'secretkey', { expiresIn: '1h' }); \n console.log(token);"
         },
         {
            type: "text",
            value: "To verify a JWT, the server checks if the token is valid using the secret key."
         },
         {
            type: "code",
            value: "jwt.verify(token, 'secretkey', (err, decoded) => { \n if (err) return res.status(401).json({ message: 'Unauthorized' }); \n console.log(decoded); \n });"
         },
         {
            type: "text",
            value: "For enhanced security, always store tokens securely, use HTTPS, and implement proper token expiration and refresh strategies."
         }
      ],
      videoLink: "https://youtu.be/xrj3zzaqODw?si=1DMMdp2RvzlLyWBs",
      readTime: "9 min read",
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
         <div className="min-h-screen bg-transparent text-white lg:py-10 py-20 px-6 md:px-20 ">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto">
               <p className="text-gray-400 text-base py-5">
                  <Link href={`/blog`} className="text-blue-400 underline">
                     BLOGS
                  </Link>{' '}/ {' '}
                  <span>
                     {blog.title.length > 25 ? `${blog.title.slice(0, 20)}...` : blog.title}
                  </span>
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
               {/* Main Content */}
               <article className="flex-1 min-w-0">
                  {/* Author Section */}
                  <div className="flex items-center space-x-4 mb-6">
                     <Image src={blog.avatar} alt={blog.author} width={50} height={50} className="rounded-full" />
                     <div>
                        <p className="text-gray-300 text-lg font-semibold">{blog.author}</p>
                        <p className="text-gray-500 text-sm">{blog.date} • {blog.readTime}</p>
                     </div>
                  </div>

                  {/* Blog Text - Handling Different Content Types */}
                  <div className="text-gray-400 text-lg leading-relaxed space-y-4">
                     {blog.content.map((block, index) => (
                        <div key={index}>
                           {block.type === "text" && <p>{block.value}</p>}
                           {block.type === "code" && (
                              <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                                 <code className="whitespace-pre-wrap break-words">{block.value}</code>
                              </pre>
                           )}
                        </div>
                     ))}
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
               <div className="w-full md:w-64 flex-shrink-0">
                  <BlogSidebarCard blog={blog} />
               </div>
            </div>
         </div>

      </>
   );
}
