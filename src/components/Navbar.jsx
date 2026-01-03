import React, { useEffect, useState } from "react";
import Login from "./Login";

const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scroll > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll-y", handleScroll);
    return () => {
      window.removeEventListener("scroll-y", handleScroll);
    };
  }, []);
  const navitems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">course</a>
      </li>
      <li>
        <a href="/contact">contact</a>
      </li>
      <li>
        <a href="/about">about us</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`bg-gray-800 max-w-screen container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 
     ${
       sticky
         ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out"
         : " "
     }`}
      >
        <div className=" bg-gray-800 text-white navbar shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-xl dropdown-content bg-cyan-400 text-black font-serif font-bold text-lg rounded-box z-1 mt-0 w-92 h-55 p-2 shadow"
              >
                {navitems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">Book Library</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex ">
              <ul className="menu menu-horizontal px-1 gap-3">{navitems}</ul>
            </div>
            <div className="hidden md:block">
              <label className="bg-gray-300 text-black input rounded-md px-3 py-3 flex items-center">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>

            <div>
              <a className="bg-black mx-2 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer "
              onClick={()=>
                document.getElementById("my_modal_3").showModal()
              }
              >
                login
              </a>
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
