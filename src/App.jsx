import React from "react";
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
  const [darkMode, setDarkMode]= useState(false);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }

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
    <div>
      <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Hero  toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <About toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <PopularAreas toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Properties addToCard={addToCard} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <CardPage card={card} onDeleteFromCard={deleteFromcard} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Services toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Clients  toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Contact toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
     
   </div>
  );
}

