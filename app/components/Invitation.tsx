"use client";

import { useState } from "react";

export default function Invitation() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

 const handleOpen = () => {
  setHide(true);

  setTimeout(() => {
    setOpen(true);
  }, 700);
};

  if (open) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#F8F5F0] transition-opacity duration-700 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`
          w-[90%]
          max-w-md
          rounded-[32px]
          bg-white
          p-10
          text-center
          shadow-2xl
          transition-all
          duration-700
          ${hide ? "scale-95" : "scale-100"}
        `}
      >
        <div className="mb-8 text-6xl font-serif text-[#D4B26A]">
          VR
        </div>

        <p className="text-xs uppercase tracking-[8px] text-[#8F79B8]">
          The Rubhav Story
        </p>

        <h1 className="mt-8 font-serif text-5xl leading-tight">
          Vaibhav
          <br />
          &
          <br />
          Ruchita
        </h1>

        <p className="mt-8 text-gray-600 leading-8">
          Together with our families,
          request the pleasure of your presence
          to celebrate our wedding.
        </p>

        <p className="mt-8 uppercase tracking-[4px] text-[#8F79B8]">
          24 • 25 January 2027
        </p>

        <button
          onClick={handleOpen}
          className="
            mt-10
            w-full
            rounded-full
            bg-[#D4B26A]
            py-4
            font-medium
            transition
            hover:brightness-110
          "
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}