import FadeUp from "./FadeUp";

export default function Celebrations() {
  const dayOne = [
    {
      time: "01:00 PM",
      title: "Ring Ceremony",
      desc: "Where our forever begins.",
    },
    {
      time: "07:00 PM",
      title: "Sangeet Soirée",
      desc: "An evening of music, dance & celebration.",
    },
  ];

  const weddingDay = [
    {
      time: "10:30 AM",
      title: "Auspicious Mahurat",
      desc: "Sacred rituals commence.",
    },
    {
      time: "01:00 PM",
      title: "Haldi Ceremony",
      desc: "Blessings in shades of gold.",
    },
    {
      time: "06:30 PM",
      title: "Baraat Procession",
      desc: "The groom's grand arrival.",
    },
    {
      time: "07:30 PM",
      title: "Reception & Dinner",
      desc: "Dinner, joy & heartfelt wishes.",
    },
    {
      time: "Midnight",
      title: "Sacred Pheras",
      desc: "Seven vows for a lifetime.",
    },
  ];

  return (
    <FadeUp delay={0.2}>
    <section
      id="celebrations"
      className="py-24 bg-[linear-gradient(180deg,#EFE2FA,#E6D5F8)]"
    >
      <div className="mx-auto max-w-3xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="section-subtitle">
            Wedding Itinerary
          </p>

          <h2 className="section-title mt-5">
            The Celebration Awaits
          </h2>

          <div className="gold-divider mt-8" />

        </div>

        {/* Day One */}

        <div className="mt-20">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-xs text-[var(--gold)]">
              Day One
            </p>

            <h3 className="mt-3 font-serif text-4xl text-[var(--royal)]">
              24 January 2027
            </h3>

          </div>

          <div className="mt-14 space-y-12">

            {dayOne.map((event) => (
              <div
                key={event.title}
                className="text-center"
              >
                <p className="text-xs uppercase tracking-[4px] text-[var(--gold)]">
                  {event.time}
                </p>

                <h4 className="mt-2 font-serif text-3xl text-[var(--foreground)]">
                  {event.title}
                </h4>

                <p className="mt-3 text-gray-600 italic">
                  {event.desc}
                </p>

                <div className="gold-divider mt-10" />

              </div>
            ))}

          </div>

        </div>

        {/* Wedding Day */}

        <div className="mt-24">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-xs text-[var(--gold)]">
              Wedding Day
            </p>

            <h3 className="mt-3 font-serif text-4xl text-[var(--royal)]">
              25 January 2027
            </h3>

          </div>

          <div className="mt-14 space-y-12">

            {weddingDay.map((event, index) => (
              <div
                key={event.title}
                className="text-center"
              >
                <p className="text-xs uppercase tracking-[4px] text-[var(--gold)]">
                  {event.time}
                </p>

                <h4 className="mt-2 font-serif text-3xl text-[var(--foreground)]">
                  {event.title}
                </h4>

                <p className="mt-3 text-gray-600 italic">
                  {event.desc}
                </p>

                {index !== weddingDay.length - 1 && (
                  <div className="gold-divider mt-10" />
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
    </FadeUp>
  );
}