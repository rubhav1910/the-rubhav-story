"use client";

import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import LuxuryButton from "./ui/LuxuryButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Story", href: "#story" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Gallery", href: "#gallery" },
    { name: "Venue", href: "#venue" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/65 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Logo />

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white transition hover:text-[var(--champagne-gold)]"
            >
              {item.name}
            </a>
          ))}

          <LuxuryButton>
            RSVP
          </LuxuryButton>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white lg:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-8 py-5 text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="p-6">
            <LuxuryButton>
              RSVP
            </LuxuryButton>
          </div>
        </div>
      )}
    </header>
  );
}