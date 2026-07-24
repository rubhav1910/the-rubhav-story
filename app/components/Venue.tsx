import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Venue() {
  return (
    <FadeUp delay={0.3}>
    <section
      id="venue"
      className="
        py-24
        bg-[radial-gradient(circle_at_top,#F4ECFC_0%,#E9DDF7_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <p className="section-subtitle">
            Venue
          </p>

          <h2 className="section-title mt-5">
            Join Us In Ajmer
          </h2>

          <div className="gold-divider mt-8" />

        </div>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">

          {/* Content */}

          <div>

            <p className="text-sm uppercase tracking-[5px] text-[var(--gold)]">
              Wedding Venue
            </p>

            <h3 className="mt-3 font-serif text-5xl text-[var(--royal)]">
              Ajmer Bagh
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              We warmly invite you to celebrate our special day
              amidst the elegance and charm of Ajmer Bagh,
              surrounded by family, friends and unforgettable memories.
            </p>

            <div className="mt-8">

              <p className="font-medium text-[var(--foreground)]">
                Ajmer, Rajasthan
              </p>

            </div>

            <a
              href="https://maps.app.goo.gl/dd96LegbN69FmPDH6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                rounded-full
                px-8
                py-4
                btn-gold
              "
            >
              📍 Get Directions
            </a>

          </div>

          {/* Image */}

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/Images/venue.jpg"
              alt="Ajmer Bagh"
              width={900}
              height={700}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>
    </section>
    </FadeUp>
  );
}