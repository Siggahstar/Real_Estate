import { DarkModeProvider } from "./components/DarkModeContext";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Services from "./sections/Services";

export default function App() {
  return (
    <>
      <DarkModeProvider>
          <Nav />
          <Hero />
          <About />
          <PopularAreas />
          <Properties />
          <Services />
          <Clients />
          <Contact />
          <Footer />

      </DarkModeProvider>
    </>
  );
}
