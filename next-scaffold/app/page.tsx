"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServicesGallery from "@/components/ServicesGallery";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-1 flex-col overflow-x-clip bg-white text-slate-900">
      <header
        className={`fixed left-0 right-0 z-50 w-full flex justify-center transition-all duration-300 ease-in-out ${
          isScrolled ? "top-2 px-4" : "top-4 lg:top-8 px-4 lg:px-12"
        }`}
      >
        <nav
          className={`bg-[#f0f2f5]/90 backdrop-blur-md w-full max-w-7xl rounded-full flex items-center justify-between px-6 shadow-sm transition-all duration-300 ${
            isScrolled ? "py-2" : "py-3"
          }`}
        >
          <a href="#hero" className="flex items-center gap-4">
            <div
              className={`relative rounded-full overflow-hidden border-2 border-white/20 shadow-lg transition-all duration-300 ${
                isScrolled
                  ? "w-10 h-10 md:w-12 md:h-12"
                  : "w-12 h-12 md:w-16 md:h-16"
              }`}
            >
              <Image
                src="/images/Screenshot 2026-04-22 232846.png"
                alt="Global Technical logo"
                fill
                className="object-cover"
                quality={100}
                unoptimized
                priority
              />
            </div>
            <span
              className={`font-black uppercase tracking-[0.1em] text-slate-900 transition-all duration-300 ${
                isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              }`}
            >
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
