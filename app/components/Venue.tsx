"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Venue() {
  return (
    <FadeUp delay={0.3}>
      <section
        id="venue"
        className="relative overflow-hidden py-24 bg-[#140A20] text-white"
      >
        {/* Royal Velvet Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#321C54] via-[#140A20] to-[#0A0510]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/15 blur-[170px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="text-center">

            <span className="text-[#D4AF37] text-xl tracking-[0.4em]">✦ ❦ ✦</span>

            <p className="mt-3 uppercase tracking-[0.5em] text-xs sm:text-sm text-[#F3D98D] font-medium">
              Venue
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-6xl text-white tracking-wide font-light">
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
            <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/40 shadow-[0_35px_120px_rgba(0,0,0,0.7)] group">

              <Image
                src="/Images/venue.jpg"
                alt="Ajmer Bagh"
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              {/* Corner Motifs on Image */}
              <span className="absolute top-4 left-4 text-[#D4AF37]/70 text-2xl font-serif pointer-events-none">❦</span>
              <span className="absolute top-4 right-4 text-[#D4AF37]/70 text-2xl font-serif rotate-90 pointer-events-none">❦</span>
              <span className="absolute bottom-4 left-4 text-[#D4AF37]/70 text-2xl font-serif -rotate-90 pointer-events-none">❦</span>
              <span className="absolute bottom-4 right-4 text-[#D4AF37]/70 text-2xl font-serif rotate-180 pointer-events-none">❦</span>

            </div>

            {/* Glassmorphic Royal Card */}
            <div className="relative rounded-[40px] border border-[#D4AF37]/40 bg-white/[0.02] backdrop-blur-3xl p-8 sm:p-12 shadow-[0_35px_120px_rgba(0,0,0,0.7)]">

              {/* Corner Motifs */}
              <span className="absolute top-5 left-5 text-[#D4AF37]/50 text-2xl font-serif">❦</span>
              <span className="absolute top-5 right-5 text-[#D4AF37]/50 text-2xl font-serif rotate-90">❦</span>
              <span className="absolute bottom-5 left-5 text-[#D4AF37]/50 text-2xl font-serif -rotate-90">❦</span>
              <span className="absolute bottom-5 right-5 text-[#D4AF37]/50 text-2xl font-serif rotate-180">❦</span>

              <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[#F3D98D] font-medium">
                Wedding Venue
              </p>

              <h3 className="mt-3 font-serif text-4xl sm:text-5xl text-[#F9E29C] font-light tracking-wide">
                Ajmer Bagh
              </h3>

              <p className="mt-6 font-serif text-base sm:text-lg text-white/90 leading-relaxed font-light italic">
                We warmly invite you to celebrate our wedding amidst the elegance
                of Ajmer Bagh, where every corner will be filled with love,
                laughter and unforgettable memories.
              </p>

              <div className="mt-8 space-y-6">

                {/* Location */}
                <div className="flex items-start gap-4">

                  <span className="text-xl text-[#D4AF37]">📍</span>

                  <div>

                    <p className="font-serif text-lg text-[#F3D98D] font-medium">
                      Location
                    </p>

                    <p className="font-sans text-sm sm:text-base text-white/80 font-light">
                      Ajmer Bagh, Ajmer, Rajasthan
                    </p>

                  </div>

                </div>

                {/* Dates */}
                <div className="flex items-start gap-4">

                  <span className="text-xl text-[#D4AF37]">🗓️</span>

                  <div>

                    <p className="font-serif text-lg text-[#F3D98D] font-medium">
                      Wedding Dates
                    </p>

                    <p className="font-sans text-sm sm:text-base text-white/80 font-light">
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
                  bg-[#D4AF37]
                  px-8
                  py-4
                  font-sans
                  text-xs sm:text-sm
                  uppercase
                  tracking-widest
                  font-semibold
                  text-[#140A20]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]
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