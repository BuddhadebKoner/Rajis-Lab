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
      title: "Qr Attender",
      src: "/exampleImage.jpeg",
      content: <DummyContent />,
   },
   {
      category: "Software As Service",
      title: " Langotiya jeetu ka mara hua yaar",
      src: "/exampleImage.jpeg",
      content: <DummyContent />,
   },
];