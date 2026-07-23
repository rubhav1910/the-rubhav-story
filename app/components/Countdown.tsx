"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2027-01-24T00:00:00");

  const calculateTimeLeft = () => {
    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const cards = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-[#FBF8F3] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E9E0F5]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <p className="uppercase tracking-[6px] text-[#8F79B8] text-sm">
          COUNTDOWN
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl text-[#2B2B2B]">
          Countdown to Forever
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Every passing moment brings us one step closer to beginning
          our forever together.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {cards.map((card) => (
            <div
              key={card.label}
              className="
                group
                rounded-3xl
                border
                border-white/40
                bg-white/40
                p-8
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <h3 className="text-5xl font-bold text-[#D4B26A] transition-transform duration-300 group-hover:scale-110">
                {card.value}
              </h3>

              <p className="mt-4 uppercase tracking-[4px] text-sm text-gray-600">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mx-auto h-px w-32 bg-[#D4B26A]/40" />

          <p className="mt-8 text-xl italic text-gray-600">
            "The best is yet to come."
          </p>
        </div>

      </div>
    </section>
  );
}