import React from "react";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";

const TestimonialCard = ({ image, name, text, feedback , darkMode}) => {
  return (
    <div
      data-aos="fade-left"
      className={`flex flex-col gap-5 border-2 rounded-2xl p-5 ${darkMode? "bg-slate-900 text-white border-none" : " "} border-red-500`}
    >
      <div className="flex gap-5 items-center max-lg:flex-col">
        <img src={image} width={100} alt="" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold ">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      <p className="lg:max-w-[300px] ">{feedback}</p>

      <div className="flex text-red-500 gap-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
};

export default TestimonialCard;
