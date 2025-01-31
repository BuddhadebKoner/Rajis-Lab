"use client";

import React from "react";
import Logo from "@/components/shared/Logo";
import Blogard from "@/components/shared/BlogCard";

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
      videoLink: "https://youtu.be/G9VbtcsPKT0?si=KzkWI5D9SSl5nII_",
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
      videoLink: "https://youtu.be/G9VbtcsPKT0?si=KzkWI5D9SSl5nII_",
      readTime: "9 min read",
      date: "March 5, 2025",
   }
];



export default function Page() {
   return (
      <>
         <div className="w-full min-h-screen lg:py-10 py-20">
            <Logo />
            <h1 className="text-2xl font-semibold text-white text-start pt-10 px-4 lg:px-16">
               My Blogs
            </h1>
            <div className="w-full bg-transparent text-white pt-10 flex flex-wrap justify-center items-center gap-10">
               {blogs.map((blog) => (
                  <Blogard
                     key={blog.slug}
                     title={blog.title}
                     author={blog.author}
                     timeToRead={blog.readTime}
                     content={blog.content.map(item => item.value).join(" ").substring(0, 100) + "..."}
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