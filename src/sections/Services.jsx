import React from "react";
import { services } from "../components/export";
import ServiceCard from "../components/ServiceCard";

const Services = ({darkMode}) => {
  return (
    <div className={darkMode? "bg-black" : "bg-white"}>
    <section
      id="services"
      className={` mx-8 py-20 px-20 max-sm:p-10 max-lg:m-1 ${darkMode? "text-white  bg-black" : "bg-red-50"}`}
    >
      <div className="flex flex-col justify-between gap-7 ">
        <div>
          <p className="text-red-500 text-2xl ">OUR SERVICES</p>
          <h2   className="text-4xl mb-5 font-semibold max-w-[400px]">Top real estate services available</h2>
        </div>
        <div className="grid-cols-3 grid gap-5 max-sm:grid-cols-1 max-lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard darkMode={darkMode} {...service}  />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;
