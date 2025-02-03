import Image from "next/image";

interface ProductProps {
   category: string;
   title: string;
   src: string;
   content: string;
}

const ProductDetails: React.FC<ProductProps> = ({ category, title, src, content }) => {
   return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-6">
         <h3 className="text-2xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-200 text-center">
            {title}
         </h3>
         <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 text-center mb-6">
            {category}
         </p>
         <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
            {content}
         </div>
         <Image
            src={src}
            alt={title}
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
         />
      </div>
   );
};

export default ProductDetails;
