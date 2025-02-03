"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import React from "react";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Logo from "@/components/shared/Logo";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconHeart, IconHelp, IconRouteAltLeft, IconTerminal2 } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Feature from "@/components/shared/Feature";

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

const features = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Ease of use",
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud />,
  },
  {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: <IconHelp />,
  },
  {
    title: "Money back guarantee",
    description:
      "If you donot like EveryAI, we will convince you to like us.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: <IconHeart />,
  },
];

export default function Page() {

  return (
    <div className="w-screen min-h-screen mx-auto flex flex-col justify-start items-center bg-transparent text-white">
      {/* Logo Section */}
      <Logo />

      {/* hero texts */}
      <div className="w-screen mt-[13rem] flex flex-col justify-center items-center">
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
            Welcome to Raji's Lab:{" "}
            <Highlight className="text-white">
              Innovating Daily Life with Technology
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      {/* hero button */}
      <div className="w-screen h-fit flex flex-col justify-center items-center mt-20">
        <Link
          href={"/products"}
          className="px-10 py-2 bg-gradient-to-r bg-white text-black text-xl font-semibold rounded-lg">
          Try Our Products
        </Link>
        <p>Trusted by 3500+</p>
      </div>

      {/* sticky scrolls */}
      <div className="mt-[5rem] w-screen h-fit flex flex-col justify-center items-center px-4 lg:px-16">
        <h1 className="text-3xl font-semibold mb-10">How we serve best products</h1>
        <StickyScroll content={content} />
      </div>

      {/* how to contact */}
      <div className="w-screen h-fit mt-[10rem] flex flex-col justify-center items-center px-4 lg:px-16">
        <h1 className="text-3xl font-semibold mb-10">Let's Make it Happen with Raji's Lab</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>


      {/* testimonials */}
      <div className="w-screen h-fit mt-[10rem] flex flex-col justify-center items-center px-4 lg:px-16 z-30">
        <h1 className="text-3xl font-semibold mb-10">Testimonials</h1>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>


    </div>
  );
}




