"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          justify-start
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
          className="flex items-center gap-4 shrink-0"
        >
          <Image
            src="/Images/logo/vr-logo.png"
            alt="VR Logo"
            width={64}
            height={64}
            className="rounded-full"
            priority
          />

          <h1 className="font-serif text-xl md:text-2xl tracking-[0.18em] text-white whitespace-nowrap">
            THE RUBHAV STORY
          </h1>
        </a>

        {/* Desktop Menu */}

        <nav className="ml-auto hidden md:flex items-center gap-12">
          {[
            ["HOME", "#home"],
            ["EVENTS", "#celebrations"],
            ["VENUE", "#venue"],
            ["GALLERY", "#gallery"],
            ["RSVP", "#rsvp"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`
                relative
                text-sm
                tracking-[0.22em]
                transition-all
                duration-300

                ${
                  scrolled
                    ? "text-white hover:text-[#F4D06F]"
                    : "text-white hover:text-[#F4D06F]"
                }

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[1px]
                after:w-0
                after:bg-[#F4D06F]
                after:transition-all
                after:duration-300
                hover:after:w-full
              `}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}