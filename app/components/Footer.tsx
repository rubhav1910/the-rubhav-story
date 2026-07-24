"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4A2F73] py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        {/* Logo */}

        <Image
          src="/Images/logo/vr-logo.png"
          alt="VR Logo"
          width={150}
          height={150}
          priority
          className="mx-auto"
        />

        <div className="mx-auto mt-8 h-px w-24 bg-[#D4AF37]/60" />

        {/* Names */}

        <h2 className="mt-10 font-serif text-5xl md:text-7xl text-white">
          Vaibhav
        </h2>

        <div className="my-3 text-3xl md:text-4xl text-[#D4AF37]">
          &
        </div>

        <h2 className="font-serif text-5xl md:text-7xl text-white">
          Ruchita
        </h2>

        {/* Date */}

        <p className="mt-10 uppercase tracking-[0.45em] text-sm text-[#F2D486]">
          24 • 25 January 2027
        </p>

        {/* Quote */}

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/80">
          Thank you for being a part of our journey.
          Your love, blessings and presence will make our celebration
          truly unforgettable.
        </p>

        {/* Divider */}

        <div className="mx-auto mt-14 h-px w-24 bg-[#D4AF37]/40" />

        {/* Bottom */}

        <p className="mt-10 text-sm tracking-[0.35em] uppercase text-white/60">
          With Love • Vaibhav & Ruchita
        </p>

        <p className="mt-3 text-sm text-[#D4AF37]">
          Made with ❤️ for our Family & Friends
        </p>

      </div>

    </footer>
  );
}