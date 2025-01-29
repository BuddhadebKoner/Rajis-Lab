"use client";

import Logo from "@/components/shared/Logo";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";


export default function Page() {

   const data = [
      {
         title: "2025",
         content: (
            <div>
               <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Expanded our SaaS offerings with the launch of QR Attender Pro, a premium version of our attendance management software. It includes advanced analytics, multi-event support, and seamless integration with popular productivity tools.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src="/exampleImage.jpeg"
                     alt="QR Attender Pro Dashboard"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "2024",
         content: (
            <div>
               <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Successfully launched QR Attender, a SaaS-based attendance management system designed for schools, businesses, and events. It simplifies attendance tracking with QR codes, real-time reporting, and cloud-based storage.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src="/exampleImage.jpeg"
                     alt="QR Attender Software Interface"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "2023",
         content: (
            <div>
               <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Developed and deployed several custom SaaS solutions for clients, including inventory management systems, employee productivity trackers, and event management platforms.
               </p>
               <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Focused on enhancing user experience and scalability, ensuring our software solutions are robust, intuitive, and adaptable to various business needs.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src="/exampleImage.jpeg"
                     alt="Custom SaaS Solutions"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "Changelog",
         content: (
            <div>
               <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
                  Recent updates and improvements to our services:
               </p>
               <div className="mb-8">
                  <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                     Added multi-language support to QR Attender for global accessibility.
                  </div>
                  <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                     Introduced real-time collaboration features in our productivity tools.
                  </div>
                  <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                     Enhanced security protocols for all SaaS products to ensure data protection.
                  </div>
                  <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                     Launched a new customer support portal for faster issue resolution.
                  </div>
                  <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                     Improved UI/UX across all platforms for a seamless user experience.
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src="/exampleImage.jpeg"
                     alt="Service Updates"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
               </div>
            </div>
         ),
      },
   ];

   return (
      <div className="w-full h-fit bg-transparent text-white">
         {/* logo */}
         <Logo />

         <div className="w-full">
            <Timeline data={data} />
         </div>
      </div>
   );
}