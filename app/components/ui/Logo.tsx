export default function Logo() {
  return (
    <div className="flex items-center gap-4 select-none">
      {/* Monogram */}
      <div className="relative flex h-16 w-16 items-center justify-center">

        <span
          className="
            absolute
            left-1
            top-1
            font-serif
            text-5xl
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
            text-5xl
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
            tracking-[0.28em]
            text-white
          "
        >
          THE RUBHAV STORY
        </h1>

        <p
          className="
            mt-1
            text-sm
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