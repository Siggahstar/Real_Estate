import React from "react";
import { client } from "../components/export";
import TestimonialCard from "../components/TestimonialCard";

const Clients = () => {
  return (
    <section className="m-10 p-10 ">
      <div>
        <div className="flex flex-col mb-10 gap-3">
          <p className="text-lg font-semibold text-red-300">TESTIMONIALS</p>
          <h1>What our Clients Are are Saying About Us</h1>
        </div>
        <div className="grid-cols-3 grid gap-10">
          {client.map((client) => (
            <TestimonialCard {...client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
