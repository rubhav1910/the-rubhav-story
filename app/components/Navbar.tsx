"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#celebrations" },
    { name: "Venue", href: "#venue" },
    { name: "Gallery", href: "#gallery" },
    { name: "RSVP", href: "#rsvp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
      
        <a
  href="#home"
  className="flex items-center gap-3"
>
  <Image
    src="/Images/logo/vr-logo.svg"
    alt="VR Monogram"
    width={56}
    height={56}
    priority
    className="w-12 md:w-14 h-auto"
  />

  <div className="hidden md:block">
    <h2 className="font-serif text-2xl tracking-[0.25em] text-white">
      THE RUBHAV STORY
    </h2>

    <p className="mt-1 text-xs uppercase tracking-[0.45em] text-white/80">
      Vaibhav &amp; Ruchita
    </p>
  </div>
</a>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                relative
                text-sm
                uppercase
                tracking-[3px]
                text-[var(--royal)]
                transition-all
                duration-300
                hover:text-[var(--gold)]
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[var(--gold)]
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Mobile */}

        <button
          className="
            md:hidden
            text-3xl
            text-[var(--royal)]
          "
        >
          ☰
        </button>

      </div>
    </header>
  );
}