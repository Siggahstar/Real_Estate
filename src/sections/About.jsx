import React from "react";
import aboutimg from "../assets/images/about.jpg";

const About = () => {
  return (
    <div className="">
      <section id="about" className="pt-10 max-lg:mt-[400px] max-sm:mt-[500px]">
        <div className="flex justify-center gap-20 lg:mt-20 max-lg:flex-col  max-lg:items-center lg:px-5 max-lg:px-10">
          <div>
            <img
              data-aos="zoom-in"
              className="rounded-2xl max-lg:w-full"
              src={aboutimg}
              width={500}
              height={400}
              alt=""
            />
          </div>
          <div className="flex-col flex gap-10 items-start  lg:mt-20">
            <p data-aos="zoom-in" className="text-6xl font-semibold ">
              Who We Are{" "}
            </p>
            <h1 data-aos="zoom-in" className="text-4xl text-orange-400">
              We Help Clients launch Houses since 2020
            </h1>
            <p data-aos="zoom-in" className="max-w-[500px] max-lg:max-w-[5000px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              commodi iure at nihil id maiores! Dolores hic suscipit mollitia
              repellendus ratione? Nam ipsam numquam fugit ipsa natus fugiat
              eveniet unde.
            </p>
            <button  data-aos="fade-left" className="bg-orange-500 py-3 px-7 rounded-md text-"> VIEW MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
