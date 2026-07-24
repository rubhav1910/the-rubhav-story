export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="
        py-24
        bg-[linear-gradient(135deg,#6C3FA5_0%,#7C55B2_100%)]
      "
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="uppercase tracking-[6px] text-sm text-[#E8D29B]">
          RSVP
        </p>

        <h2 className="mt-5 font-serif text-5xl md:text-6xl text-white">
          We'd Love To Celebrate
          <br />
          With You
        </h2>

        <div className="mx-auto mt-8 h-px w-24 bg-[#E8D29B]/60" />

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/90">
          Your presence will make our celebration even more special.
          Kindly let us know if you'll be joining us on our big day.
        </p>

        <a
          href="https://wa.me/917014164334?text=Hello%20Vaibhav%20%26%20Ruchita,%20we%20are%20excited%20to%20join%20your%20wedding%20celebration!"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            inline-flex
            items-center
            rounded-full
            bg-[var(--gold)]
            px-10
            py-4
            text-lg
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-2xl
          "
        >
          RSVP on WhatsApp
        </a>

        <p className="mt-8 text-white/80">
          Vaibhav &amp; Ruchita
        </p>

        <p className="mt-2 text-sm tracking-[3px] uppercase text-[#E8D29B]">
          +91 70141 64334
        </p>

      </div>
    </section>
  );
}