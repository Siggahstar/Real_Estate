import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-white "}`}>
      <section
        className="mx-10  w-[95%] gap-[500px] max-sm:mx-4 max-lg:px-5 flex-cols pt-28 h-[600px]  rounded-md max-lg:pb-[50px] px-[100px] mb-20 max"
        id="hero"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="flex flex-col gap-10 ">
          <h1
            data-aos="zoom-in"
            className="text-7xl font-semibold max-lg:text-5xl max-lg:max-w-[1000px] max-w-[800px] text-white"
          >
            Find Your Next Guest House In Buea
          </h1>
          <p data-aos="zoom-in" className="text-white text-2xl max-w-[700px] ">
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="flex mt-[150px] bg-slate-200 shadow-xl  max-lg:gap-4 gap-20 max-lg:flex-col justify-center flex-wrap  max-lg:w-full rounded-md  p-5 "
        >
          <div className="flex gap-1 flex-col ">
            <label className="ml-3" htmlFor="address">
              Address
            </label>
            <input
              className="p-3 border-1 border-white"
              id="address"
              placeholder="Enter an address, region or city "
            ></input>
          </div>
          <div className=" flex-col gap-1 flex">
            <label className="ml-3" htmlFor="guesthouse">
              Guest Houses
            </label>
            <select
              className=" border-b-4 p-2 border-orange-500 "
              name="guesthouses"
              id="guesthouse"
            >
              <option className="hidden" value="">
                Select Guest house
              </option>
              <option value="">Akardhouse</option>
              <option value="">Mountain Hotel</option>
              <option value="">Hotel st Clair</option>
            </select>
          </div>
          <div className=" flex-col gap-1 flex">
            <label className="ml-3" htmlFor="category">
              Gategory
            </label>
            <select
              className=" border-b-4 p-2 border-orange-500 "
              name="guesthouses"
              id="category"
            >
              <option className="hidden" value="">
                Choose Category
              </option>
              <option value="">single room</option>
              <option value="">Studio</option>
              <option value="">Aparment</option>
            </select>
          </div>
          <div>
            <button className="bg-orange-600 px-20 cursor-pointer hover:bg-orange-300 transform transition-transform  py-7 rounded-md">
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
