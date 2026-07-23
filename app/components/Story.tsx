export default function Story() {
  const timeline = [
    {
      year: "2018",
      title: "Where It All Began",
      description:
        "Two paths crossed, beginning a journey that neither of us knew would become forever.",
    },
    {
      year: "2019",
      title: "Best Friends",
      description:
        "Friendship became the strongest foundation of our relationship, filled with laughter and unforgettable memories.",
    },
    {
      year: "2026",
      title: "The 'Yes' Moment 💍",
      description:
        "A beautiful promise, surrounded by our families, marking the beginning of our forever.",
    },
    {
      year: "2027",
      title: "Forever Begins ❤️",
      description:
        "The next chapter of our story starts as we become husband and wife.",
    },
  ];

  return (
    <section
      id="story"
      className="bg-[#FFFDF9] py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-center uppercase tracking-[6px] text-[#8F79B8] text-sm">
          OUR STORY
        </p>

        <h2 className="mt-4 text-center text-5xl md:text-6xl text-[#2B2B2B]">
          A Journey Written by Destiny
        </h2>

        <div className="relative mt-24">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-[#D4B26A]/30 md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative mb-20 flex ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Dot */}
              <div className="absolute left-5 z-10 h-5 w-5 rounded-full bg-[#D4B26A] md:left-1/2 md:-translate-x-1/2" />

              <div className="ml-16 rounded-3xl bg-white p-8 shadow-xl md:ml-0 md:w-[45%]">
                <p className="text-[#8F79B8] font-semibold">
                  {item.year}
                </p>

                <h3 className="mt-2 text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}