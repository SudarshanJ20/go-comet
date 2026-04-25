"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Phone, Wrench, X } from "lucide-react";
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
              Contacts
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

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 p-4 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] shadow-2xl md:hidden z-50">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center p-6 bg-white/5 hover:bg-white/10 rounded-3xl border border-white/5 transition-all gap-3 text-white"><Wrench className="w-8 h-8 text-blue-400"/><span className="font-bold">Services</span></a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center p-6 bg-white/5 hover:bg-white/10 rounded-3xl border border-white/5 transition-all gap-3 text-white"><Phone className="w-8 h-8 text-blue-400"/><span className="font-bold">Contact</span></a>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-3xl">Get a Quote</button>
          </div>
        )}
      </header>

      <main className="relative flex-1">
        <Hero />

        <ServicesGallery />

        <ContactFooter />
      </main>
    </div>
  );
}
