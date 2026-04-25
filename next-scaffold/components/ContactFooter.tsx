"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactFooter() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      {/* Top wave separator */}
      <div className="w-full bg-slate-50">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
          <path
            d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 36C1248 32 1344 32 1392 32L1440 32V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#0f172a"
          />
        </svg>
      </div>

      <div className="bg-slate-900 pb-12 pt-8 lg:pt-16">
        <div className="relative mx-auto max-w-7xl">
          {/* Master Grid: 5-7 column layout */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-16 pb-12 px-6 lg:px-12">
            {/* Left Column: Brand & Heading */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/Screenshot 2026-04-22 232846.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                Let&apos;s Build <span className="text-blue-500">Together</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md">
                Share your requirements and our team will get back to you with a tailored maintenance plan.
              </p>
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-12 lg:border-l border-slate-800">
              {/* Headquarters */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-blue-500 w-5 h-5" />
                  <h3 className="text-white font-bold uppercase tracking-wider text-sm">Headquarters</h3>
                </div>
                <p className="text-slate-400 leading-relaxed hover:text-blue-400 transition-colors cursor-pointer">
                  Office No. 44 Tower - 3,<br />
                  Mazyad Mall, Abu Dhabi, U.A.E
                </p>
              </div>

              {/* Direct Contact - Phones & Emails */}
              <div className="flex flex-col gap-8">
                {/* Call Us */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="text-blue-500 w-5 h-5" />
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm">Call Us</h3>
                  </div>
                  <div className="flex flex-col gap-2 text-slate-400">
                    <a href="tel:+971527172631" className="hover:text-blue-400 transition-colors">+971 52 717 2631</a>
                    <a href="tel:+971529791619" className="hover:text-blue-400 transition-colors">+971 52 979 1619</a>
                    <a href="tel:+971509452825" className="hover:text-blue-400 transition-colors">+971 50 945 2825</a>
                  </div>
                </div>

                {/* Email Us */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="text-blue-500 w-5 h-5" />
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm">Email Us</h3>
                  </div>
                  <div className="flex flex-col gap-2 text-slate-400">
                    <a href="mailto:info@globaltechnicalgmt.com" className="hover:text-blue-400 transition-colors">info@globaltechnicalgmt.com</a>
                    <a href="mailto:globaltechmagm@gmail.com" className="hover:text-blue-400 transition-colors">globaltechmagm@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <div className="w-full h-px bg-slate-800 max-w-7xl mx-auto"></div>

            <div className="w-full max-w-7xl mx-auto py-8 text-center">
              <p className="text-slate-400 text-sm">
                Â© {new Date().getFullYear()} Global Technical General Maintenance &amp; Trading. All rights reserved.
              </p>
            </div>
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
