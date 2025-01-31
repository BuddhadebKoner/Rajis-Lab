import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Blogard({
   title,
   author,
   timeToRead,
   content,
   imageUrl,
   avatar,
   slug,
}: {
   title: string;
   author: string;
   timeToRead: string;
   content: string;
   imageUrl: string;
   avatar: string;
   slug: string;
}) {

   const scrinkContent = content.slice(0, 200);

   return (
      <>
         <div className="max-w-xs w-full group/card">
            <div
               className={cn(
                  "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                  `bg-[url(/exampleImage.jpeg)] bg-cover`
               )}
            >
               <Link
                  href={`/blog/${slug}`}
               >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                  <div className="flex flex-row items-center space-x-4 z-10">
                     <Image
                        height="100"
                        width="100"
                        alt="Avatar"
                        src={avatar}
                        className="h-10 w-10 rounded-full border-2 object-cover"
                     />
                     <div className="flex flex-col">
                        <p className="font-normal text-base text-gray-50 relative z-10">
                           {author}
                        </p>
                        <p className="text-sm text-gray-400">{timeToRead}</p>
                     </div>
                  </div>
                  <div className="w-full h-full text content-center flex flex-col justify-center z-10">
                     <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {title}
                     </h1>
                     <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        {scrinkContent}
                     </p>
                  </div>
               </Link>
            </div>
         </div>
      </>
   )
}