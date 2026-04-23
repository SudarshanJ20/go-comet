"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

const linkClasses =
  "text-slate-400 text-sm md:text-base leading-relaxed transition-colors hover:text-blue-400 hover:underline underline-offset-4";

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
        {/* Decorative glows */}
        <div className="pointer-events-none absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="mb-10 md:mb-16 text-center"
          >
            <span className="inline-block rounded-full bg-blue-900/50 border border-blue-700/30 px-5 py-2 text-sm font-semibold text-blue-400 tracking-wide uppercase mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed">
              Share your requirement and our team will get back to you with a
              tailored plan.
            </p>
          </motion.div>

          {/* Contact Cards — Full-width 4-column grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Visit Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-5 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-600/20 mb-4">
                <MapPin size={24} />
              </span>
              <p className="text-lg md:text-xl font-bold text-white mb-3">Visit Us</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mazyad+Mall+Abu+Dhabi"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                Office No. 44 Tower - 3, Mazyad Mall, Abu Dhabi, U.A.E
              </a>
            </motion.div>

            {/* Call Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-5 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-600/20 mb-4">
                <Phone size={24} />
              </span>
              <p className="text-lg md:text-xl font-bold text-white mb-3">Call Us</p>
              <div className="flex flex-col items-center gap-1.5">
                <a href="tel:+971527172631" className={linkClasses}>+971 52 717 2631</a>
                <a href="tel:+971529791619" className={linkClasses}>+971 52 979 1619</a>
                <a href="tel:+971509452825" className={linkClasses}>+971 50 945 2825</a>
              </div>
            </motion.div>

            {/* Email Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-5 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-700/20 mb-4">
                <Mail size={24} />
              </span>
              <p className="text-lg md:text-xl font-bold text-white mb-3">Email Us</p>
              <div className="flex flex-col items-center gap-1.5">
                <a href="https://mail.google.com/mail/?view=cm&to=info@globaltechnicalgmt.com" target="_blank" rel="noopener noreferrer" className={`${linkClasses} break-all`}>info@globaltechnicalgmt.com</a>
                <a href="https://mail.google.com/mail/?view=cm&to=globaltechmagm@gmail.com" target="_blank" rel="noopener noreferrer" className={`${linkClasses} break-all`}>globaltechmagm@gmail.com</a>
              </div>
            </motion.div>

            {/* Website */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-5 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-600/20 mb-4">
                <Globe size={24} />
              </span>
              <p className="text-lg md:text-xl font-bold text-white mb-3">Website</p>
              <a
                href="https://www.google.com/search?q=www.globaltechnicalgmt.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                www.globaltechnicalgmt.com
              </a>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 border-t border-white/10 pt-8 text-center text-sm tracking-wide text-slate-500"
          >
            © 2026 Global Technical General Maintenance & Trading. All rights
            reserved.
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
