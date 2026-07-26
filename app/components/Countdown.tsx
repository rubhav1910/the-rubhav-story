'use client';

import { useState, useEffect, useRef } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Countdown timer logic
  useEffect(() => {
    setMounted(true);

    // Target Date: 24th January 2027 (IST)
    const targetDate = new Date('2027-01-24T00:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sparkling Stars / Glitters Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.8;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.04 + 0.01;

        // Royal Champagne & Antique Gold Stars Palette
        const colors = ['#D4AF37', '#F3D98D', '#FFF0BE', '#E9C46A', '#FFFFFF'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Twinkle fading effect
        this.opacity += this.twinkleSpeed;
        if (this.opacity > 1 || this.opacity < 0.1) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = Math.max(0, Math.min(1, this.opacity));
        context.fillStyle = this.color;
        context.shadowColor = '#D4AF37';
        context.shadowBlur = 10; // Glowing sparkling effect

        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const stars: Star[] = Array.from({ length: 45 }, () => new Star());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="countdown" className="relative overflow-hidden py-16 md:py-20 bg-[#140A20] text-center border-y border-[#D4AF37]/30 select-none">
      {/* Background Radial Velvet Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A225C]/50 via-[#1E1332] to-[#120A1F] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[130px] pointer-events-none" />

      {/* Sparkling Stars Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      <div className="relative z-20 max-w-4xl mx-auto px-4">
        {/* Top Ornament */}
        <div className="flex items-center justify-center gap-3 mb-3 text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <span className="text-xs sm:text-sm">✦ ❦ ✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#F8F4ED] mb-2 tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Counting Down To Forever
        </h2>

        {/* Date */}
        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#E9C46A] mb-8 md:mb-10 font-medium drop-shadow-md">
          24 • 25 January 2027
        </p>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 max-w-xl mx-auto gap-2.5 sm:gap-4 md:gap-6 px-1 sm:px-2">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group bg-[#1A0F2E]/70 backdrop-blur-2xl p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border border-[#D4AF37]/40 ring-1 ring-[#D4AF37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)] hover:-translate-y-0.5"
            >
              <span className="font-serif text-2xl sm:text-3xl md:text-5xl font-light text-[#F8F4ED] block tracking-wider drop-shadow-md">
                {mounted ? String(item.value).padStart(2, '0') : '00'}
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#E9C46A] font-medium mt-1 md:mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}