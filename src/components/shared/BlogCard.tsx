import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
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

   const trimmedContent = content?.slice(0, 200) || "";

   return (
      <div className="max-w-xs w-full group/card">
         <div
            className={cn(
               "cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 transition-all duration-300"
            )}
            style={{
               backgroundImage: `url(${imageUrl})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            <Link href={`/blog/${slug}`}>
               {/* Overlay Effect */}
               <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 group-hover/card:opacity-70 transition duration-300"></div>

               {/* Author Info */}
               <div className="flex items-center space-x-4 z-10 relative">
                  <Image
                     height={40}
                     width={40}
                     alt="Avatar"
                     src={avatar}
                     className="h-10 w-10 rounded-full border-2 object-cover"
                  />
                  <div className="flex flex-col">
                     <p className="font-normal text-base text-gray-50">{author}</p>
                     <p className="text-sm text-gray-300">{timeToRead}</p>
                  </div>
               </div>

               {/* Blog Content */}
               <div className="w-full h-full flex flex-col justify-center z-10 relative">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50">{title}</h1>
                  <p className="font-normal text-sm text-gray-200 mt-4">{trimmedContent}...</p>
               </div>
            </Link>
         </div>
      </div>
   );
}
