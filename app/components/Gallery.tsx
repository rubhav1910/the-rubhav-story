"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeUp from "./FadeUp";

const images = [
  "/Images/gallery1.jpg",
  "/Images/gallery2.jpg",
  "/Images/gallery3.jpg",
  "/Images/gallery4.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (  
    <FadeUp delay={0.4}>
    <section
      id="gallery"
      className="py-20 px-6 bg-[#f8f3fb]"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.35em] text-[#b58b3d] text-sm">
            Memories
          </p>

          <h2 className="font-serif text-5xl text-[#4d345d] mt-3">
            Our Journey
          </h2>

          <p className="text-gray-600 mt-4">
            Moments that brought us here ❤️
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group overflow-hidden rounded-3xl"
            >
              <Image
                src={src}
                alt=""
                width={600}
                height={800}
                className="
                  w-full
                  h-72
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
              />
            </button>
          ))}

        </div>

      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
      />
    </section>
    </FadeUp> 
  );
}