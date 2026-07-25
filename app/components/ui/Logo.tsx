export default function Logo() {
  return (
    <div className="flex items-center gap-4 select-none">
      {/* Monogram - Size increased here */}
      <div className="relative flex h-20 w-20 items-center justify-center">

        <span
          className="
            absolute
            left-1
            top-1
            font-serif
            text-6xl
            italic
            font-semibold
            text-[var(--champagne-gold)]
          "
        >
          V
        </span>

        <span
          className="
            absolute
            right-1
            bottom-0
            font-serif
            text-6xl
            italic
            font-semibold
            text-white
          "
        >
          R
        </span>

      </div>

      {/* Text */}
      <div className="leading-tight">

        <h1
          className="
            font-serif
            text-2xl
            md:text-3xl
            tracking-[0.28em]
            text-white
          "
        >
          THE RUBHAV STORY
        </h1>

        <p
          className="
            mt-1
            text-xs
            md:text-sm
            uppercase
            tracking-[0.45em]
            text-white/75
          "
        >
          Vaibhav & Ruchita
        </p>

      </div>
    </div>
  );
}