import Image from "next/image";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <section>
      <nav className="bg-[#09152E] p-2 font-nunito shadow-lg rounded-b-lg md:rounded-b-xl">
        <div className=" md:max-w-7xl mx-auto flex  justify-between items-center ">
          <div className="flex justify-center items-center space-x-2 ">
            <div className="p-0.5 rounded-full bg-white flex items-center hover:animate-slowSpin">
              <Image
                src="/logo.svg"
                alt="logo for joyyers.com"
                height={50}
                width={50}
                layout="intrinsic"
              />
            </div>
            <h1 className="uppercase cursor-pointer text-green-400 font-semibold first-letter:text-3xl first-letter:italic first-letter:font-extrabold transform hover:scale-105 transition duration-300 ease-in-out">
              joyyers
            </h1>
          </div>

          <div className="hidden md:flex justify-center items-center px-2">
            <ul className="flex items-center text-green-400 font-semibold space-x-5 ">
              <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                <ScrollLink to="hero" smooth={true}>
                  Home
                </ScrollLink>
              </li>
              <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                About Us
              </li>
              <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                <ScrollLink to="cta" smooth={true}>
                  Contact Us
                </ScrollLink>
              </li>
              <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                Pricing
              </li>
            </ul>
          </div>

          <button
            className="md:hidden text-green-400"
            onClick={() => toggleMenu()}
          >
            {!toggle ? (
              <svg
                className="w-8 h-8 transform transition duration-1000 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 transform transition duration-1000 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {toggle && (
        <Fade top>
          <div className="bg-[#09152E] md:hidden flex justify-center items-center  py-2  transform transition duration-1000 ease-in-out rounded-t-lg">
            <ul className="flex flex-col mx-auto text-green-400 font-semibold  ">
              <li
                className=" border-b-2 border-b-green-400 w-screen py-2 uppercase "
                onClick={() => toggleMenu()}
              >
                <a className="ml-5">Home</a>
              </li>
              <li
                className=" border-b-2 border-b-green-400 w-screen py-2 uppercase "
                onClick={() => toggleMenu()}
              >
                <a className="ml-5">about us</a>
              </li>

              <ScrollLink to="cta" smooth={true}>
                <li
                  className=" border-b-2 border-b-green-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">Contact Us</a>
                </li>
              </ScrollLink>

              <li
                className=" border-b-2 border-b-green-400 w-screen py-2 uppercase "
                onClick={() => toggleMenu()}
              >
                <a className="ml-5">pricing</a>
              </li>
            </ul>
          </div>
        </Fade>
      )}{" "}
    </section>
  );
};

export default Navbar;
