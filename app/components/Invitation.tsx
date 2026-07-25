"use client";

import { useState } from "react";
import Image from "next/image";

export default function Invitation({ onEnterWebsite }: { onEnterWebsite?: any }) {
  // Step 1: Gate Open State
  const [gateOpen, setGateOpen] = useState(false);
  // Step 2: Full Invitation Exit State
  const [cardExit, setCardExit] = useState(false);
  // Step 3: Remove Component from DOM State
  const [isRemoved, setIsRemoved] = useState(false);

  // 1. Gate Opening Handler
  const handleGateOpen = (e?: any) => {
    if (e && e.type === "touchstart") {
      e.preventDefault(); // Prevents double firing on mobile
    }
    if (!gateOpen) {
      setGateOpen(true);
    }
  };

  // 2. Final Invitation Close / Enter Website Handler
  const handleFinalOpen = (e?: any) => {
    if (e && e.type === "touchstart") {
      e.preventDefault();
    }
    setCardExit(true);

    setTimeout(() => {
      setIsRemoved(true);
      if (onEnterWebsite) onEnterWebsite();
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 1000); // 1s sync with exit transition
  };

  if (isRemoved) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden bg-[#140A20] perspective-[1200px]
        transition-opacity duration-1000 select-none
        ${cardExit ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Background Lighting & Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54] via-[#140A20] to-[#0A0510] pointer-events-none" />
      <div className="fixed -top-44 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-[180px] pointer-events-none" />
      <div className="fixed bottom-[-250px] left-[-120px] h-[500px] w-[500px] rounded-full bg-[#321C54]/40 blur-[170px] pointer-events-none" />

      {/* Decorative Corner Motifs */}
      <div className="hidden md:block fixed left-8 top-8 text-[72px] text-[#D4AF37]/30 z-10 pointer-events-none font-serif">❦</div>
      <div className="hidden md:block fixed right-8 top-8 rotate-90 text-[72px] text-[#D4AF37]/30 z-10 pointer-events-none font-serif">❦</div>
      <div className="hidden md:block fixed bottom-8 left-8 -rotate-90 text-[72px] text-[#D4AF37]/30 z-10 pointer-events-none font-serif">❦</div>
      <div className="hidden md:block fixed bottom-8 right-8 rotate-180 text-[72px] text-[#D4AF37]/30 z-10 pointer-events-none font-serif">❦</div>

      {/* ================= INVITATION CARD ================= */}
      <div className="relative min-h-full w-full flex items-center justify-center px-3 py-6 md:px-4 md:py-12 z-10">
        <div
          className={`
            relative w-full max-w-sm sm:max-w-md md:max-w-3xl rounded-[24px] md:rounded-[44px]
            border border-[#D4AF37]/40 bg-white/[0.03] backdrop-blur-3xl shadow-[0_35px_120px_rgba(0,0,0,0.7)]
            px-4 sm:px-6 md:px-12 py-6 md:py-12 text-center transition-all duration-1000 my-auto
            ${
              cardExit
                ? "scale-125 opacity-0"
                : gateOpen
                ? "scale-100 opacity-100"
                : "scale-90 opacity-40 blur-sm"
            }
          `}
        >
          {/* Card Corner Motifs */}
          <span className="absolute top-4 left-4 text-[#D4AF37]/40 text-xl md:text-2xl font-serif pointer-events-none">❦</span>
          <span className="absolute top-4 right-4 text-[#D4AF37]/40 text-xl md:text-2xl font-serif rotate-90 pointer-events-none">❦</span>
          <span className="absolute bottom-4 left-4 text-[#D4AF37]/40 text-xl md:text-2xl font-serif -rotate-90 pointer-events-none">❦</span>
          <span className="absolute bottom-4 right-4 text-[#D4AF37]/40 text-xl md:text-2xl font-serif rotate-180 pointer-events-none">❦</span>

          {/* Top Ornament */}
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <div className="h-px w-8 sm:w-12 md:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-[#D4AF37] text-sm md:text-2xl">✦</span>
            <div className="h-px w-8 sm:w-12 md:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>

          {/* Logo */}
          <div className="mt-3 md:mt-5 flex justify-center">
            <Image
              src="/Images/logo/vr-logo.png"
              alt="VR Logo"
              width={190}
              height={190}
              priority
              className="w-[70px] sm:w-[90px] md:w-[170px] h-auto object-contain"
            />
          </div>

          {/* Brand */}
          <p className="mt-2 md:mt-4 text-[8px] sm:text-[9px] md:text-sm uppercase tracking-[0.25em] md:tracking-[0.55em] text-[#F3D98D] font-medium">
            THE RUBHAV STORY
          </p>

          <div className="mx-auto mt-2 md:mt-4 h-px w-12 md:w-24 bg-[#D4AF37]/50" />

          <p className="mt-2 md:mt-8 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-[0.25em] text-[#F3D98D]">
            Together with their Families
          </p>

          {/* Couple Names */}
          <h1 className="mt-3 md:mt-8 font-serif leading-tight text-white tracking-wide font-light">
            <span className="block text-3xl sm:text-4xl md:text-8xl font-serif">Vaibhav</span>
            <span className="my-1 md:my-3 block text-2xl sm:text-3xl md:text-5xl text-[#D4AF37] font-serif">&</span>
            <span className="block text-3xl sm:text-4xl md:text-8xl font-serif">Ruchita</span>
          </h1>

          {/* Invitation Message */}
          <p className="mx-auto mt-3 md:mt-8 max-w-xl px-1 text-[11px] sm:text-[13px] md:text-lg leading-relaxed text-white/85 font-serif italic font-light">
            request the honour of your gracious presence as we celebrate the beginning of our forever, surrounded by love, laughter and cherished memories.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-3 md:mt-8 h-px w-12 md:w-24 bg-[#D4AF37]/40" />

          {/* Wedding Date */}
          <p className="mt-3 md:mt-8 text-[10px] sm:text-[11px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.45em] text-[#F3D98D] font-medium">
            24 • 25 January 2027
          </p>

          {/* Location */}
          <p className="mt-1 md:mt-2 text-xs md:text-lg text-white/80 font-sans font-light">Ajmer, Rajasthan</p>

          {/* OPEN INVITATION BUTTON */}
          <button
            onClick={handleFinalOpen}
            onTouchStart={handleFinalOpen}
            disabled={!gateOpen}
            className="
              group relative mt-5 md:mt-10 w-full overflow-hidden rounded-full
              border border-[#D4AF37] bg-[#D4AF37]
              py-3.5 md:py-5 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.35em] text-[#140A20]
              shadow-[0_10px_35px_rgba(212,175,55,0.35)] transition-all duration-300
              active:scale-95 hover:scale-105 hover:shadow-[0_20px_60px_rgba(212,175,55,0.55)] cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed z-20 touch-manipulation
            "
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full pointer-events-none" />
            <span className="relative pointer-events-none">✦ OPEN INVITATION ✦</span>
          </button>

          {/* Bottom Ornament */}
          <div className="mt-4 md:mt-10 flex items-center justify-center gap-2 md:gap-3">
            <div className="h-px w-8 sm:w-12 md:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="text-[#D4AF37] text-sm md:text-2xl">✦</span>
            <div className="h-px w-8 sm:w-12 md:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>
        </div>
      </div>

      {/* ================= ROYAL GATES OVERLAY ================= */}
      <div className={`fixed inset-0 z-40 flex pointer-events-none`}>
        {/* LEFT GATE */}
        <div
          className={`
            w-1/2 h-full bg-gradient-to-r from-[#0A0510] via-[#140A20] to-[#211135]
            border-r-2 sm:border-r-4 border-[#D4AF37] shadow-[20px_0_50px_rgba(0,0,0,0.9)]
            flex items-center justify-end pr-2 sm:pr-4 md:pr-10
            transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)]
            ${gateOpen ? "-translate-x-full" : "translate-x-0"}
          `}
        >
          <div className="flex flex-col items-center gap-6 opacity-80 pointer-events-none">
            <div className="w-12 sm:w-16 md:w-28 h-48 sm:h-64 md:h-96 border-2 sm:border-4 border-double border-[#D4AF37]/80 rounded-l-full flex items-center justify-center">
              <span className="text-[#D4AF37] text-2xl sm:text-3xl md:text-5xl">🏰</span>
            </div>
          </div>
        </div>

        {/* RIGHT GATE */}
        <div
          className={`
            w-1/2 h-full bg-gradient-to-l from-[#0A0510] via-[#140A20] to-[#211135]
            border-l-2 sm:border-l-4 border-[#D4AF37] shadow-[-20px_0_50px_rgba(0,0,0,0.9)]
            flex items-center justify-start pl-2 sm:pl-4 md:pl-10
            transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)]
            ${gateOpen ? "translate-x-full" : "translate-x-0"}
          `}
        >
          <div className="flex flex-col items-center gap-6 opacity-80 pointer-events-none">
            <div className="w-12 sm:w-16 md:w-28 h-48 sm:h-64 md:h-96 border-2 sm:border-4 border-double border-[#D4AF37]/80 rounded-r-full flex items-center justify-center">
              <span className="text-[#D4AF37] text-2xl sm:text-3xl md:text-5xl">🏰</span>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER ROYAL LOCK BUTTON OVERLAY */}
      {!gateOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-auto">
          <button
            onClick={handleGateOpen}
            onTouchStart={handleGateOpen}
            type="button"
            className="
              group relative flex flex-col items-center justify-center
              w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full
              border-2 sm:border-4 border-[#D4AF37]
              bg-gradient-to-b from-[#321C54] to-[#140A20]
              shadow-[0_0_50px_rgba(212,175,55,0.7)]
              hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer
              touch-manipulation
            "
          >
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] animate-pulse pointer-events-none">👑</span>
            <span className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] text-[#F3D98D] font-bold uppercase pointer-events-none">
              Open Gate
            </span>
            <span className="text-[#D4AF37] text-[10px] sm:text-xs mt-0.5 pointer-events-none">✦</span>
          </button>
        </div>
      )}
    </div>
  );
}