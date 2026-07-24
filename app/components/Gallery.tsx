"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "/Images/gallery1.jpg",
    title: "Roka Ceremony",
  },
  {
    src: "/Images/gallery2.jpg",
    title: "Together",
  },
  {
    src: "/Images/gallery3.jpg",
    title: "Forever Begins",
  },
  {
    src: "/Images/gallery4.jpg",
    title: "Our Story",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <FadeUp delay={0.35}>
      <section
        id="gallery"
        className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F7F1FB] via-[#EFE4F8] to-[#F9F6FC]"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#B38BE0]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.45em] text-sm text-[#C79B42]">
              Captured Moments
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-6xl text-[#4C335F] leading-tight">
              A Glimpse Into
              <br />
              Our Story
            </h2>

            <div className="mx-auto mt-8 h-px w-24 bg-[#C79B42]/60" />

            <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-600">
              Every picture tells a story.
              Every smile holds a memory.
              Every moment brings us closer to forever.
            </p>

          </div>

          {/* Gallery */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {images.map((image, i) => (

              <FadeUp key={i} delay={0.15 * i}>

                <button
                  onClick={() => setIndex(i)}
                  className="group overflow-hidden rounded-[28px] shadow-xl bg-white"
                >

                  <Image
                    src={image.src}
                    alt={image.title}
                    width={700}
                    height={900}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="bg-white px-6 py-5">

                    <p className="uppercase tracking-[0.3em] text-xs text-[#C79B42]">
                      Memory
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#4C335F]">
                      {image.title}
                    </h3>

                  </div>

                </button>

              </FadeUp>

            ))}

          </div>

        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((img) => ({
            src: img.src,
          }))}
        />

      </section>
    </FadeUp>
  );
}