"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Office No. 44 Tower - 3, Mazyad Mall, Abu Dhabi, U.A.E",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+971 52 717 2631\n+971 52 979 1619\n+971 50 945 2825",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@globaltechnicalgmt.com\nglobaltechmagm@gmail.com",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Globe,
    title: "Website",
    content: "www.globaltechnicalgmt.com",
    href: "https://www.google.com/search?q=www.globaltechnicalgmt.com",
    color: "from-indigo-500 to-purple-500",
  },
];

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
            className="mb-16 text-center"
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
            <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
              Share your requirement and our team will get back to you with a
              tailored plan.
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form — 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2.5 block text-sm font-semibold text-slate-300 tracking-wide"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3.5 text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-slate-800"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2.5 block text-sm font-semibold text-slate-300 tracking-wide"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3.5 text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2.5 block text-sm font-semibold text-slate-300 tracking-wide"
                    >
                      Service Required
                    </label>
                    <input
                      id="service"
                      name="service"
                      type="text"
                      placeholder="e.g. Electrical maintenance, Civil works..."
                      className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3.5 text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2.5 block text-sm font-semibold text-slate-300 tracking-wide"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3.5 text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-slate-800 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold tracking-wide text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Cards — 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="lg:col-span-2 space-y-5"
            >
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut" as const,
                    delay: i * 0.1,
                  }}
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/30 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex shrink-0 items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg`}
                    >
                      <card.icon size={20} />
                    </span>
                    <div>
                      <p className="text-base font-bold text-white mb-1.5">
                        {card.title}
                      </p>
                      {card.href ? (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm leading-relaxed text-slate-400 underline decoration-blue-500/40 underline-offset-4 transition-colors hover:text-blue-400"
                        >
                          {card.content}
                        </a>
                      ) : (
                        <p className="text-sm leading-relaxed text-slate-400 whitespace-pre-line">
                          {card.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
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
