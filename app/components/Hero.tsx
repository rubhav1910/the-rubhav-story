import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Vaibhav and Ruchita"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/55" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <p className="uppercase tracking-[8px] text-white/80 text-sm mb-5">
          THE RUBHAV STORY
        </p>

        <h1 className="text-white text-6xl md:text-8xl font-serif leading-tight">
          Vaibhav
          <br />
          <span className="text-[#E9C46A]">&</span>
          <br />
          Ruchita
        </h1>

        <p className="mt-8 text-white/90 text-lg max-w-xl">
          Every love story is beautiful,
          <br />
          but ours is our favourite.
        </p>

        <div className="mt-10 border border-[#E9C46A] rounded-full px-8 py-3 text-[#E9C46A] backdrop-blur-md">
          24 • 25 January 2027
        </div>

        <div className="absolute bottom-10 text-white/70 animate-bounce">
          ↓ Scroll
        </div>

      </div>

    </section>
  );
}