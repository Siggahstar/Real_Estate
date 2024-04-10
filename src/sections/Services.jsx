import React from "react";
import { services } from "../components/export";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-red-50 mx-8 py-20 px-20 max-sm:p-10 max-lg:m-1"
    >
      <div className="flex flex-col justify-between gap-7 ">
        <div>
          <p>OUR SERVICES</p>
          <h2>Top real estate services available</h2>
        </div>
        <div className="grid-cols-3 grid gap-5 max-sm:grid-cols-1 max-lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
