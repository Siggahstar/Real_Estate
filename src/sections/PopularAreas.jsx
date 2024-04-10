import React from "react";
import img1 from "../assets/images/area1.jpg";
import img2 from "../assets/images/area2.jpg";
import img3 from "../assets/images/area3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
  return (
    <section className=" bg-red-100 my-20 mx-10 px-20 max-lg:px-5  max-lg:mx-0 py-20">
      <div>
        <div className="flex justify-between max-lg:flex-col gap-5 items-center">
          <div className="flex flex-col gap-5">
            <p data-aos="fade-right" className="text-lg text-red-500 ">
              POPULAR AREAS
            </p>
            <h1 data-aos="fade-right" className="text-4xl font-semibold ">
              Explore most Popular Areas
            </h1>
          </div>
          <div
            data-aos="fade-left"
            className="flex max-lg:flex-col flex-wrap gap-5 flex-1"
          >
            <img
              data-aos="zoom-in"
              className="rounded-2xl max-lg:w-[100vw] max-lg:h-[500px]"
              width={250}
              src={img1}
              alt=""
            />
            <img
              className="rounded-2xl max-lg:w-full max-lg:h-[500px]"
              width={250}
              src={img2}
              alt=""
            />
            <img
              className="rounded-2xl max-lg:w-full max-lg:h-[500px]"
              width={250}
              src={img3}
              alt=""
            />
          </div>
        </div>
        <div className="flex max-lg:flex-col max-lg:items-center gap-4  justify-around pt-20">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex items-center gap-7"
          >
            <h1 className="text-7xl font-semibold ">5K</h1>
            <div className="flex flex-col">
              <p className=" ">ACTIVE</p>
              <p>LISTINGS</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex  items-center gap-7"
          >
            <h1 className="text-7xl font-semibold ">6K</h1>
            <div className="flex flex-col">
              <p className=" ">CLIENTS</p>
              <p>WE'VE SERVED</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex items-center gap-7"
          >
            <h1 className="text-7xl font-semibold ">9K</h1>
            <div className="flex flex-col">
              <p className=" ">SOLID</p>
              <p>LISTINGS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularAreas;
