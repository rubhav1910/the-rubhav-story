"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Story",
    "Celebrations",
    "Gallery",
    "Venue",
    "RSVP",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">

        <h1 className="text-xl md:text-2xl tracking-[0.35em] text-white">
          THE RUBHAV STORY
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/90">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition duration-300 hover:text-[#D4B26A]"
            >
              {item}
            </a>
          ))}

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block border-b border-white/10 px-8 py-4 text-white"
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}