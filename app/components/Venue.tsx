"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import FadeUp from "./FadeUp";

export default function Venue() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Royal Golden & Rose Petals Canvas Animation
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

    class Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      angle: number;
      spin: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.size = Math.random() * 5 + 3;
        this.speedY = Math.random() * 1.2 + 0.5;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.5;
        this.angle = Math.random() * 360;
        this.spin = (Math.random() - 0.5) * 0.02;

        // Royal Plum Matching Petals & Champagne Gold
        const colors = ["#D4AF37", "#E9C46A", "#E8B4B8", "#F3D98D", "#D8A7B1"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.7 + 0.3;
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.01) + this.speedX;
        this.angle += this.spin;

        if (this.y > height) {
          this.y = -20;
          this.x = Math.random() * width;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.globalAlpha = this.alpha;
        context.fillStyle = this.color;

        context.beginPath();
        context.ellipse(0, 0, this.size, this.size * 1.8, Math.PI / 4, 0, 2 * Math.PI);
        context.fill();
        context.restore();
      }
    }

    const petals: Petal[] = Array.from({ length: 35 }, () => new Petal());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.update();
        p.draw(ctx);
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
    <FadeUp delay={0.3}>
      <section
        id="venue"
        className="relative overflow-hidden py-24 bg-[#120A1F] text-[#F8F4ED] select-none"
      >
        {/* Falling Petals Canvas Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Royal Plum Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A225C]/50 via-[#1E1332] to-[#120A1F] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/15 blur-[170px] pointer-events-none" />

        <div className="relative z-20 mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="text-[#D4AF37] text-xl tracking-[0.4em] drop-shadow">
              ✦ ❦ ✦
            </span>

            <p className="mt-3 uppercase tracking-[0.5em] text-xs sm:text-sm text-[#E9C46A] font-medium">
              Venue
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-[#F8F4ED] tracking-wide font-light drop-shadow-md">
              Join Us In Ajmer
            </h2>

            <div className="mx-auto mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <span className="text-[#D4AF37] text-xs">◆</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            {/* Image Container with Royal Border */}
            <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/40 ring-1 ring-[#D4AF37]/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] group">
              <Image
                src="/Images/venue.jpg"
                alt="Ajmer Bagh"
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              {/* Corner Motifs on Image */}
              <span className="absolute top-4 left-4 text-[#D4AF37]/80 text-2xl font-serif pointer-events-none">
                ❦
              </span>
              <span className="absolute top-4 right-4 text-[#D4AF37]/80 text-2xl font-serif rotate-90 pointer-events-none">
                ❦
              </span>
              <span className="absolute bottom-4 left-4 text-[#D4AF37]/80 text-2xl font-serif -rotate-90 pointer-events-none">
                ❦
              </span>
              <span className="absolute bottom-4 right-4 text-[#D4AF37]/80 text-2xl font-serif rotate-180 pointer-events-none">
                ❦
              </span>
            </div>

            {/* Glassmorphic Royal Plum Card */}
            <div className="relative rounded-[40px] border border-[#D4AF37]/40 bg-[#1A0F2E]/80 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] ring-1 ring-[#D4AF37]/20">
              {/* Corner Motifs */}
              <span className="absolute top-5 left-5 text-[#D4AF37]/60 text-2xl font-serif">
                ❦
              </span>
              <span className="absolute top-5 right-5 text-[#D4AF37]/60 text-2xl font-serif rotate-90">
                ❦
              </span>
              <span className="absolute bottom-5 left-5 text-[#D4AF37]/60 text-2xl font-serif -rotate-90">
                ❦
              </span>
              <span className="absolute bottom-5 right-5 text-[#D4AF37]/60 text-2xl font-serif rotate-180">
                ❦
              </span>

              <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[#E9C46A] font-medium">
                Wedding Venue
              </p>

              <h3 className="mt-3 font-serif text-4xl sm:text-5xl text-[#F8F4ED] font-light tracking-wide">
                Ajmer Bagh
              </h3>

              <p className="mt-6 font-serif text-base sm:text-lg text-[#F8F4ED]/85 leading-relaxed font-light italic">
                We warmly invite you to celebrate our wedding amidst the elegance
                of Ajmer Bagh, where every corner will be filled with love,
                laughter and unforgettable memories.
              </p>

              <div className="mt-8 space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <span className="text-xl text-[#D4AF37]">📍</span>
                  <div>
                    <p className="font-serif text-lg text-[#E9C46A] font-medium">
                      Location
                    </p>
                    <p className="font-sans text-sm sm:text-base text-[#F8F4ED]/80 font-light">
                      Ajmer Bagh, Ajmer, Rajasthan
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div className="flex items-start gap-4">
                  <span className="text-xl text-[#D4AF37]">🗓️</span>
                  <div>
                    <p className="font-serif text-lg text-[#E9C46A] font-medium">
                      Wedding Dates
                    </p>
                    <p className="font-sans text-sm sm:text-base text-[#F8F4ED]/80 font-light">
                      24 & 25 January 2027
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <a
                href="https://maps.app.goo.gl/dd96LegbN69FmPDH6"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#D4AF37]
                  to-[#E9C46A]
                  px-8
                  py-4
                  font-sans
                  text-xs sm:text-sm
                  uppercase
                  tracking-widest
                  font-semibold
                  text-[#120A1F]
                  shadow-[0_0_20px_rgba(212,175,55,0.3)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]
                "
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}