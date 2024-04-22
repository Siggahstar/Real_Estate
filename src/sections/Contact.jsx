import React from "react";
import "aos/dist/aos.css";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`${darkMode ? "bg-black" : "bg-red-100 p-10"}`}
    >
      <div  className={`flex justify-center gap-10 p-10 max-lg:flex-col max-lg:items-center`}>
        <div 
          data-aos="fade-up" data-aos-delay="200"
          className={`flex flex-col gap-4 p-10 justify-center ${
            darkMode ? "bg-slate-900 text-w" : "bg-white"
          }  w-[600px] max-lg:w-[400px] rounded-lg`}
        >
          <p className={darkMode ? "text-white text-lg " : "text-lg"}>
            {" "}
            Message us now
          </p>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="border-2 p-3 rounded-md "
          />
          <input
            type="text"
            placeholder="enter your email"
            className="border-2 p-3 rounded-md "
          />
          <input
            type="text"
            placeholder="enter your mobile number here"
            className="border-2 p-3 rounded-md "
          />
          <input
            type="text"
            placeholder="enter your message"
            className="border-2 px-3 rounded-md h-[200px]  mt-1 pb-[160px] "
          />
          <button className="bg-red-500 rounded-md p-3 "> SEND MAIL</button>
        </div>
        <div

data-aos="fade-up" data-aos-delay="400"
          className={`flex flex-col justify-center gap-5 ${
            darkMode ? "text-white" : ""
          }  `}
        >
          <p className="text-3xl font-semibold text-red-500 ">REACH US</p>
          <h1 className="text-4xl mb-5 font-semibold max-w-[400px]">
            {" "}
            Get in touch with us today and our team will assist you
          </h1>
          <p className="max-w-[350px]">
            Our experts and developers would love to contribute their expertise
            and insights and help you today. Contact us to help you plan your
            next transaction, either buying or selling a home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
