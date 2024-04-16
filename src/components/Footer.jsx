import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSpinner,
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-10 bg-slate-900  p-20 max-lg:p-5 justify-around">
      <div className="flex  flex-col gap-7">
        <h1 className="text-white text-2xl ">About Us</h1>
        <p className="max-w-[300px] text-white ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
          placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum
          sit repellendus nulla?
        </p>
        <div className="flex gap-3">
          <div className="bg-white p-2 rounded-xl  ">
            <FaFacebook size={30} />
          </div>
          <div className="bg-white p-2 rounded-xl">
            <FaInstagram size={30} />{" "}
          </div>
          <div className="bg-white p-2 rounded-xl">
            <FaTwitter size={30} />
          </div>
          <div className="bg-white p-2 rounded-xl">
            <FaYoutube size={30} />
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col gap-5">
        <h1>Contact Us</h1>
        <div className="flex items-center">
          <div><FaLocationArrow size={30} /></div>
          <p>Buea cameroon bomaka</p>
        </div>
        <div className="flex items-center">

        <div><FaEnvelope size={30}/></div>
          <p>+237 676697868</p>
        </div>
        <div className="flex items-center">
        <div><FaPhone size={30}/></div>
          <p>+237 676697868</p>
        </div>
        <div className="flex items-center">
        <div><FaEnvelope size={30}/></div>
          <p>fonjidaniel@gmail.com</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
