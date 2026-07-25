import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image - with updated positioning */}
      <Image
        src="/Images/hero.jpg"
        alt="Vaibhav & Ruchita"
        fill
        priority
        className="object-cover object-[80%_center] sm:object-[75%_center] md:object-center"
      />

      {/* Subtle Overall Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left Gradient Shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-full md:w-3/4" />

      {/* Main Content - Pushed up with flex positioning */}
      <div className="relative z-10 flex min-h-screen items-start pt-24 pb-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-lg lg:max-w-xl">
            
            {/* Sub-heading */}
            <p className="mb-3 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.35em] md:tracking-[0.45em] text-[var(--gold)] font-medium">
              Together with their Families
            </p>

            {/* Couple Names - Refined Sizes */}
            <h1 className="font-serif leading-[1.05] text-[var(--ivory)]">
              <span className="block text-4xl sm:text-6xl md:text-7xl font-light tracking-wide">
                Vaibhav
              </span>

              <span className="my-1 sm:my-2 block text-3xl sm:text-4xl md:text-5xl text-[var(--gold)] font-serif italic">
                &
              </span>

              <span className="block text-4xl sm:text-6xl md:text-7xl font-light tracking-wide">
                Ruchita
              </span>
            </h1>

            {/* Divider */}
            <div className="my-5 h-[1px] w-24 sm:w-32 bg-[var(--gold)] opacity-70" />

            {/* Date */}
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] md:tracking-[0.35em] text-[var(--gold)] font-medium">
              24 • 25 January 2027
            </p>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[var(--gold)] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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