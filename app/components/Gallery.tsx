"use client";

import { useState, useEffect, useRef } from "react";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Magical Golden Sparkle Particles Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    class Sparkle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      twinkleSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5; // Slow floating drift
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;

        // Champagne & Antique Gold Glow Colors
        const colors = ["#D4AF37", "#F3D98D", "#FFF0BE", "#E9C46A", "#FFFFFF"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Twinkle fading effect
        this.opacity += this.twinkleSpeed;
        if (this.opacity > 1 || this.opacity < 0.1) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }

        // Screen boundary looping
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = Math.max(0, Math.min(1, this.opacity));
        context.fillStyle = this.color;
        context.shadowColor = "#D4AF37";
        context.shadowBlur = 10; // Magical bloom glow

        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const sparkles: Sparkle[] = Array.from({ length: 40 }, () => new Sparkle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      sparkles.forEach((s) => {
        s.update();
        s.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <FadeUp delay={0.35}>
      <section
        id="gallery"
        className="relative overflow-hidden py-16 md:py-24 bg-[#140A20] text-white select-none"
      >
        {/* Royal Velvet Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54] via-[#140A20] to-[#0A0510]" />
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-[150px] pointer-events-none" />

        {/* Floating Sparkles Canvas Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        <div className="relative z-20 mx-auto max-w-7xl px-4 md:px-6">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">

            <span className="text-[#D4AF37] text-xl tracking-[0.4em] drop-shadow">✦ ❦ ✦</span>

            <p className="mt-3 font-sans uppercase tracking-[0.45em] text-xs md:text-sm text-[#F3D98D] font-medium">
              Captured Moments
            </p>

            <h2 className="mt-3 md:mt-5 font-serif text-3xl md:text-6xl font-light text-white leading-tight tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              A Glimpse Into
              <br />
              Our Story
            </h2>

            <div className="mx-auto mt-6 md:mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <span className="text-[#D4AF37] text-xs">◆</span>
              <div className="h-px w-20 md:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
            </div>

            <p className="mx-auto mt-6 md:mt-8 max-w-2xl font-serif text-sm md:text-lg italic leading-relaxed text-white/90 px-2 font-light drop-shadow">
              Every picture tells a story.
              <br className="hidden sm:inline" /> Every smile holds a memory.
              <br className="hidden sm:inline" /> Every moment brings us closer to forever.
            </p>

          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">

            {images.map((image, i) => (

              <FadeUp key={i} delay={0.15 * i}>

                <button
                  onClick={() => setIndex(i)}
                  className="group relative w-full overflow-hidden rounded-[20px] md:rounded-[28px] border border-[#D4AF37]/40 bg-white/[0.02] text-left shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)]"
                >

                  <div className="overflow-hidden relative">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={700}
                      height={900}
                      className="h-[220px] sm:h-[300px] md:h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Corner Flourish on Image Overlay */}
                    <span className="absolute top-3 left-3 text-[#D4AF37]/70 text-lg font-serif pointer-events-none">❦</span>
                    <span className="absolute top-3 right-3 text-[#D4AF37]/70 text-lg font-serif rotate-90 pointer-events-none">❦</span>
                  </div>

                  <div className="bg-[#140A20]/90 px-3 py-3 md:px-6 md:py-5 border-t border-[#D4AF37]/30">

                    <p className="font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs text-[#F3D98D] font-medium">
                      Memory
                    </p>

                    <h3 className="mt-1 md:mt-2 font-serif text-sm sm:text-lg md:text-2xl text-white truncate font-light">
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