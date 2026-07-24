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

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

    }, 900);
  };

  if (open) return null;

  return (
    <div
      className={`
        fixed
        inset-0
        z-[999]
        overflow-hidden
        transition-all
        duration-1000
        ${hide ? "opacity-0 scale-105" : "opacity-100 scale-100"}
      `}
    >

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#241437] via-[#5A3A84] to-[#9270BD]" />

      {/* Luxury Glow */}

      <div className="absolute -top-44 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[180px]" />

      <div className="absolute bottom-[-250px] left-[-120px] h-[500px] w-[500px] rounded-full bg-[#8B6DB7]/20 blur-[170px]" />

      <div className="absolute top-[150px] right-[-140px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      {/* Decorative Corners */}

      <div className="hidden md:block absolute left-8 top-8 text-[72px] text-[#D4AF37]/20">
        ❦
      </div>

      <div className="hidden md:block absolute right-8 top-8 rotate-90 text-[72px] text-[#D4AF37]/20">
        ❦
      </div>

      <div className="hidden md:block absolute bottom-8 left-8 -rotate-90 text-[72px] text-[#D4AF37]/20">
        ❦
      </div>

      <div className="hidden md:block absolute bottom-8 right-8 rotate-180 text-[72px] text-[#D4AF37]/20">
        ❦
      </div>

      {/* Center Layout */}

      <div className="relative flex min-h-screen items-center justify-center px-4 py-6 md:px-8">

        <div
          className={`
            w-full
            max-w-md
            md:max-w-3xl

            rounded-[28px]
            md:rounded-[44px]

            border
            border-white/20

            bg-white/10

            backdrop-blur-3xl

            shadow-[0_30px_90px_rgba(0,0,0,0.35)]

            px-6
            md:px-12

            py-8
            md:py-14

            text-center

            transition-all
            duration-1000

            ${
              hide
                ? "scale-110 opacity-0"
                : "scale-100 opacity-100"
            }
          `}
        >

          {/* Top Ornament */}

          <div className="flex items-center justify-center gap-4">

            <div className="h-px w-16 md:w-24 bg-[#D4AF37]/40" />

            <span className="text-[#D4AF37] text-xl md:text-2xl">
              ✦
            </span>

            <div className="h-px w-16 md:w-24 bg-[#D4AF37]/40" />

          </div>

          {/* Logo */}

          <div className="mt-8 flex justify-center">

            <Image
              src="/Images/logo/vr-logo.png"
              alt="VR Logo"
              width={190}
              height={190}
              priority
              className="w-[120px] md:w-[190px] h-auto"
            />

          </div>

          {/* Brand */}

          <p className="mt-6 text-[10px] md:text-sm uppercase tracking-[0.35em] md:tracking-[0.55em] text-[#E9C86B]">

            THE RUBHAV STORY

          </p>

          <div className="mx-auto mt-6 h-px w-20 md:w-24 bg-[#D4AF37]/50" />

          <p className="mt-6 md:mt-10 text-[11px] md:text-sm uppercase tracking-[0.35em] text-[#E9C86B]">

            Together with their Families

          </p>

          {/* Couple Names */}

          <h1 className="mt-7 md:mt-10 font-serif leading-none text-white">

            <span className="block text-5xl md:text-8xl">
              Vaibhav
            </span>

            <span className="my-3 md:my-4 block text-4xl md:text-5xl text-[#D4AF37]">
              &
            </span>

            <span className="block text-5xl md:text-8xl">
              Ruchita
            </span>

          </h1>
                    {/* Invitation Message */}

          <p className="mx-auto mt-8 md:mt-12 max-w-xl px-2 text-[15px] md:text-lg leading-7 md:leading-9 text-white/85">

            request the honour of your gracious presence
            as we celebrate the beginning of our forever,
            surrounded by love, laughter and cherished memories.

          </p>

          {/* Divider */}

          <div className="mx-auto mt-8 md:mt-12 h-px w-20 md:w-24 bg-[#D4AF37]/40" />

          {/* Wedding Date */}

          <p className="mt-7 md:mt-10 text-xs md:text-sm uppercase tracking-[0.35em] md:tracking-[0.45em] text-[#E9C86B]">

            24 • 25 January 2027

          </p>

          {/* Location */}

          <p className="mt-3 text-sm md:text-lg text-white/80">

            Ajmer, Rajasthan

          </p>

          {/* Open Invitation Button */}

          <button
            onClick={handleOpen}
            className="
              group
              relative
              mt-10
              md:mt-14

              w-full

              overflow-hidden

              rounded-full

              border
              border-[#D4AF37]

              bg-gradient-to-r
              from-[#F3D98D]
              via-[#D4AF37]
              to-[#B98C2D]

              py-4
              md:py-5

              text-xs
              md:text-sm

              uppercase
              tracking-[0.25em]
              md:tracking-[0.35em]

              text-white

              shadow-[0_15px_40px_rgba(212,175,55,0.35)]

              transition-all
              duration-500

              hover:scale-105
              hover:shadow-[0_20px_60px_rgba(212,175,55,0.55)]
            "
          >

            {/* Shimmer */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
            />

            <span className="relative">
              ✦ OPEN INVITATION ✦
            </span>

          </button>

          {/* Bottom Ornament */}

          <div className="mt-8 md:mt-14 flex items-center justify-center gap-4">

            <div className="h-px w-16 md:w-24 bg-[#D4AF37]/40" />

            <span className="text-[#D4AF37] text-xl md:text-2xl">
              ✦
            </span>

            <div className="h-px w-16 md:w-24 bg-[#D4AF37]/40" />

          </div>
                  </div>

      </div>

    </div>
  );
}