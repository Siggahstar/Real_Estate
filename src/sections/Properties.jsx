import React from "react";
import PropertyCard from "../components/PropertyCard";
import { property } from "../components/export";

const Properties = ({ addToCard, darkMode }) => {
  return (
    <div className={darkMode? "bg-black text-white" : ""}>
    <section id="properties" className="lg:px-[50px] py-20 px-10 ">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-start gap-4">
          <p data-aos="fade-down" className="text-red-500 text-2xl ">
            PROPERTIES
          </p>
          <h1
            data-aos="fade-right"
            data-aos-delay="600"
            className="text-4xl mb-5 font-semibold max-w-[400px]"
          >
            Explore The Latest Properties Available
          </h1>
        </div>
        <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {property.map((prop) => (
            <PropertyCard addToCard={addToCard} property={prop} darkMode={darkMode} />
          ))}
        </div>

        <div className="flex justify-center gap-5">
          <button
            data-aos="fade-up"
            data-aos-delay="300"
            className="px-5 bg-red-500 rounded-md py-2 mt-10 text-white text-2xl font-semibold"
          >
            {" "}
            Load More
          </button>
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="px-5 bg-red-500 rounded-md py-2 mt-10 text-white text-2xl font-semibold"
          >
            {" "}
            View Card
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Properties;