import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/Images/hero.jpg"
        alt="Vaibhav & Ruchita"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-20 flex max-w-3xl flex-col items-center px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[8px] text-white/80">
          THE RUBHAV STORY
        </p>

        <h1 className="text-white leading-none">
          <span className="block text-6xl md:text-8xl">Vaibhav</span>

          <span className="my-3 block text-5xl text-[#D4B26A]">&</span>

          <span className="block text-6xl md:text-8xl">Ruchita</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-white/90">
          Every love story is beautiful.
          <br />
          Ours is our favourite.
        </p>

        <button
          className="mt-10 rounded-full bg-[#D4B26A] px-10 py-4 font-semibold text-black shadow-xl transition hover:scale-105 hover:bg-[#E3C27B]"
        >
          Begin The Celebration
        </button>

        <p className="mt-6 text-[#D4B26A] tracking-[3px]">
          24 • 25 January 2027
        </p>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-white">
        ↓
      </div>
    </section>
  );
}