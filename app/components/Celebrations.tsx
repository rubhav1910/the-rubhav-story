"use client";

import { useEffect, useRef } from "react";
import FadeUp from "./FadeUp";

const dayOne = [
  {
    time: "1:00 PM",
    title: "Ring Ceremony",
    desc: "Exchanging rings and vows as our hearts lock in for forever.",
  },
  {
    time: "6:30 PM",
    title: "Sangeet",
    desc: "A magical night of rhythm, stellar moves, and joyous celebrations.",
  },
];

const weddingDay = [
  {
    time: "12:30 PM",
    title: "Haldi Ceremony",
    desc: "Drenched in golden turmeric, laughter, and familial blessings.",
  },
  {
    time: "6:30 PM",
    title: "Baraat",
    desc: "The groom's majestic royal procession arrives with pomp and beats.",
  },
  {
    time: "7:30 PM",
    title: "Reception",
    desc: "An exquisite evening feast celebrating our union with dear ones.",
  },
  {
    time: "Midnight",
    title: "Sacred Pheras",
    desc: "Taking seven holy rounds around the sacred fire for seven lifetimes.",
  },
];

export default function Celebrations() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Golden Fireworks Canvas Animation Engine
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

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;
      decay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.size = Math.random() * 2 + 1;
        this.decay = Math.random() * 0.012 + 0.006;

        // Royal Champagne & Antique Gold Glow Colors
        const colors = ["#D4AF37", "#E9C46A", "#FFE89C", "#FFFFFF", "#F3D98D"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.025; // gravity drag
        this.alpha -= this.decay;
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = Math.max(this.alpha, 0);
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.shadowBlur = 10;
        context.shadowColor = this.color;
        context.fill();
        context.restore();
      }
    }

    let particles: Particle[] = [];

    const createFirework = () => {
      const x = Math.random() * width;
      const y = Math.random() * (height * 0.6);
      const count = 25 + Math.floor(Math.random() * 20);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y));
      }
    };

    let timer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      timer++;
      if (timer % 40 === 0) {
        createFirework();
      }

      particles.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) {
          particles.splice(index, 1);
        }
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
    <FadeUp delay={0.2}>
      <section
        id="celebrations"
        className="relative overflow-hidden py-24 bg-[#140A20] text-white select-none"
      >
        {/* Fireworks Canvas Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Deep Velvet Royal Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54] via-[#140A20] to-[#0A0510]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/15 blur-[170px] pointer-events-none" />

        <div className="relative z-20 mx-auto max-w-4xl px-6">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xl tracking-[0.4em] drop-shadow">
              ✦ ❦ ✦
            </span>
            <p className="uppercase tracking-[0.5em] text-xs md:text-sm text-[#F3D98D] mt-3 font-medium">
              Wedding Itinerary
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-white tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              The Celebration Awaits
            </h2>
            <div className="mx-auto mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <span className="text-[#D4AF37] text-xs">◆</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
            </div>
          </div>

          {/* Royal Palace Scroll Container */}
          <div className="relative rounded-[40px] border border-[#D4AF37]/40 bg-white/[0.02] backdrop-blur-3xl p-6 sm:p-10 md:p-14 shadow-[0_35px_120px_rgba(0,0,0,0.7)]">
            {/* Luxury Royal Corners */}
            <span className="absolute top-5 left-5 text-[#D4AF37]/50 text-2xl font-serif">
              ❦
            </span>
            <span className="absolute top-5 right-5 text-[#D4AF37]/50 text-2xl font-serif rotate-90">
              ❦
            </span>
            <span className="absolute bottom-5 left-5 text-[#D4AF37]/50 text-2xl font-serif -rotate-90">
              ❦
            </span>
            <span className="absolute bottom-5 right-5 text-[#D4AF37]/50 text-2xl font-serif rotate-180">
              ❦
            </span>

            {/* Day One */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block px-6 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 text-[#F3D98D] uppercase tracking-[0.35em] text-xs font-semibold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  24 January 2027
                </span>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl text-white tracking-wide">
                  Day One
                </h3>
              </div>

              <div className="grid gap-5">
                {dayOne.map((event, index) => (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-gradient-to-r
                      from-white/[0.06]
                      to-white/[0.02]
                      p-5
                      md:px-8
                      md:py-6
                      transition-all
                      duration-500
                      hover:border-[#D4AF37]
                      hover:bg-white/[0.09]
                      hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]
                      hover:-translate-y-1
                    "
                  >
                    <div>
                      <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#F3D98D] font-bold mb-1">
                        ✦ {event.time}
                      </span>
                      <h4 className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:text-[#F9E29C] transition-colors">
                        {event.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 font-light sm:text-right max-w-[260px] leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider between days */}
            <div className="my-12 flex items-center justify-center gap-4">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
              <span className="text-[#D4AF37] text-base shrink-0">
                ✦ ❦ ✦
              </span>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            </div>

            {/* Wedding Day */}
            <div>
              <div className="text-center mb-10">
                <span className="inline-block px-6 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 text-[#F3D98D] uppercase tracking-[0.35em] text-xs font-semibold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  25 January 2027
                </span>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl text-white tracking-wide">
                  Wedding Day
                </h3>
              </div>

              <div className="grid gap-5">
                {weddingDay.map((event, index) => (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-gradient-to-r
                      from-white/[0.06]
                      to-white/[0.02]
                      p-5
                      md:px-8
                      md:py-6
                      transition-all
                      duration-500
                      hover:border-[#D4AF37]
                      hover:bg-white/[0.09]
                      hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]
                      hover:-translate-y-1
                    "
                  >
                    <div>
                      <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#F3D98D] font-bold mb-1">
                        ✦ {event.time}
                      </span>
                      <h4 className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:text-[#F9E29C] transition-colors">
                        {event.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 font-light sm:text-right max-w-[260px] leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}