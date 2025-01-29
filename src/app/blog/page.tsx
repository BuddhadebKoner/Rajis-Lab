"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Logo from "@/components/shared/Logo";

export default function Page() {
   return (
      <>
         <Logo />
         <div className="w-full h-fit bg-transparent text-white pt-10">
            <TracingBeam className="px-6">
               <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                  {dummyContent.map((item, index) => (
                     <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                           {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4")}>
                           {item.title}
                        </p>

                        <div className="text-sm  prose prose-sm dark:prose-invert">
                           {item?.image && (
                              <Image
                                 src={item.image}
                                 alt="blog thumbnail"
                                 height="1000"
                                 width="1000"
                                 className="rounded-lg mb-10 object-cover"
                              />
                           )}
                           {item.description}
                        </div>
                     </div>
                  ))}
               </div>
            </TracingBeam>
         </div>
      </>
   );
}


const dummyContent = [
   {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
         <>
            <p>
               Sit duis est minim proident non nisi velit non consectetur. Esse
               adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
               Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
               incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
               fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
               nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
               occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
               officia sint labore. Tempor consectetur excepteur ut fugiat veniam
               commodo et labore dolore commodo pariatur.
            </p>
         </>
      ),
      badge: "React",
      image:
         "/exampleImage.jpeg",
   },
   {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
         <>
            <p>
               Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
               deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
               non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
               sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
               velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
               commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
            </p>
            <p>
               In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
               veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
               reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
               cillum ut mollit.
            </p>
         </>
      ),
      badge: "Changelog",
      image:
         "/exampleImage.jpeg",
   },
   {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
         <>
            <p>
               Sit duis est minim proident non nisi velit non consectetur. Esse
               adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
               Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
               incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
               fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
               nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
               occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
               officia sint labore. Tempor consectetur excepteur ut fugiat veniam
               commodo et labore dolore commodo pariatur.
            </p>
         </>
      ),
      badge: "Launch Week",
      image:
         "/exampleImage.jpeg",
   },
];