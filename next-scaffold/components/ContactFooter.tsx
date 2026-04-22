import { Globe, Mail, MapPin, Phone } from "lucide-react";

export default function ContactFooter() {
  return (
    <section id="contact" className="px-4 pb-10 pt-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-slate-100 sm:text-4xl">Contact Us</h2>
            <p className="mt-3 text-slate-300">
              Share your requirement and our team will get back to you with a tailored plan.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/70"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/70"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
                  Service
                </label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  placeholder="Service you are looking for"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/70"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/70"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-linear-to-r from-cyan-400 to-blue-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(56,189,248,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(56,189,248,0.62)]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 text-base font-semibold text-cyan-300">
                <MapPin size={18} /> Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Office No. 44 Tower - 3, Mazyad Mall, Abu Dhabi, U.A.E
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 text-base font-semibold text-cyan-300">
                <Phone size={18} /> Phones
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                +971 52 717 2631 | +971 52 979 1619 | +971 50 945 2825
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 text-base font-semibold text-cyan-300">
                <Mail size={18} /> Emails
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200 wrap-break-word">
                info@globaltechnicalgmt.com | globaltechmagm@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <p className="flex items-center gap-2 text-base font-semibold text-cyan-300">
                <Globe size={18} /> Website
              </p>
              <a
                href="https://www.google.com/search?q=www.globaltechnicalgmt.com"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm leading-relaxed text-slate-200 underline decoration-cyan-400/60 underline-offset-4 hover:text-cyan-300"
              >
                https://www.google.com/search?q=www.globaltechnicalgmt.com
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-8 border-t border-white/10 pt-5 text-center text-xs tracking-wide text-slate-400 sm:text-sm">
          © 2026 Global Technical General Maintenance & Trading. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
