"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Logo from "@/components/shared/Logo";
import Link from "next/link";

const content = [
  {
    title: "Innovation",
    description:
      "At Raji's Lab, we are committed to continuous innovation. Our cutting-edge tools are designed to empower businesses, simplify complex workflows, and push the boundaries of what's possible, fostering growth and success across industries.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/innovation_in_softwares.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Innovation at Raji's Lab"
        />
      </div>
    ),
  },
  {
    title: "Efficiency",
    description:
      "Boost your business efficiency with Raji's Lab’s advanced solutions. Our platform streamlines workflows, automates tedious tasks, and helps you optimize resources, enabling you to achieve maximum productivity and scale effortlessly.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/work_efficiency.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Efficiency with Raji's Lab"
        />
      </div>
    ),
  },
  {
    title: "Security",
    description:
      "Raji's Lab takes data security seriously. We implement industry-leading security measures to protect your business data and ensure that your operations remain safe and secure from potential cyber threats and vulnerabilities.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/images/security_your_information.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Security at Raji's Lab"
        />
      </div>
    ),
  },
  {
    title: "Support",
    description:
      "Raji's Lab offers comprehensive support to ensure smooth operation of our services. Whether you're facing setup issues or need troubleshooting assistance, our expert support team is available to resolve any concerns promptly.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/customer_support.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Support at Raji's Lab"
        />
      </div>
    ),
  },
];



const projects = [
  {
    title: "Raji's Lab",
    description:
      "A SaaS platform offering tailored solutions for businesses, streamlining operations and driving growth.",
    link: "http://localhost:30010/",
  },
  {
    title: "Attender",
    description:
      "Manage attendance effortlessly with QR code scanning, designed for events, meetings, and workplaces.",
    link: "http://localhost:30030/",
  },
  {
    title: "Dashboard",
    description:
      "Gain valuable insights through real-time analytics and performance tracking in a centralized dashboard.",
    link: "http://localhost:30040/",
  },
  {
    title: "Integration",
    description:
      "Seamlessly connect with multiple platforms and devices for a consistent experience across all your operations.",
    link: "http://localhost:30050/",
  },
  {
    title: "Notifications",
    description:
      "Stay updated with instant notifications for important changes and activities across your account.",
    link: "http://localhost:30090/",
  },
  {
    title: "Payments",
    description:
      "Secure, encrypted payment gateway for smooth and reliable transactions without the hassle.",
    link: "http://localhost:30070/",
  },
];


const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/images/testimonial1.jpeg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/images/testimonial2.jpeg",
  },
];

export default function Page() {

  return (
    <div className="w-full h-fit mx-auto flex flex-col justify-start items-center   bg-transparent text-white">
      {/* Logo Section */}
      <Logo />

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
        <Link
          href={"/products"}
          className="px-10 py-2 bg-gradient-to-r bg-white text-black text-xl font-semibold rounded-lg">
          Try Our Products
        </Link>
        <p>Trusted by 3500+</p>
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
        <h1 className="text-3xl font-semibold mb-10">Let's Make it Happen with Raji's Lab</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Empower Your Business with Innovation
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Drive your business forward with Raji's Lab. Our innovative solutions simplify complex processes, ensuring your operations are future-proof and streamlined for growth.
              </p>
            </div>
            <Image
              src="/images/testimonial2.jpeg"
              width={500}
              height={500}
              alt="Innovation at Raji's Lab"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Efficiency That Drives Results
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Maximize your business potential with Raji's Lab's efficient tools. Our solutions help you streamline tasks, increase productivity, and focus on what truly matters—growth.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Secure and Reliable for Your Business
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Raji's Lab prioritizes security, ensuring your business data is protected with advanced security measures. Trust us to keep your operations safe from cyber threats, so you can focus on growth.
              </p>
            </div>
            <Image
              src="/images/testimonial2.jpeg"
              width={500}
              height={500}
              alt="Security at Raji's Lab"
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






