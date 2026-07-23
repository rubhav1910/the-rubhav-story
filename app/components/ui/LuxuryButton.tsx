type LuxuryButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LuxuryButton({
  children,
  className = "",
}: LuxuryButtonProps) {
  return (
    <button
      className={`
        rounded-full
        bg-[var(--champagne-gold)]
        px-8
        py-3
        font-medium
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        hover:brightness-110
        ${className}
      `}
    >
      {children}
    </button>
  );
}