"use client";

import FadeUp from "./FadeUp";

const dayOne = [
  {
    icon: "💍",
    time: "1:00 PM",
    title: "Ring Ceremony",
    desc: "Where our forever begins.",
  },
  {
    icon: "🎶",
    time: "6:30 PM",
    title: "Sangeet",
    desc: "An evening of music, dance & celebration.",
  },
];

const weddingDay = [
  {
    icon: "🌼",
    time: "12:30 PM",
    title: "Haldi Ceremony",
    desc: "Blessings in shades of gold.",
  },
  {
    icon: "🐎",
    time: "6:30 PM",
    title: "Baraat",
    desc: "The groom's grand arrival.",
  },
  {
    icon: "🍽️",
    time: "7:30 PM",
    title: "Reception",
    desc: "Dinner, joy & heartfelt wishes.",
  },
  {
    icon: "🔥",
    time: "Midnight",
    title: "Sacred Pheras",
    desc: "Seven vows for a lifetime.",
  },
];

export default function Celebrations() {
  return (
    <FadeUp delay={0.2}>
      <section
        id="celebrations"
        className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F7F2FB] via-[#EEE2F8] to-[#F7F2FB]"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.45em] text-sm text-[#C79B42]">
              Wedding Itinerary
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-6xl text-[#4C335F]">
              The Celebration Awaits
            </h2>

            <div className="mx-auto mt-8 h-px w-24 bg-[#C79B42]/60" />

          </div>
                    {/* Day 1 */}

          <div className="mt-20">

            <div className="mb-12 text-center">

              <p className="uppercase tracking-[0.4em] text-[#C79B42] text-sm">
                Day One
              </p>

              <h3 className="mt-3 font-serif text-4xl text-[#4C335F]">
                24 January 2027
              </h3>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

              {dayOne.map((event) => (

                <div
                  key={event.title}
                  className="
                    group
                    rounded-[32px]
                    border
                    border-[#D4AF37]/20
                    bg-white/70
                    backdrop-blur-xl
                    p-8
                    shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >

                  <div className="text-5xl">
                    {event.icon}
                  </div>

                  <p className="mt-6 uppercase tracking-[0.3em] text-xs text-[#C79B42]">
                    {event.time}
                  </p>

                  <h4 className="mt-3 font-serif text-3xl text-[#4C335F]">
                    {event.title}
                  </h4>

                  <div className="mt-5 h-px w-14 bg-[#D4AF37]/60" />

                  <p className="mt-5 leading-7 text-gray-600">
                    {event.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Wedding Day */}

          <div className="mt-24">

            <div className="mb-12 text-center">

              <p className="uppercase tracking-[0.4em] text-[#C79B42] text-sm">
                Wedding Day
              </p>

              <h3 className="mt-3 font-serif text-4xl text-[#4C335F]">
                25 January 2027
              </h3>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

              {weddingDay.map((event) => (

                <div
                  key={event.title}
                  className="
                    group
                    rounded-[32px]
                    border
                    border-[#D4AF37]/20
                    bg-white/70
                    backdrop-blur-xl
                    p-8
                    shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >

                  <div className="text-5xl">
                    {event.icon}
                  </div>

                  <p className="mt-6 uppercase tracking-[0.3em] text-xs text-[#C79B42]">
                    {event.time}
                  </p>

                  <h4 className="mt-3 font-serif text-3xl text-[#4C335F]">
                    {event.title}
                  </h4>

                  <div className="mt-5 h-px w-14 bg-[#D4AF37]/60" />

                  <p className="mt-5 leading-7 text-gray-600">
                    {event.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </FadeUp>
  );
}