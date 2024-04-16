import React from "react";
const ServiceCard = ({ icon, desc, title , darkMode}) => {
  const IconComponent = icon;
  return (
    <div className={`flex flex-col justify-center gap-4 p-9 rounded-xl border-b-4 border-red-500  ${darkMode? "bg-slate-900 text-white" : "bg-red-100"}`}>
      <div className={` w-20 p-4 rounded-full ${darkMode? "bg-slate-800" : "bg-red-200"}`}>
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
