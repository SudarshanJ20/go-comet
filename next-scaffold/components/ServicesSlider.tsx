"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Electrical & Tech",
    description:
      "Comprehensive electrical solutions for industrial, commercial, and residential properties. From advanced electro-mechanic installations to city-wide street lighting and cutting-edge CCTV network deployments, we ensure your infrastructure is powered, efficient, and highly secure.",
    items: [
      "Electronic and Electro Mechanic Works",
      "Electrical Cabling & Lighting Works",
      "CCTV and Network Cabling",
    ],
    imagePath: "/images/electrical.png",
  },
  {
    id: 2,
    title: "Civil & Plumbing",
    description:
      "Robust civil and plumbing engineering tailored for heavy industrial usage and residential comfort. We handle everything from complete structural maintenance and safe demolition to complex high-pressure pipeline routing and drainage systems.",
    items: [
      "Civil Works (Industrial, Maintenance, Demolition)",
      "Plumbing Works (Residential, Industrial, Drainage)",
    ],
    imagePath: "/images/civil.png",
  },
  {
    id: 3,
    title: "Carpentry & Glass",
    description:
      "Precision-crafted carpentry and glazing services designed to elevate function and aesthetics across homes, offices, and commercial facilities. Our teams execute custom woodwork, durable cargo-grade plywood units, and modern aluminum-glass installations with premium finishing and long-term reliability.",
    items: [
      "Wooden Works & Furniture",
      "Commercial Plywood Cargo Boxes",
      "Aluminum with Glass Works",
      "Kitchen Cabinets",
    ],
    imagePath: "/images/carpentry.png",
  },
  {
    id: 4,
    title: "Tiling & Painting",
    description:
      "High-quality surface finishing services that transform interiors and exteriors with durability and visual appeal. From granite, marble, and ceramic tile applications to professional coating systems including emulsion, oil-based, and industrial floor paints, we deliver clean execution and lasting results.",
    items: [
      "Floor & Wall Tiling (Granite, Marble, Ceramic)",
      "Painting Works (Oil, Emulsion, Industrial Floor)",
    ],
    imagePath: "/images/tilling.png",
  },
  {
    id: 5,
    title: "HVAC & Maintenance",
    description:
      "Integrated HVAC and maintenance support to keep operations efficient, compliant, and uninterrupted. We provide high-pressure air line solutions, deep cleaning programs, waste skip management, and complete air conditioning service cycles tailored to your facility requirements.",
    items: [
      "High Pressure Air Line Pipe Works",
      "Cleaning Works",
      "Waste Skip Services",
      "Air Condition Works with Service",
    ],
    imagePath: "/images/hvac.png",
  },
  {
    id: 6,
    title: "Fabrication & Ceilings",
    description:
      "Specialized fabrication and ceiling systems built for performance-driven commercial and industrial environments. Our capabilities include decorative gypsum works, false ceiling installations, gas pipeline integration for restaurant kitchens, and precision M/S and SS steel fabrication for custom structural needs.",
    items: [
      "Gypsum Works & Decor",
      "False Ceiling Works",
      "Restaurant Kitchen Gas Pipelines",
      "M/S and SS Steel Fabrication",
    ],
    imagePath: "/images/fabrication.png",
  },
] as const;

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="relative w-full min-h-[80vh] flex items-center bg-slate-50 overflow-hidden py-20">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatePresence mode="wait">
          {servicesData.map((service, index) => {
            if (index !== currentIndex) {
              return null;
            }

            const [firstWord, ...restWords] = service.title.split(" ");
            const restTitle = restWords.join(" ");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col justify-start"
              >
                {/* Title */}
                <h3 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                  <span className="text-blue-600">{firstWord}</span> <span>{restTitle}</span>
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-lg leading-relaxed mb-10">{service.description}</p>

                {/* List Items */}
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.15,
                      },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                >
                  {service.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="flex items-start gap-4 text-slate-700 font-medium"
                    >
                      <span className="flex shrink-0 items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full mt-0.5">
                        <CheckCircle2 size={18} />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-12">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous service"
                    className="h-14 w-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next service"
                    className="h-14 w-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Right Side - Image */}
        <AnimatePresence mode="wait">
          {servicesData.map((service, index) => {
            if (index !== currentIndex) {
              return null;
            }

            return (
              <motion.div
                key={`img-${service.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-125 lg:h-175 flex justify-center items-center"
              >
                {/* Decorative Blob Background */}
                <div className="absolute inset-0 bg-blue-200/50 rounded-full blur-[100px] -z-10" />

                {/* Image */}
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-contain drop-shadow-[0_25px_35px_rgba(37,99,235,0.2)]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  quality={100}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
