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
        bg-gradient-to-r
from-[#E5C66F]
via-[#D4AF37]
to-[#B98B24]
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