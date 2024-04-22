import React from "react";
import { client } from "../components/export";
import TestimonialCard from "../components/TestimonialCard";

const Clients = ( {darkMode}) => {
  return (
    <section id="testimonials" className={`py-[100px] px-20 ${darkMode? "bg-black" : "  "}`}>
      <div>
        <div className="flex flex-col mb-10 gap-3">
          <p className="text-3xl font-semibold text-red-500 ">TESTIMONIALS</p>
          <h1   className="text-4xl mb-5 font-semibold max-w-[400px]" >What our Clients Are are Saying About Us</h1>
        </div>
        <div className="grid-cols-3 grid max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10">
          {client.map((client) => (
            <TestimonialCard  darkMode={darkMode} {...client} />
          ))}
        </div>
      </div>
    </section>
  
  );
};

export default Clients;
