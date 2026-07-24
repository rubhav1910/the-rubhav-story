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
        ${
          hide
            ? "opacity-0 scale-105"
            : "opacity-100 scale-100"
        }
      `}
    >

      {/* Royal Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#241236] via-[#55357D] to-[#8C6AB8]" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[170px]" />

      <div className="absolute bottom-[-220px] left-[-120px] h-[450px] w-[450px] rounded-full bg-[#A17BCF]/20 blur-[160px]" />

      <div className="absolute right-[-120px] top-[120px] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      {/* Decorative Corners */}

      <div className="absolute left-8 top-8 text-[70px] text-[#D4AF37]/20">
        ❦
      </div>

      <div className="absolute right-8 top-8 rotate-90 text-[70px] text-[#D4AF37]/20">
        ❦
      </div>

      <div className="absolute bottom-8 left-8 -rotate-90 text-[70px] text-[#D4AF37]/20">
        ❦
      </div>

      <div className="absolute bottom-8 right-8 rotate-180 text-[70px] text-[#D4AF37]/20">
        ❦
      </div>

      {/* Center Glass Panel */}

      <div className="relative flex h-full items-center justify-center px-6">

        <div
          className={`
            w-full
            max-w-3xl
            rounded-[44px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-3xl
            px-10
            py-14
            text-center
            shadow-[0_30px_90px_rgba(0,0,0,0.35)]
            transition-all
            duration-1000
            ${
              hide
                ? "scale-110 opacity-0"
                : "scale-100 opacity-100"
            }
          `}
        >

          {/* Ornament */}

          <div className="flex items-center justify-center gap-5">

            <div className="h-px w-24 bg-[#D4AF37]/40" />

            <span className="text-[#D4AF37] text-2xl">
              ✦
            </span>

            <div className="h-px w-24 bg-[#D4AF37]/40" />

          </div>

          {/* Logo */}

          <div className="mt-10 flex justify-center">

            <Image
              src="/Images/logo/vr-logo.png"
              alt="VR Logo"
              width={190}
              height={190}
              priority
              className="h-auto"
            />

          </div>

          {/* Title */}

          <p className="mt-8 uppercase tracking-[0.55em] text-[#E9C86B] text-sm">

            THE RUBHAV STORY

          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#D4AF37]/50" />

          <p className="mt-10 uppercase tracking-[0.45em] text-[#E9C86B] text-sm">

            Together with their Families

          </p>

          <h1 className="mt-10 font-serif leading-none text-white">

            <span className="block text-6xl md:text-8xl">
              Vaibhav
            </span>

            <span className="my-4 block text-5xl text-[#D4AF37]">
              &
            </span>

            <span className="block text-6xl md:text-8xl">
              Ruchita
            </span>

          </h1>
                    {/* Invitation Text */}

          <p className="mx-auto mt-12 max-w-xl text-lg leading-9 text-white/85">

            request the honour of your gracious presence
            as we celebrate the beginning of our forever,
            surrounded by love, laughter and cherished memories.

          </p>

          {/* Divider */}

          <div className="mx-auto mt-12 h-px w-24 bg-[#D4AF37]/40" />

          {/* Date */}

          <p className="mt-10 uppercase tracking-[0.45em] text-[#E9C86B] text-sm">

            24 • 25 January 2027

          </p>

          <p className="mt-4 text-lg text-white/80">

            Ajmer, Rajasthan

          </p>

          {/* Button */}

          <button
            onClick={handleOpen}
            className="
              group
              relative
              mt-14
              overflow-hidden
              rounded-full
              border
              border-[#E9C86B]
              bg-gradient-to-r
              from-[#F1D78B]
              via-[#D4AF37]
              to-[#B98A27]
              px-16
              py-5
              uppercase
              tracking-[0.35em]
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
              ✦ Open Invitation ✦
            </span>

          </button>

          {/* Bottom Ornament */}

          <div className="mt-14 flex items-center justify-center gap-5">

            <div className="h-px w-24 bg-[#D4AF37]/40" />

            <span className="text-[#D4AF37] text-2xl">
              ✦
            </span>

            <div className="h-px w-24 bg-[#D4AF37]/40" />

          </div>

        </div>

      </div>

    </div>
  );
}