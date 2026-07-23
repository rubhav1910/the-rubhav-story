type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <p className="uppercase tracking-[8px] text-sm text-[var(--royal-lavender)]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl md:text-6xl text-[var(--foreground)]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}