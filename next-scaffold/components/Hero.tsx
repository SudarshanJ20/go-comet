"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* ─── Top Hero ─── */}
      <section
        id="hero"
        className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-visible pb-16"
      >
        {/* Background Image */}
        <Image
          fill
          src="/skyline.png"
          alt="City skyline"
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
          priority
          style={{ zIndex: 0 }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-[4.5rem]" style={{ zIndex: 2 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="block text-blue-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 drop-shadow-md"
          >
            Global Technical General Maintenance &amp; Trading
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-4"
          >
            Your Vision. Our Expertise.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-blue-200 mb-8 max-w-2xl font-light"
          >
            Delivering excellence in electronic, civil, and mechanical general
            maintenance across the UAE.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] inline-flex items-center gap-2 text-sm md:text-base"
          >
            Get a Quote
            <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* ─── Floating Stats Bridge ─── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="absolute -bottom-24 lg:-bottom-12 left-0 right-0 max-w-6xl mx-auto px-6"
          style={{ zIndex: 20 }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 gap-x-3 md:gap-x-4 divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] mb-1">24/7</span>
              <span className="text-xs md:text-sm text-slate-800 font-semibold uppercase tracking-wide">Active Support</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] mb-1">100+</span>
              <span className="text-xs md:text-sm text-slate-800 font-semibold uppercase tracking-wide">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] mb-1">Industrial</span>
              <span className="text-xs md:text-sm text-slate-800 font-semibold uppercase tracking-wide">&amp; Residential</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] mb-1">UAE</span>
              <span className="text-xs md:text-sm text-slate-800 font-semibold uppercase tracking-wide">Wide Coverage</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── White Info Band ─── */}
      <section className="w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Global reach, local impact.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6"
          >
            We are a leading technical and maintenance firm dedicated to building
            long-lasting infrastructure. With 24/7 availability, we help you
            anticipate tomorrow&apos;s challenges with solid engineering today.
          </motion.p>
        </div>
      </section>

      {/* ─── 50/50 Split ─── */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="relative w-full h-[400px] lg:h-full overflow-hidden">
          <Image
            fill
            src="/worker.png"
            alt="Field worker"
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={100}
          />
        </div>

        <div className="bg-slate-900 p-6 md:p-12 lg:p-24 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-slate-300 text-base md:text-lg leading-relaxed mb-8"
          >
            From high-pressure pipelines to comprehensive civil works, our
            certified teams ensure every project meets the highest industrial
            standards. Partner with us for reliable, uninterrupted operational
            success.
          </motion.p>

          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="w-fit border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Learn More
          </motion.a>
        </div>
      </section>
    </>
  );
}