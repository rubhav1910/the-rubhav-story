'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Explicit ISO format prevents NaN/00 bugs across all mobile browsers
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

  return (
    <section id="countdown" className="relative overflow-hidden py-16 bg-[#140A20] text-center border-y border-[#D4AF37]/30">
      {/* Background Radial Velvet Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54]/60 via-[#140A20] to-[#0A0510] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Top Ornament */}
        <div className="flex items-center justify-center gap-3 mb-3 text-[#D4AF37]">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <span className="text-sm">✦ ❦ ✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-2xl md:text-4xl font-light text-white mb-2 tracking-wide">
          Counting Down To Forever
        </h2>

        <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-[#F3D98D] mb-8 font-medium">
          24 • 25 January 2027
        </p>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 max-w-xl mx-auto gap-3 md:gap-6 px-2">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group bg-white/[0.03] backdrop-blur-2xl p-3 md:p-5 rounded-2xl md:rounded-3xl border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)]"
            >
              <span className="font-serif text-2xl sm:text-3xl md:text-5xl font-light text-white block tracking-wider">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#F3D98D] font-medium mt-1 md:mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}