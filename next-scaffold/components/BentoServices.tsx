"use client";

import { motion } from "framer-motion";

type ServiceCard = {
  title: string;
  items: string[];
  highlight?: boolean;
};

const serviceCards: ServiceCard[] = [
  {
    title: "Electrical & Tech",
    highlight: true,
    items: [
      "Electronic and Electro Mechanic Works",
      "Electrical Cabling and Lighting Works (Street, Landscaping, Warehouse, Office)",
      "CCTV and Network Cabling",
    ],
  },
  {
    title: "Civil & Interior",
    items: [
      "Civil Works",
      "Demolition",
      "Floor and Wall Tiling (Granite, Marble)",
      "Painting Works",
      "Gypsum and False Ceiling Works",
    ],
  },
  {
    title: "Plumbing & HVAC",
    items: [
      "Plumbing Works",
      "High Pressure Air Line Pipe Works",
      "Air Condition Works with Service",
    ],
  },
  {
    title: "Fabrication",
    items: [
      "Aluminum with Glass Works",
      "Wooden Works",
      "Steel Fabrication",
    ],
  },
  {
    title: "Maintenance",
    items: ["Cleaning Works and Waste Skip Services"],
  },
];

export default function BentoServices() {
  return (
    <section id="services" className="px-4 pb-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-wide text-slate-100 sm:text-4xl">
            Services
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            End-to-end execution across technical maintenance, fit-out, utility, and fabrication scopes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {serviceCards.map((card, index) => (
            <motion.article
              key={card.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 26 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
              className={[
                "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm",
                card.highlight ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <h3 className="text-xl font-semibold tracking-wide text-cyan-300">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
                {card.items.map((item) => (
                  <li key={item} className="border-l border-white/15 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
