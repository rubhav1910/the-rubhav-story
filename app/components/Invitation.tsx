"use client";

import { useState } from "react";
import Image from "next/image";

export default function Invitation() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const handleOpen = () => {
  setHide(true);

  setTimeout(() => {
    setOpen(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }, 50);

  }, 700);
};

  if (open) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[radial-gradient(circle_at_top,#F5EEFC_0%,#EEE2FA_45%,#E6D5F8_100%)] transition-opacity duration-700 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative Glow */}
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      {/* Card */}
      <div
        className={`
          relative
          w-[90%]
          max-w-md
          overflow-hidden
          rounded-[36px]
          border
          border-[#E8DDC8]
          bg-white/80
          backdrop-blur-xl
          px-8
          py-12
          text-center
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          transition-all
          duration-700
          ${hide ? "scale-95 opacity-0" : "scale-100 opacity-100"}
        `}
      >
        {/* Top Ornament */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[var(--gold)] opacity-50" />
          <span className="text-[var(--gold)] text-lg">✦</span>
          <div className="h-px w-12 bg-[var(--gold)] opacity-50" />
        </div>

        {/* Monogram */}
        <div className="mb-8 flex justify-center">
  <Image
    src="/Images/logo/vr-logo.png"
    alt="VR Monogram"
    width={130}
    height={130}
    className="object-contain"
    priority
  />
</div>

        {/* Title */}
        <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--royal)]">
          The Rubhav Story
        </p>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-20 bg-[var(--gold)] opacity-50" />

        {/* Family */}
        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
          Together with their Families
        </p>

        {/* Names */}
        <h1 className="mt-6 font-serif text-[42px] leading-none text-[var(--royal)]">
          Vaibhav
          <br />
          <span className="text-[var(--gold)]">&</span>
          <br />
          Ruchita
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-[270px] text-[15px] leading-8 text-gray-600">
          request the pleasure of your gracious presence
          as we celebrate the beginning of our forever.
        </p>

        {/* Date */}
        <p className="mt-10 uppercase tracking-[0.35em] text-sm text-[var(--gold)]">
          24 • 25 January 2027
        </p>

        <p className="mt-2 text-sm text-[var(--royal)]">
          Ajmer, Rajasthan
        </p>

        {/* Button */}
        <button
          onClick={handleOpen}
          className="
            group
            mt-10
            w-full
            rounded-full
            border
            border-[#D4AF37]
            bg-gradient-to-r
            from-[#E7C87B]
            via-[#D4AF37]
            to-[#B9912F]
            py-4
            text-sm
            uppercase
            tracking-[0.28em]
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
          "
        >
          Open Invitation
        </button>

        {/* Bottom Ornament */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[var(--gold)] opacity-50" />
          <span className="text-[var(--gold)] text-lg">✦</span>
          <div className="h-px w-12 bg-[var(--gold)] opacity-50" />
        </div>
      </div>
    </div>
  );
}