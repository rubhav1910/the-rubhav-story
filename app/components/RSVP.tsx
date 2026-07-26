"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "Will Attend ✅",
    guests: "1",
  });

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "917014164334";

    const message = `Hello Vaibhav & Ruchita ❤️

We would love to attend your wedding celebration!

📌 *RSVP Details:*
• *Name:* ${formData.name}
• *Attendance:* ${formData.attending}
• *Number of Guests:* ${formData.guests}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <FadeUp delay={0.35}>
      <section
        id="rsvp"
        className="relative overflow-hidden py-24 bg-[#140A20] text-white"
      >
        {/* Royal Velvet Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54] via-[#140A20] to-[#0A0510]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/15 blur-[170px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6">

          {/* Container Scroll Box */}
          <div className="relative rounded-[40px] border border-[#D4AF37]/40 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-14 shadow-[0_35px_120px_rgba(0,0,0,0.7)]">

            {/* Corner Motifs */}
            <span className="absolute top-5 left-5 text-[#D4AF37]/50 text-2xl font-serif">❦</span>
            <span className="absolute top-5 right-5 text-[#D4AF37]/50 text-2xl font-serif rotate-90">❦</span>
            <span className="absolute bottom-5 left-5 text-[#D4AF37]/50 text-2xl font-serif -rotate-90">❦</span>
            <span className="absolute bottom-5 right-5 text-[#D4AF37]/50 text-2xl font-serif rotate-180">❦</span>

            <div className="text-center">

              <span className="text-[#D4AF37] text-xl tracking-[0.4em]">✦ ❦ ✦</span>

              <p className="mt-3 uppercase tracking-[0.5em] text-xs md:text-sm text-[#F3D98D] font-medium">
                RSVP
              </p>

              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-white tracking-wide font-light leading-tight">
                We'd Be Honoured
                <br />
                To Celebrate With You
              </h2>

              <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
                <span className="text-[#D4AF37] text-xs">◆</span>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
              </div>

              <p className="mx-auto mt-6 max-w-xl font-serif text-sm md:text-lg italic leading-relaxed text-white/80 font-light">
                Your presence will make our wedding celebration even more
                memorable. Kindly let us know if you'll be joining us.
              </p>

              {/* Form */}
              <form onSubmit={handleWhatsAppSend} className="mt-10 text-left space-y-6 max-w-lg mx-auto">
                
                {/* Name */}
                <div>
                  <label className="block font-serif text-sm text-[#F3D98D] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-white/[0.05] border border-[#D4AF37]/30 px-4 py-3 font-sans text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-serif text-sm text-[#F3D98D] mb-2">
                      Will you attend?
                    </label>
                    <select
                      value={formData.attending}
                      onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                      className="w-full rounded-xl bg-[#140A20] border border-[#D4AF37]/30 px-4 py-3 font-sans text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option value="Will Attend ✅">Will Attend ✅</option>
                      <option value="Unable to Attend ❌">Unable to Attend ❌</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-serif text-sm text-[#F3D98D] mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full rounded-xl bg-[#140A20] border border-[#D4AF37]/30 px-4 py-3 font-sans text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4+">4+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="
                      w-full
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#D4AF37]
                      px-8
                      py-4
                      font-sans
                      text-xs sm:text-sm
                      uppercase
                      tracking-widest
                      font-semibold
                      text-[#140A20]
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]
                    "
                  >
                    <span>💬</span> RSVP on WhatsApp
                  </button>
                </div>

              </form>

              {/* Couple Info */}
              <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
                <p className="font-serif text-2xl text-white font-light tracking-wide">
                  Ruchita & Vaibhav
                </p>
                <p className="mt-2 tracking-[0.3em] uppercase text-[#F3D98D] text-xs sm:text-sm font-medium">
                  +91 70141 64334
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}