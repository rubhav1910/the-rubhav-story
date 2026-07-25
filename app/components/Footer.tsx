"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#140A20] py-24 text-white border-t border-[#D4AF37]/20">

      {/* Royal Velvet Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54] via-[#140A20] to-[#0A0510]" />
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-[170px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <FadeUp delay={0.2}>
          {/* Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            <Image
              src="/Images/logo/vr-logo.png"
              alt="VR Logo"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              priority
              className="object-contain"
            />
          </div>

          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-[#D4AF37] text-xs">◆</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>

          {/* Names */}
          <h2 className="mt-8 font-serif text-4xl md:text-6xl text-white tracking-wide font-light">
            Vaibhav
          </h2>

          <div className="my-2 font-serif text-2xl md:text-3xl text-[#D4AF37] italic">
            &
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-wide font-light">
            Ruchita
          </h2>

          {/* Date */}
          <p className="mt-8 uppercase tracking-[0.45em] text-xs md:text-sm text-[#F3D98D] font-medium">
            24 • 25 January 2027
          </p>

          {/* Quote */}
          <p className="mx-auto mt-8 max-w-2xl font-serif text-base md:text-lg leading-relaxed text-white/80 italic font-light">
            Thank you for being a part of our journey.
            <br className="hidden md:block" />
            Your love, blessings and presence will make our celebration
            truly unforgettable.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <span className="text-[#D4AF37] text-xs">✦ ❦ ✦</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>

          {/* Bottom Branding */}
          <p className="mt-8 text-xs md:text-sm tracking-[0.35em] uppercase text-white/60 font-sans">
            With Love • Vaibhav & Ruchita
          </p>

          <p className="mt-3 text-xs md:text-sm text-[#F3D98D] font-sans">
            Made with ❤️ for our Family & Friends
          </p>
        </FadeUp>

      </div>

    </footer>
  );
}