import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
   _id: string;
   title: string;
   author: {
      profileImage: string;
      name: string;
   };
   timeToRead: number | string;
   content: string;
   imageUrl: string;
   slug: string;
}

export default function BlogCard({
   _id,
   title,
   author,
   timeToRead,
   content,
   imageUrl,
}: BlogCardProps) {
   return (
      <div className="max-w-xs w-full group">
         <Link href={`/blog/${_id}`} className="block">
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
               {/* Overlay Effect */}
               <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 group-hover:opacity-70 transition duration-300"></div>

               {/* Author Info */}
               <div className="flex items-center space-x-4 z-10 relative">
                  <Image
                     height={40}
                     width={40}
                     alt={author.name}
                     src={author.profileImage}
                     className="h-10 w-10 rounded-full border-2 object-cover"
                  />
                  <div className="flex flex-col">
                     <p className="font-normal text-base text-gray-50">{author.name}</p>
                     <p className="text-sm text-gray-300">{timeToRead} min read</p>
                  </div>
               </div>

               {/* Blog Content */}
               <div className="w-full h-full flex flex-col justify-center z-10 relative">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50">{title}</h1>
                  <p className="font-normal text-sm text-gray-200 mt-4">
                     {content.length > 100 ? content.slice(0, 100) + "..." : content}
                  </p>
               </div>
            </div>
         </Link>
      </div>
   );
}
