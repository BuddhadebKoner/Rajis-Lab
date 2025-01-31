"use client";

import React, { useState, useEffect } from "react";

const GoToTopButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   // Check scroll position
   const checkScrollPosition = () => {
      if (window.scrollY > 100) {
         setIsVisible(true); 
      } else {
         setIsVisible(false); 
      }
   };

   useEffect(() => {
      // Add scroll event listener
      window.addEventListener("scroll", checkScrollPosition);

      return () => {
         // Clean up scroll event listener on unmount
         window.removeEventListener("scroll", checkScrollPosition);
      };
   }, []);

   // Scroll to top functionality
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      isVisible && (
         <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               className="w-6 h-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7-7-7 7"
               />
            </svg>
         </button>
      )
   );
};

export default GoToTopButton;
