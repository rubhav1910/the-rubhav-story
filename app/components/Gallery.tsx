import Image from "next/image";

const images = [
  "/Images/gallery1.jpg",
  "/Images/gallery2.jpg",
  "/Images/gallery3.jpg",
  "/Images/gallery4.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[var(--ivory)] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="section-subtitle">
            Our Journey
          </p>

          <h2 className="section-title mt-5">
            Captured Moments
          </h2>

          <div className="gold-divider mt-8" />

        </div>

        {/* Gallery */}

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

          {images.map((image, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[28px]
                shadow-lg
              "
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={700}
                height={900}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}