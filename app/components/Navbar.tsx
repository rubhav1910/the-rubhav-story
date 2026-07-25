"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const links = [
    ["HOME", "#home"],
    ["CELEBRATIONS", "#celebrations"],
    ["COUNTDOWN", "#countdown"],
    ["GALLERY", "#gallery"],
    ["VENUE", "#venue"],
    ["RSVP", "#rsvp"],
  ];

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${scrolled ? "py-3" : "py-6"}
        `}
      >
        <div
          className={`
            mx-auto
            max-w-7xl
            flex
            items-center
            justify-between
            px-6
            md:px-10
            transition-all
            duration-500

            ${
              scrolled
                ? "backdrop-blur-2xl bg-[#140A20]/80 border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-full py-3 px-8"
                : "bg-transparent"
            }
          `}
        >

          {/* Logo & Title */}
          <a
            href="#home"
            className="flex items-center gap-3.5 md:gap-5 shrink-0"
          >
            <Image
              src="/Images/logo/vr-logo.png"
              alt="VR Logo"
              width={90}
              height={90}
              priority
              className="w-12 sm:w-14 md:w-16 h-auto object-contain"
            />

            <h1 className="font-serif text-base sm:text-lg md:text-2xl tracking-[0.18em] text-white whitespace-nowrap font-light">
              THE RUBHAV STORY
            </h1>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="
                  relative
                  text-xs lg:text-sm
                  tracking-[0.22em]
                  text-white/90
                  font-medium
                  transition-all
                  duration-300
                  hover:text-[#F3D98D]

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[1px]
                  after:w-0
                  after:bg-[#D4AF37]
                  after:transition-all
                  hover:after:w-full
                "
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#F3D98D] p-2 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed
          inset-0
          z-[999]
          bg-[#140A20]/95
          backdrop-blur-3xl
          transition-all
          duration-500

          ${
            menuOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        {/* Glow effect for Mobile Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/15 blur-[160px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 sm:right-8 sm:top-8 text-[#F3D98D] text-5xl focus:outline-none font-serif"
          aria-label="Close Menu"
        >
          ×
        </button>

        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-6 text-center">

          <span className="text-[#D4AF37] text-xl tracking-[0.4em] mb-2">✦ ❦ ✦</span>

          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="
                font-serif
                text-2xl
                sm:text-3xl
                tracking-[0.2em]
                text-white
                transition
                duration-300
                hover:text-[#F3D98D]
              "
            >
              {label}
            </a>
          ))}

          <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
        </div>
      </div>
    </>
  );
}