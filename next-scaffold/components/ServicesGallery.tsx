"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const listContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.18,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

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
    <section id="services" className="px-4 pb-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">Services Gallery</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Visual service highlights with integrated execution capabilities across technical,
              civil, and fit-out domains.
            </p>
          </div>
        </div>

        <div>
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className="mb-16 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-4"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="md:col-span-1"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative h-125 w-full overflow-hidden rounded-3xl shadow-2xl"
                >
                  <Image
                    src={service.imagePath}
                    alt={service.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />
                </motion.div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 85, damping: 18, delay: 0.05 + index * 0.05 }}
                className="flex flex-col justify-center py-8 pl-4 md:col-span-3 md:pl-12 lg:pl-20"
              >
                <h3 className="mb-6 bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl">
                  {service.title}
                </h3>

                <p className="mb-10 max-w-4xl text-lg leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <motion.ul
                  variants={listContainerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="grid grid-cols-1 gap-x-12 gap-y-5 lg:grid-cols-2"
                >
                  {service.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItemVariants}
                      className="flex items-center gap-3 text-lg text-slate-200"
                    >
                      <CheckCircle2 size={18} className="shrink-0 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
