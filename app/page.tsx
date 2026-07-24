import Invitation from "./components/Invitation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Celebrations from "./components/Celebrations";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Invitation />

      <Navbar />

      <Hero />

      <Countdown />

      <Celebrations />

      <Venue />

      <Gallery />

      <RSVP />

      <Footer />
      
    </main>
  );
}