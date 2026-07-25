'use client';

import Image from 'next/image';

export default function Story() {
  return (
    <section id="story" className="py-20 px-6 bg-[#0b1315] text-[var(--ivory)] relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[var(--gold)] font-medium">
            CHAPTERS OF LOVE
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[var(--ivory)]">
            Our Story
          </h2>
          <div className="my-4 h-[1px] w-20 bg-[var(--gold)] opacity-60 mx-auto" />
        </div>

        {/* Content Layout - Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Story Image Frame */}
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[var(--gold)]/30 shadow-2xl">
            <Image
              src="/Images/hero.jpg" // Aap yahan story image path change kar sakte hain
              alt="Vaibhav and Ruchita Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Story Text */}
          <div className="space-y-6 text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--gold)] italic">
              How It All Began...
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Two souls brought together by destiny, laughter, and endless conversations. What started as a simple connection grew into a lifelong promise of love, togetherness, and cherished memories.
            </p>

            <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              As we prepare to begin our greatest adventure yet, we invite you to celebrate this beautiful chapter of our lives as we walk down the aisle.
            </p>

            <div className="pt-4">
              <p className="font-serif text-xl text-[var(--gold)] italic">
                — Vaibhav & Ruchita
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}