"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Hero from "@/components/Hero";
import ServicesGallery from "@/components/ServicesGallery";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses =
    "relative transition-colors duration-200 hover:text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="relative flex min-h-screen flex-1 flex-col overflow-x-clip bg-white text-slate-900">
      <header
        className={`fixed left-0 right-0 z-50 w-full flex flex-col items-center transition-all duration-300 ease-in-out ${
          isScrolled ? "top-2 px-4" : "top-4 lg:top-8 px-4 lg:px-12"
        }`}
      >
        <nav
          className={`bg-[#f0f2f5]/90 backdrop-blur-md w-full max-w-7xl rounded-full flex items-center justify-between px-6 shadow-sm transition-all duration-300 ${
            isScrolled ? "py-2" : "py-3"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 md:gap-4">
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
                isScrolled ? "text-base md:text-xl" : "text-lg md:text-2xl"
              }`}
            >
              GLOBAL TECHNICAL
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-700 sm:text-base">
            <a className={navLinkClasses} href="#services">
              Services
            </a>
            <a className={navLinkClasses} href="#contact">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-slate-800 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown Drawer */}
        <div
          className={`md:hidden w-full max-w-7xl mt-2 rounded-2xl bg-white/95 backdrop-blur-lg shadow-xl border border-slate-200/50 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-80 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-1 p-5">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="relative flex-1">
        <Hero />

        <ServicesGallery />

        <ContactFooter />
      </main>
    </div>
  );
}
