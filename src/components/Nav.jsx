import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { navlinks } from './export'
import { FaPhone, FaEnvelope,FaBars,FaTimes } from 'react-icons/fa';



const Nav = () => {

  
const [isOpen , setIsOpen ] = useState(false)

const toggleMenu = () => {
  setIsOpen(!isOpen)
}

  return (
    <>
      <div className="flex justify-around p-4 items-center bg-slate-50 sticky max-lg:justify-between top-0 z-10 w-full pb-1 px-3">
        <div>
          <img width={100} src={logo} alt="logo image" />
        </div>
        <div>
          <div className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes color="red" size={30} />
            ) : (
              <FaBars color="red" size={30} />
            )}
          </div>
        </div>
        <div className="flex gap-10 max-lg:hidden items-center  font-semibold  text-lg ">
          {navlinks.map((nav, index) => (
            <ul>
              <li>
                <a key={index} href={nav.href}>
                  {nav.label}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="flex justify-between items-center  gap-4  text-lg font-bold ">
          <FaPhone color="red" size={30} />
          <p>+237 673213831</p>
          <FaEnvelope color="red" size={30} />
        </div>
      </div>
      <div
        className="mx-2 my-2 bg-blue-900 flex flex-col w-[100vw] text-lg text-white font-semibold lg:hidden items-center absolute top-[61px] z-10
    "
      >
        {isOpen
          ? navlinks.map((nav, index) => (
              <ul>
                <li>
                  <a key={index} href={nav.href}>
                    {nav.label}
                  </a>
                </li>
              </ul>
            ))
          : null}
      </div>
    </>
  );
}

export default Nav