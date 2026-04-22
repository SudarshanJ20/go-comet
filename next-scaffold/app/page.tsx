"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ServicesGallery from "@/components/ServicesGallery";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col overflow-x-clip bg-white text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-5 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300">
          <a href="#hero" className="flex items-center gap-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
              <Image
                src="/images/Screenshot 2026-04-22 232846.png"
                alt="Global Technical logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-wide">
              GLOBAL TECHNICAL
            </span>
          </a>

          <div className="flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-700 sm:text-base">
            <a
              className="relative transition-colors duration-200 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              href="#services"
            >
              Services
            </a>
            <a
              className="relative transition-colors duration-200 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              href="#contact"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40 hover:scale-105"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </header>

      <main className="relative flex-1">
        <Hero />

        <ServicesGallery />

        <ContactFooter />
      </main>
    </div>
  );
}
