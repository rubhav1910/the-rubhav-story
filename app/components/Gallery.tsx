"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = () => {
    if (selected === null) return;
    setSelected((selected + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selected === null) return;
    setSelected(
      (selected - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;

      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <>
      <section
        id="gallery"
        className="bg-white py-28 px-6"
      >
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="MEMORIES"
            title="Captured Moments"
            description="A few beautiful moments from the beginning of our forever."
          />

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className="
                  mb-6
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  shadow-xl
                  break-inside-avoid
                  group
                "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  className="
                    w-full
                    h-auto
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {selected !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">

          <button
            onClick={() => setSelected(null)}
            className="absolute right-8 top-8 text-5xl text-white hover:text-[#D4B26A]"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-6xl text-white hover:text-[#D4B26A]"
          >
            ‹
          </button>

          <div className="relative h-[85vh] w-[90vw] max-w-6xl">

            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              fill
              className="object-contain"
            />

          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 text-6xl text-white hover:text-[#D4B26A]"
          >
            ›
          </button>

        </div>
      )}
    </>
  );
}