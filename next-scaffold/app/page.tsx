"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServicesSlider from "@/components/ServicesSlider";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col overflow-x-clip bg-slate-900 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-144 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_60%)]"
      />

      <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6">
          <a href="#hero" className="flex items-center gap-3">
            <Image
              src="/WhatsApp Image 2026-04-08 at 9.59.24 PM.jpeg"
              alt="Global Technical logo"
              width={160}
              height={56}
              className="h-10 w-auto rounded-md object-cover"
              priority
            />
          </a>

          <div className="flex items-center gap-6 text-sm font-semibold tracking-wide text-slate-100 sm:text-base">
            <a className="transition hover:text-cyan-300" href="#services">
              Services
            </a>
            <a className="transition hover:text-cyan-300" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex-1">
        <section
          id="hero"
          className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-24 pt-24 text-center sm:px-6 lg:px-10"
        >
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto max-w-6xl bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-4xl font-bold uppercase leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            >
              GLOBAL TECHNICAL GENERAL MAINTENANCE &amp; TRADING
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="mx-auto mt-7 max-w-4xl text-xs font-semibold tracking-[0.36em] text-slate-300 sm:text-sm"
            >
              YOUR VISION OUR EXPERTISE DELIVERING EXCELLENCE
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="mt-12"
            >
              <a
                href="#services"
                className="inline-flex rounded-full bg-linear-to-r from-cyan-400 to-blue-600 px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(56,189,248,0.55),0_0_52px_rgba(37,99,235,0.38)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.68),0_0_58px_rgba(37,99,235,0.48)] sm:text-base"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </section>

        <ServicesSlider />

        <ContactFooter />
      </main>
    </div>
  );
}
