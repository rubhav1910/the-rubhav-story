import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/Images/hero.jpg"
        alt="Vaibhav & Ruchita"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-start pt-36 md:pt-44">
        <div className="mx-auto w-full max-w-7xl px-8 md:px-14">

          <div className="max-w-xl">

            {/* New Heading */}
            <p className="mb-8 text-xs md:text-sm uppercase tracking-[0.45em] text-[var(--gold)]">
              Together with their Families
            </p>

            {/* Couple Names */}
            <h1 className="font-serif leading-[0.95] text-[var(--ivory)]">

              <span className="block text-5xl md:text-8xl">
                Vaibhav
              </span>

              <span className="my-3 block text-4xl md:text-5xl text-[var(--gold)]">
                &
              </span>

              <span className="block text-5xl md:text-8xl">
                Ruchita
              </span>

            </h1>

            {/* Divider */}
            <div className="mt-8 h-px w-32 bg-[var(--gold)] opacity-60" />

            {/* Date */}
            <p className="mt-8 text-sm md:text-base uppercase tracking-[5px] text-[var(--gold)]">
              24 • 25 January 2027
            </p>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 animate-bounce text-[var(--gold)]">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.6}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>

      </div>
    </section>
  );
}