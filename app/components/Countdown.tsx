"use client";

import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";

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
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  return (
    <FadeUp delay={0.1}>
    <section
  id="countdown"
  className="
    py-20
    bg-[radial-gradient(circle_at_top,#F4ECFC_0%,#E9DDF7_60%,#E3D3F6_100%)]
  "
>
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <p className="section-subtitle">
            Celebration Begins In
          </p>

          <h2 className="section-title mt-5">
            Counting Down To Forever
          </h2>

          <div className="gold-divider mt-8" />

        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

          {items.map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-[#E8DDC8]
                bg-[var(--ivory)]
                py-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3 className="font-serif text-5xl md:text-6xl text-[var(--royal)]">
                {item.value}
              </h3>

              <div className="mx-auto my-5 h-px w-10 bg-[var(--gold)] opacity-50" />

              <p className="uppercase tracking-[4px] text-xs text-[var(--gold)]">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
    </FadeUp>
  );
}