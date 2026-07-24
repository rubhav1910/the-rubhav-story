import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Venue() {
  return (
    <FadeUp delay={0.3}>
      <section
        id="venue"
        className="relative overflow-hidden py-24 bg-gradient-to-b from-[#F7F2FB] via-[#EFE4F8] to-[#F8F4FC]"
      >
        {/* Background Glow */}
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[0.45em] text-sm text-[#C79B42]">
              Venue
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-6xl text-[#4C335F]">
              Join Us In Ajmer
            </h2>

            <div className="mx-auto mt-8 h-px w-24 bg-[#C79B42]/60" />

          </div>

          <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

            {/* Image */}

            <div className="overflow-hidden rounded-[36px] shadow-2xl">

              <Image
                src="/Images/venue.jpg"
                alt="Ajmer Bagh"
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Card */}

            <div className="rounded-[36px] border border-[#D4AF37]/20 bg-white/70 p-10 backdrop-blur-xl shadow-xl">

              <p className="uppercase tracking-[0.35em] text-sm text-[#C79B42]">
                Wedding Venue
              </p>

              <h3 className="mt-4 font-serif text-5xl text-[#4C335F]">
                Ajmer Bagh
              </h3>

              <p className="mt-8 leading-8 text-gray-700">
                We warmly invite you to celebrate our wedding amidst the elegance
                of Ajmer Bagh, where every corner will be filled with love,
                laughter and unforgettable memories.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-start gap-4">

                  <span className="text-2xl">📍</span>

                  <div>

                    <p className="font-semibold text-[#4C335F]">
                      Location
                    </p>

                    <p className="text-gray-600">
                      Ajmer Bagh, Ajmer, Rajasthan
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <span className="text-2xl">🗓️</span>

                  <div>

                    <p className="font-semibold text-[#4C335F]">
                      Wedding Dates
                    </p>

                    <p className="text-gray-600">
                      24 & 25 January 2027
                    </p>

                  </div>

                </div>

              </div>

              <a
                href="https://maps.app.goo.gl/dd96LegbN69FmPDH6"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-12
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(212,175,55,.4)]
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