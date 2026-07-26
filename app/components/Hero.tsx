"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Royal Golden Falling Glitters & Sparkles Animation
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

    class Glitter {
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
        this.size = Math.random() * 2.5 + 0.5; // Fine glitter dots
        this.speedY = Math.random() * 0.8 + 0.3; // Gentle downward fall
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;

        // Royal Champagne & Antique Gold Sparkle Palette
        const colors = ["#D4AF37", "#F3D98D", "#FFF0BE", "#E9C46A", "#FFFFFF"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Twinkle (shimmering opacity) effect
        this.opacity += this.twinkleSpeed;
        if (this.opacity > 1 || this.opacity < 0.2) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }

        // Loop back to top
        if (this.y > height) {
          this.y = -10;
          this.x = Math.random() * width;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = Math.max(0, Math.min(1, this.opacity));
        context.fillStyle = this.color;
        context.shadowColor = "#D4AF37";
        context.shadowBlur = 8; // Glowing glitter effect

        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const glitters: Glitter[] = Array.from({ length: 50 }, () => new Glitter());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      glitters.forEach((g) => {
        g.update();
        g.draw(ctx);
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
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#140A20] select-none"
    >
      {/* Background Image - Clean & Without Color Tint */}
      <Image
        src="/Images/hero.jpg"
        alt="Ruchita & Vaibhav"
        fill
        priority
        className="object-cover object-[80%_center] sm:object-[75%_center] md:object-center"
      />

      {/* Very Soft Gradient Behind Text Only */}
      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-[#140A20]/80 via-[#140A20]/30 to-transparent pointer-events-none" />

      {/* Bottom Gradient Shadow for Blessings readability */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0510]/90 via-[#0A0510]/40 to-transparent pointer-events-none z-[5]" />

      {/* Falling Golden Glitters Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[6]"
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-start pt-16 sm:pt-20 md:pt-24 pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-lg lg:max-w-xl">
            {/* Top Ornamental Flourish */}
            <div className="flex items-center gap-2 mb-1 text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <span className="text-xs">✦ ❦ ✦</span>
            </div>

            {/* Couple Names */}
            <h1 className="font-serif leading-[1.0] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="block text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
                Ruchita
              </span>

              <span className="block text-xl sm:text-2xl text-[#D4AF37] font-serif italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                &
              </span>

              <span className="block text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
                Vaibhav
              </span>
            </h1>

            {/* Divider */}
            <div className="my-2 flex items-center gap-3">
              <div className="h-px w-20 sm:w-28 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-80" />
              <span className="text-[#D4AF37] text-xs drop-shadow">◆</span>
            </div>

            {/* Date */}
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#F3D98D] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              24 • 25 January 2027
            </p>
          </div>
        </div>
      </div>

      {/* Parents' Blessings */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center w-full max-w-md px-4">
        <p className="font-serif italic text-[11px] sm:text-xs text-[#F3D98D] mb-1 font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          With the blessings of
        </p>
        <div className="space-y-[2px] text-[10px] sm:text-xs text-white/95 font-light tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          <p>Prabha Mathur & Late Shri Narendra Narayan Mathur</p>
          <p className="text-[9px] text-[#D4AF37]">• & •</p>
          <p>Vidhi Tandon & Vikas Tandon</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-[#D4AF37] z-10 drop-shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}