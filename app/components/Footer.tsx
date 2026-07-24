"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#4A2F73]
        py-24
        text-center
      "
    >
      {/* Decorative Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8F72BF]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">

        {/* VR */}

        <Image
  src="/Images/logo/vr-logo.png"
  alt="VR"
  width={140}
  height={140}
  className="mx-auto"
/>

        <div className="mx-auto mt-8 h-px w-28 bg-[var(--gold)]/50" />

        <h3 className="mt-10 font-serif text-5xl text-white md:text-6xl">
          Vaibhav
        </h3>

        <p className="my-2 text-4xl text-[var(--gold)]">&</p>

        <h3 className="font-serif text-5xl text-white md:text-6xl">
          Ruchita
        </h3>

        <p className="mt-10 uppercase tracking-[6px] text-[#E6D7A6]">
          24 • 25 January 2027
        </p>

        <p className="mx-auto mt-10 max-w-xl leading-8 text-white/80">
          Together with our families,
          we joyfully invite you to celebrate
          the beginning of our forever.
        </p>

        <div className="mx-auto mt-12 h-px w-28 bg-[var(--gold)]/40" />

        <p className="mt-10 text-sm tracking-[4px] uppercase text-white/60">
          Made with ❤️ for our Family & Friends
        </p>

      </div>
    </footer>
  );
}