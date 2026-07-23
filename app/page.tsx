import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Story from "./components/Story";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <Hero />

      <Countdown />

      <Story />
    </main>
  );
}