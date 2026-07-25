import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#140A20]"
    >
      {/* Background Image */}
      <Image
        src="/Images/hero.jpg"
        alt="Vaibhav & Ruchita"
        fill
        priority
        className="object-cover object-[80%_center] sm:object-[75%_center] md:object-center"
      />

      {/* Subtle Velvet Purple Overlay */}
      <div className="absolute inset-0 bg-[#140A20]/40" />

      {/* Left Velvet Gradient Shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#140A20] via-[#140A20]/75 to-transparent w-full md:w-3/4" />

      {/* Bottom Gradient Shadow for Blessings readability */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0A0510] via-[#140A20]/80 to-transparent z-[5]" />

      {/* Royal Glow Effect */}
      <div className="absolute top-1/4 left-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[150px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-start pt-28 sm:pt-36 pb-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-lg lg:max-w-xl">
            
            {/* Top Ornamental Flourish */}
            <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
              <span className="text-xs">✦ ❦ ✦</span>
            </div>

            {/* Sub-heading */}
            <p className="mb-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.35em] md:tracking-[0.45em] text-[#F3D98D] font-medium">
              THE RUBHAV STORY
            </p>

            {/* Couple Names */}
            <h1 className="font-serif leading-[1.05] text-white">
              <span className="block text-4xl sm:text-6xl md:text-7xl font-light tracking-wide">
                Vaibhav
              </span>

              <span className="my-1 block text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] font-serif italic">
                &
              </span>

              <span className="block text-4xl sm:text-6xl md:text-7xl font-light tracking-wide">
                Ruchita
              </span>
            </h1>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px w-20 sm:w-28 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-80" />
              <span className="text-[#D4AF37] text-xs">◆</span>
            </div>

            {/* Date */}
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#F3D98D] font-medium">
              24 • 25 January 2027
            </p>

          </div>
        </div>
      </div>

      {/* Parents' Blessings - Bottom Center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-center w-full max-w-md px-4">
        <p className="font-serif italic text-[11px] sm:text-xs text-[#F3D98D] mb-1 font-light">
          With the blessings of
        </p>
        <div className="space-y-[2px] text-[10px] sm:text-xs text-white/90 font-light tracking-wide">
          <p>Late Shri Narendra Narayan Mathur & Prabha Mathur</p>
          <p className="text-[9px] text-[#D4AF37]/70">• & •</p>
          <p>Vikas Tandon & Vidhi Tandon</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-[#D4AF37] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 opacity-80"
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