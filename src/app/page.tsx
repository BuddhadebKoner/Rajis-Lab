"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

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
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Page() {

  return (
    <div className="w-full h-[400vh] mx-auto flex flex-col justify-start items-center   bg-black text-white">
      {/* Logo Section */}
      <div className="flex items-center justify-start w-full mt-5 px-4 lg:px-16">
        <div className="w-fit flex justify-center items-center gap-4">
          <Image
            width={40}
            height={40}
            src="/RajisLabIcon.jpeg"
            alt="Website Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-semibold">Rajis Lab</h1>
        </div>
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
      <div className="mt-[5rem] w-full h-fit">
        <StickyScroll content={content} />
      </div>

      {/* how to contact */}
      <div className="w-full h-full flex flex-wrap justify-center gap-32 mt-20 px-4 lg:px-16">
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Authentication steps
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
            <ul className="list-none  mt-2">
              <Step title="Enter your email address" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Ensuring your account is properly secured helps protect your personal
            information and data.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Authentication steps
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
            <ul className="list-none  mt-2">
              <Step title="Enter your email address" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Ensuring your account is properly secured helps protect your personal
            information and data.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Authentication steps
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
            <ul className="list-none  mt-2">
              <Step title="Enter your email address" />
              <Step title="Create a strong password" />
              <Step title="Set up two-factor authentication" />
              <Step title="Verify your identity" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Ensuring your account is properly secured helps protect your personal
            information and data.
          </p>
        </CardSpotlight>
      </div>
    </div>
  );
}






const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};