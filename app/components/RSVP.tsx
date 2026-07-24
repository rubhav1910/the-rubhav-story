"use client";

import FadeUp from "./FadeUp";

export default function RSVP() {
  return (
    <FadeUp delay={0.5}>
      <section
        id="rsvp"
        className="relative overflow-hidden py-24"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5F3B8C] via-[#7550A8] to-[#8B67BD]" />

        {/* Glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-6">

          <div className="rounded-[36px] border border-white/15 bg-white/10 p-10 md:p-16 backdrop-blur-xl shadow-2xl">

            <div className="text-center">

              <p className="uppercase tracking-[0.45em] text-sm text-[#F2D486]">
                RSVP
              </p>

              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-tight text-white">
                We'd Be Honoured
                <br />
                To Celebrate With You
              </h2>

              <div className="mx-auto mt-8 h-px w-24 bg-[#F2D486]/60" />

              <p className="mx-auto mt-8 max-w-2xl text-white/90 leading-8 text-base md:text-lg">
                Your presence will make our wedding celebration even more
                memorable. Kindly let us know if you'll be joining us.
              </p>

              <a
                href="https://wa.me/917014164334?text=Hello%20Vaibhav%20%26%20Ruchita,%20we%20are%20excited%20to%20join%20your%20wedding%20celebration!"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-12
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  px-10
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(212,175,55,.45)]
                "
              >
                RSVP on WhatsApp →
              </a>

              <div className="mt-12">

                <p className="font-serif text-2xl text-white">
                  Vaibhav & Ruchita
                </p>

                <p className="mt-3 tracking-[0.3em] uppercase text-[#F2D486] text-sm">
                  +91 70141 64334
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}