import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, text, feedback }) => {
  return (
    <div
      data-aos
      className="flex flex-col gap-5 border-2 rounded-2xl p-5 border-red-500 "
    >
      <div className="flex gap-5 items-center max-lg:flex-col">
        <img src={image} width={100} alt="" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold ">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      <p className="max-w-[300px]">{feedback}</p>

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
