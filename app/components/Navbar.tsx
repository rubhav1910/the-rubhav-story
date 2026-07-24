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
            px-6
            md:px-10
            transition-all
            duration-500

            ${
              scrolled
                ? "backdrop-blur-xl bg-[#7B5FA9]/25 border border-[#D4AF37]/30 shadow-2xl rounded-full py-3 px-8"
                : "bg-transparent"
            }
          `}
        >

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center gap-3 md:gap-4 shrink-0"
          >
            <Image
    src="/Images/logo/vr-logo.png"
    alt="VR Logo"
    width={70}
    height={70}
    priority
    className="w-14 md:w-[70px] h-auto"
/>

            <h1 className="font-serif text-lg md:text-2xl tracking-[0.15em] text-white whitespace-nowrap">
              THE RUBHAV STORY
            </h1>
          </a>

          {/* Desktop Menu */}

          <nav className="ml-auto hidden md:flex items-center gap-10">

            {links.map(([label, href]) => (

              <a
                key={label}
                href={href}
                className="
                  relative
                  text-sm
                  tracking-[0.22em]
                  text-white
                  transition-all
                  duration-300
                  hover:text-[#F4D06F]

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[1px]
                  after:w-0
                  after:bg-[#F4D06F]
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
            className="ml-auto md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          inset-0
          z-[999]
          bg-[#4A2F73]/95
          backdrop-blur-2xl
          transition-all
          duration-500

          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        {/* Close */}

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-8 top-8 text-white text-5xl"
        >
          ×
        </button>

        <div className="flex h-full flex-col items-center justify-center gap-10">

          {links.map(([label, href]) => (

            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="
                font-serif
                text-3xl
                tracking-[0.18em]
                text-white
                transition
                duration-300
                hover:text-[#F4D06F]
              "
            >
              {label}
            </a>

          ))}

        </div>

      </div>
    </>
  );
}