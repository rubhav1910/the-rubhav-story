"use client";

import { useState } from "react";
import Image from "next/image";

// Pre-define sparkle animation keyframes for Tailwind config (optional but clean)
// If you don't add this to tailwind.config.ts, the code below will just blink simpler.

export default function Invitation({ onEnterWebsite }: { onEnterWebsite?: any }) {
  const [gateOpen, setGateOpen] = useState(false);
  const [cardExit, setCardExit] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleGateOpen = (e?: any) => {
    if (e && e.type === "touchstart") {
      e.preventDefault();
    }
    if (!gateOpen) {
      setGateOpen(true);
    }
  };

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
    }, 1000);
  };

  if (isRemoved) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden bg-[#120A1F] perspective-[1200px]
        transition-opacity duration-1000 select-none
        ${cardExit ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Background Lighting & Atmosphere Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3A225C] via-[#1E1332] to-[#120A1F] pointer-events-none" />
      
      {/* Breathing Ambient Glow behind the card using standard Tailwind pulses */}
      <div className="fixed top-0 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[180px] pointer-events-none animate-pulse-slow" />

      {/* Floating Magic Lights & Sparkles (Using Tailwind's animate-ping/animate-pulse) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-[20%] text-[#FFE89C] text-xs animate-pulse">✦</div>
        <div className="absolute top-[25%] right-[22%] text-[#D4AF37] text-sm animate-ping">✨</div>
        <div className="absolute top-[65%] left-[15%] text-[#E9C46A] text-base animate-pulse">✦</div>
        <div className="absolute top-[75%] right-[18%] text-[#FFE89C] text-xs animate-ping">✨</div>
        <div className="absolute top-[45%] left-[10%] text-[#D4AF37] text-xs animate-pulse">✦</div>
        <div className="absolute top-[50%] right-[12%] text-[#E9C46A] text-sm animate-ping">✦</div>
      </div>

      {/* ================= INVITATION CARD ================= */}
      <div className="relative min-h-full w-full flex items-center justify-center px-3 py-6 md:px-4 md:py-10 z-10">
        <div
          className={`
            relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-[40px] md:rounded-[50px]
            bg-[#1A0F2E]/95 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.95)]
            px-6 sm:px-8 md:px-12 py-10 md:py-14 text-center transition-all duration-1000 my-auto
            border-[2px] border-[#D4AF37] ring-1 ring-[#D4AF37]/40 ring-offset-8 ring-offset-[#120A1F]
            overflow-hidden
            ${
              cardExit
                ? "scale-125 opacity-0"
                : gateOpen
                ? "scale-100 opacity-100"
                : "scale-90 opacity-40 blur-sm"
            }
          `}
        >
          {/* ================= TOP HANGING FLOWERS ================= */}
          <div className="absolute top-0 left-0 w-full pointer-events-none mix-blend-screen opacity-95 z-0">
            <img 
              src="/Images/flowers.png" 
              alt="Hanging Flowers" 
              className="w-full h-auto object-cover object-top drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Top Arch Glow Shadow */}
          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#120A1F]/70 via-[#120A1F]/30 to-transparent pointer-events-none rounded-t-[40px] z-[5]" />

          {/* Left Hanging Lantern */}
          <div className="absolute top-8 left-4 md:left-6 flex flex-col items-center pointer-events-none z-10 animate-pulse">
            <div className="w-[2px] h-14 md:h-20 bg-gradient-to-b from-[#D4AF37] to-[#8c7322]" />
            <div className="w-6 h-8 md:w-8 md:h-11 rounded-t-full bg-gradient-to-b from-[#D4AF37] via-[#E9C46A] to-[#B38F27] p-0.5 shadow-[0_0_30px_rgba(255,215,0,0.8)] flex items-center justify-center">
              <div className="w-full h-full rounded-t-full bg-[#FFF5A5] opacity-95 blur-[1px]" />
            </div>
            <div className="w-4 h-1.5 bg-[#8c7322] rounded-b-sm" />
          </div>

          {/* Right Hanging Lantern */}
          <div className="absolute top-8 right-4 md:right-6 flex flex-col items-center pointer-events-none z-10 animate-pulse">
            <div className="w-[2px] h-14 md:h-20 bg-gradient-to-b from-[#D4AF37] to-[#8c7322]" />
            <div className="w-6 h-8 md:w-8 md:h-11 rounded-t-full bg-gradient-to-b from-[#D4AF37] via-[#E9C46A] to-[#B38F27] p-0.5 shadow-[0_0_30px_rgba(255,215,0,0.8)] flex items-center justify-center">
              <div className="w-full h-full rounded-t-full bg-[#FFF5A5] opacity-95 blur-[1px]" />
            </div>
            <div className="w-4 h-1.5 bg-[#8c7322] rounded-b-sm" />
          </div>

          {/* ================= CARD CONTENT ================= */}

          {/* Top Arch Motif */}
          <div className="relative z-10 text-[#D4AF37] text-lg md:text-xl mb-1 tracking-widest pt-4 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
            ❖ 🏛️ ❖
          </div>

          {/* Logo */}
          <div className="relative z-10 mt-6 md:mt-8 flex justify-center">
            <Image
              src="/Images/logo/vr-logo.png"
              alt="VR Logo"
              width={150}
              height={150}
              priority
              className="w-[60px] sm:w-[75px] md:w-[95px] h-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.7)]"
            />
          </div>

          {/* Brand */}
          <p className="relative z-10 mt-2 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.35em] md:tracking-[0.45em] text-[#E9C46A] font-medium drop-shadow-md">
            THE RUBHAV STORY
          </p>

          <div className="relative z-10 mx-auto mt-2 h-[1px] w-14 md:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="relative z-10 mt-4 md:mt-5 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#E9C46A] drop-shadow-md">
            TOGETHER WITH THEIR FAMILIES
          </p>

          {/* Couple Names */}
          <h1 className="relative z-10 mt-6 md:mt-8 font-serif leading-tight text-[#F8F4ED] tracking-wide font-light">
            <span className="block text-4xl sm:text-5xl md:text-6xl font-serif drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Ruchita</span>
            <span className="my-2 block text-xl sm:text-2xl md:text-3xl text-[#D4AF37] font-serif drop-shadow-[0_2px_8px_rgba(212,175,55,0.5)]">&</span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-serif drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Vaibhav</span>
          </h1>

          {/* Invitation Message */}
          <p className="relative z-10 mx-auto mt-5 md:mt-6 max-w-sm px-4 text-[11px] sm:text-[13px] md:text-sm leading-relaxed text-[#F8F4ED] font-serif italic font-light drop-shadow-md">
            request the honour of your gracious presence as we celebrate the beginning of our forever, surrounded by love, laughter and cherished memories.
          </p>

          {/* Divider Line */}
          <div className="relative z-10 mx-auto mt-5 md:mt-6 h-[1px] w-14 md:w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Wedding Date */}
          <p className="relative z-10 mt-5 md:mt-6 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#E9C46A] font-semibold drop-shadow-md">
            25 JANUARY 2027
          </p>

          {/* Location */}
          <p className="relative z-10 mt-1 text-xs md:text-sm text-[#F8F4ED]/90 font-sans font-light drop-shadow-md">
            Ajmer, Rajasthan
          </p>

          {/* TAP TO BEGIN BUTTON */}
          <div className="relative z-20">
            <button
              onClick={handleFinalOpen}
              onTouchStart={handleFinalOpen}
              disabled={!gateOpen}
              className="
                group relative mt-8 md:mt-10 w-full overflow-hidden rounded-full
                bg-gradient-to-r from-[#D4AF37] via-[#E9C46A] to-[#D4AF37]
                py-3.5 md:py-4 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#120A1F]
                shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-all duration-300
                active:scale-95 hover:scale-[1.02] hover:shadow-[0_12px_45px_rgba(212,175,55,0.7)] cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full pointer-events-none" />
              <span className="relative pointer-events-none">✦ TAP TO BEGIN ✦</span>
            </button>
          </div>

          {/* Bottom Accent */}
          <div className="relative z-10 mt-6 text-[#D4AF37]/90 text-xs tracking-[0.3em] font-serif drop-shadow-md">
            🏰 ✧ 🏰
          </div>
        </div>
      </div>

      {/* ================= ROYAL GATES OVERLAY ================= */}
      <div className={`fixed inset-0 z-40 flex pointer-events-none`}>
        <div
          className={`
            w-1/2 h-full bg-gradient-to-r from-[#120A1F] via-[#1E1332] to-[#3A225C]
            border-r-2 sm:border-r-4 border-[#D4AF37] shadow-[20px_0_50px_rgba(0,0,0,0.9)]
            flex items-center justify-end pr-2 sm:pr-4 md:pr-10
            transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)]
            ${gateOpen ? "-translate-x-full" : "translate-x-0"}
          `}
        />
        <div
          className={`
            w-1/2 h-full bg-gradient-to-l from-[#120A1F] via-[#1E1332] to-[#3A225C]
            border-l-2 sm:border-l-4 border-[#D4AF37] shadow-[-20px_0_50px_rgba(0,0,0,0.9)]
            flex items-center justify-start pl-2 sm:pl-4 md:pl-10
            transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)]
            ${gateOpen ? "translate-x-full" : "translate-x-0"}
          `}
        />
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
              bg-gradient-to-b from-[#3A225C] to-[#1E1332]
              shadow-[0_0_70px_rgba(212,175,55,0.7)]
              hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer
              touch-manipulation
            "
          >
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] pointer-events-none">👑</span>
            <span className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] text-[#E9C46A] font-bold uppercase pointer-events-none">
              Open Gate
            </span>
            <span className="text-[#D4AF37] text-[10px] sm:text-xs mt-0.5 pointer-events-none">✦</span>
          </button>
        </div>
      )}
    </div>
  );
}