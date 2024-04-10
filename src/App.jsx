import React from "react";
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
import { useState } from "react";
import CardPage from "./components/CardPage";

export default function App() {
  const [card, setCard] = useState([]);

  const addToCard = (property) => {
    setCard([...card, property]);
  };

  const deleteFromcard = (propertyName) => {
    const updatedCard = card.filter(
      (property) => property.name !== propertyName
    );

    setCard(updatedCard);
  };

  return (
    <DarkModeProvider>
      <Nav />
      <Hero />
      <About />
      <PopularAreas />
      <Properties addToCard={addToCard} />
      <CardPage card={card} onDeleteFromCard={deleteFromcard} />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}
