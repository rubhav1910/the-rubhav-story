"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#140A20] py-24 text-white border-t border-[#D4AF37]/30">

      {/* Royal Velvet Radial Glow with slow shifting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54] via-[#140A20] to-[#0A0510]" />
      
      {/* Background soft moving aura */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-[170px] pointer-events-none animate-pulse duration-[5000ms]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* Logo with Gentle Floating Animation */}
        <FadeUp delay={0.1}>
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-xl animate-pulse" />
            <Image
              src="/Images/logo/vr-logo.png"
              alt="VR Logo"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              priority
              className="object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-[bounce_4s_ease-in-out_infinite]"
            />
          </div>
        </FadeUp>

        {/* Top Diamond Divider */}
        <FadeUp delay={0.2}>
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-[#D4AF37] text-xs animate-spin duration-[12000ms] inline-block">◆</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>
        </FadeUp>

        {/* Names with Luxury Glow */}
        <FadeUp delay={0.3}>
          <h2 className="mt-8 font-serif text-4xl md:text-6xl text-white tracking-wide font-light transition-all duration-500 hover:text-[#F3D98D] cursor-default">
            Ruchita
          </h2>

          <div className="my-2 font-serif text-2xl md:text-3xl text-[#D4AF37] italic scale-110">
            &
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-wide font-light transition-all duration-500 hover:text-[#F3D98D] cursor-default">
            Vaibhav
          </h2>

          <p className="mt-8 uppercase tracking-[0.45em] text-xs md:text-sm text-[#F3D98D] font-medium drop-shadow-[0_2px_10px_rgba(243,217,141,0.2)]">
            24 • 25 January 2027
          </p>
        </FadeUp>

        {/* Quote */}
        <FadeUp delay={0.4}>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-base md:text-lg leading-relaxed text-white/80 italic font-light">
            Thank you for being a part of our journey.
            <br className="hidden md:block" />
            Your love, blessings and presence will make our celebration
            truly unforgettable.
          </p>
        </FadeUp>

        {/* Bottom Divider & Elements */}
        <FadeUp delay={0.5}>
          <div className="mx-auto mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <span className="text-[#D4AF37] text-xs tracking-widest animate-pulse duration-1000">✦ ❦ ✦</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>

          <p className="mt-8 text-xs md:text-sm tracking-[0.35em] uppercase text-white/60 font-sans">
            With Love • Ruchita & Vaibhav
          </p>

          <div className="mt-3 inline-block group">
            <p className="text-xs md:text-sm text-[#F3D98D] font-sans transition-transform duration-300 group-hover:scale-105 cursor-pointer">
              Made with ❤️ for our Family & Friends
            </p>
            <div className="h-px w-0 bg-[#D4AF37] mx-auto transition-all duration-500 group-hover:w-full mt-1" />
          </div>
        </FadeUp>

      </div>

    </footer>
  );
}