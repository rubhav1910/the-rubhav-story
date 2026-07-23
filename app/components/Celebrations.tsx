const events = [
  {
    icon: "💍",
    title: "Roka Ceremony",
    date: "26 June 2026",
    status: "Completed",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "💛",
    title: "Haldi",
    date: "24 January 2027",
    status: "Upcoming",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "🌿",
    title: "Mehendi",
    date: "24 January 2027",
    status: "Upcoming",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: "🎶",
    title: "Sangeet",
    date: "24 January 2027",
    status: "Upcoming",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: "❤️",
    title: "Wedding",
    date: "25 January 2027",
    status: "The Big Day",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: "✨",
    title: "Reception",
    date: "25 January 2027",
    status: "Celebration",
    color: "bg-indigo-100 text-indigo-700",
  },
];

export default function Celebrations() {
  return (
    <section
      id="celebrations"
      className="bg-[#FBF8F3] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[6px] text-[#8F79B8] text-sm">
          WEDDING CELEBRATIONS
        </p>

        <h2 className="mt-4 text-center text-5xl md:text-6xl text-[#2B2B2B]">
          Every Celebration Has A Story
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
          Join us as we celebrate each beautiful moment leading up to the
          beginning of our forever.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.title}
              className="
                group
                rounded-3xl
                border
                border-[#D4B26A]/20
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              <div className="text-5xl">
                {event.icon}
              </div>

              <h3 className="mt-6 text-3xl">
                {event.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {event.date}
              </p>

              <span
                className={`mt-6 inline-block rounded-full px-4 py-2 text-sm font-medium ${event.color}`}
              >
                {event.status}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}