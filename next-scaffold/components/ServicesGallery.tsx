"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

export default function ServicesGallery() {
  return (
    <section id="services" className="relative w-full bg-slate-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-100/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 tracking-wide uppercase mb-6">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed">
            End-to-end execution across technical, civil, and fit-out domains
            with uncompromising quality standards.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16 md:space-y-28 lg:space-y-36">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            const [firstWord, ...restWords] = service.title.split(" ");
            const restTitle = restWords.join(" ");

            return (
              <article
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:[direction:rtl]" : ""
                  }`}
              >
                {/* Image Column */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? -60 : 60,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut" as const,
                  }}
                  className="lg:[direction:ltr]"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.4, ease: "easeOut" as const }}
                    className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/10 group"
                  >
                    <Image
                      src={service.imagePath}
                      alt={service.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={100}
                    />
                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                    {/* Floating label on image */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block rounded-xl bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-slate-900 shadow-lg">
                        0{service.id} — {service.title}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? 60 : -60,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut" as const,
                    delay: 0.15,
                  }}
                  className="flex flex-col justify-center lg:[direction:ltr]"
                >
                  {/* Service number */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-blue-100 leading-none mb-4 select-none"
                  >
                    0{service.id}
                  </motion.span>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                    <span className="text-blue-600">{firstWord}</span>{" "}
                    <span>{restTitle}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                    {service.description}
                  </p>

                  {/* List Items */}
                  <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3,
                        },
                      },
                    }}
                    className="space-y-4"
                  >
                    {service.items.map((item) => (
                      <motion.li
                        key={item}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center gap-4 text-slate-700 font-medium text-base lg:text-lg"
                      >
                        <span className="flex shrink-0 items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-full shadow-md shadow-blue-500/20">
                          <CheckCircle2 size={16} />
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
