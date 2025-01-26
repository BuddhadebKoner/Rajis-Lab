"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Link from "next/link";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/RajisLabIcon.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/buddhadeb.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/RajisLabIcon.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/buddhadeb.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/buddhadeb.png",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/buddhadeb.png",
  },
];

export default function Page() {

  return (
    <div className="w-full h-fit mx-auto flex flex-col justify-start items-center   bg-black text-white">
      {/* Logo Section */}
      <div className="flex items-center justify-start w-full mt-5 px-4 lg:px-16">
        <Link
          href="/"
          className="w-fit flex justify-center items-center gap-4"
        >
          <Image
            width={40}
            height={40}
            src="/RajisLabIcon.jpeg"
            alt="Website Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-semibold">Rajis Lab</h1>
        </Link>
      </div>

      {/* hero texts */}
      <div className="w-full mt-[13rem] flex flex-col justify-center items-center">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Speed Up Your Attendance with{" "}
            <Highlight className="text-white">
              QR Codes & Custom Barcodes
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      {/* hero button */}
      <div className="w-full h-fit flex flex-col justify-center items-center mt-20">
        <button className="px-10 py-2 bg-gradient-to-r bg-white text-black text-xl font-semibold rounded-lg">
          Try Our Products
        </button>
        <p>Trusted by 2000+</p>
      </div>

      {/* cards */}
      <div className="max-w-5xl mx-auto px-8 mt-28">
        <HoverEffect items={projects} />
      </div>

      {/* sticky scrolls */}
      <div className="mt-[5rem] w-full h-fit flex flex-col justify-center items-center px-4 lg:px-16">
        <h1 className="text-3xl font-semibold mb-10">Explore Features</h1>
        <StickyScroll content={content} />
      </div>

      {/* how to contact */}
      <div className="w-full h-fit mt-[10rem] flex flex-col justify-center items-center px-4 lg:px-16">
        <h1 className="text-3xl font-semibold mb-10">Lets make it Happen</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Gippity AI powers the entire universe
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the most
                popular AI platform for developers.
              </p>
            </div>
            <Image
              src="/buddhadeb.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is over.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Signup for blazing-fast cutting-edge state of the art Gippity AI
                wrapper today!
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the most
                popular AI platform for developers.
              </p>
            </div>
            <Image
              src="/buddhadeb.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>

      {/* testimonials */}
      <div className="w-full h-fit mt-[10rem] flex flex-col justify-center items-center px-4 lg:px-16">
        <h1 className="text-3xl font-semibold mb-10">Testimonials</h1>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>


    </div>
  );
}






