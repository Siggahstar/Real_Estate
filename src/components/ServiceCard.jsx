import React from "react";
const ServiceCard = ({ icon, desc, title }) => {
  const IconComponent = icon;
  return (
    <div className="flex flex-col justify-center bg-white gap-4 p-9 rounded-xl border-b-4 border-red-500">
      <div className="bg-red-200 w-20 p-4 rounded-full ">
        {" "}
        <IconComponent size="45" color="" />
      </div>
      <icon />

      <p className="font-semibold text-lg ">{title}</p>
      <p>{desc}</p>
      <a className="underline hover:text-red-400" href="">
        {" "}
        READ MORE
      </a>
    </div>
  );
};

export default ServiceCard;
