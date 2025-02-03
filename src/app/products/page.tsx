"use client";

import Logo from "@/components/shared/Logo";
import DummyContent from "@/components/shared/ProductDetails";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import React from "react";


export default function Page() {
   const cards = data.map((card, index) => (
      <Card key={card.src} card={card} index={index} />
   ));

   return (
      <div className="w-full h-fit bg-transparent">
         {/* Logo Section */}
         <Logo />

         <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
               We Made with Love
            </h2>
            <Carousel items={cards} />
         </div>
      </div>
   );
}


const data = [
   {
      category: "Mobile App",
      title: "QR Attender",
      src: "/exampleImage.jpeg",
      content: <DummyContent
         title="QR Attender"
         content="QR Attender is a mobile application that allows users to scan QR codes to mark their attendance."
         src="/exampleImage.jpeg"
         category="Mobile App"
      />,
   },
   {
      category: "Software As Service",
      title: "Langotiya Jeetu Ka Mara Hua Yaar",
      src: "/exampleImage.jpeg",
      content: <DummyContent
         title="QR Attender"
         content="QR Attender is a mobile application that allows users to scan QR codes to mark their attendance."
         src="/exampleImage.jpeg"
         category="Mobile App"
      />,
   },
];

