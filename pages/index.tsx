// import Navbar from "@/component/home/navbar/Navbar"
// import Button from "@/global/Button";
import Link from "next/link";
import { useState } from "react";
const index = () => {
  const [navbar, setNavbar] = useState<Number>(1);
  return (
    <>
      {navbar === 1 && (
        <div className="section_padding flex justify-between items-center !py-4 bg-gray-100">
          {/* logo section */}
          <div className="logo">
            <p className="text-primary text-3xl font-bold ">Edu-Keshan</p>
          </div>
          {/* Navbar links */}
          <div className="navbar_icons">
            <ul className="flex">
              <li>
                <a href="#" className="px-6 flex items-center">
                  <span className="material-symbols-outlined bold px-2 text-lg">
                    home
                  </span>
                  Home
                </a>
              </li>
              {/* <li><a href="#"></a></li> */}
              <li>
                <a href="#" className="px-6 flex items-center">
                  Pages{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="px-6 flex items-center">
                  Courses{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="px-6 flex items-center">
                  Blogs{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="px-6 flex items-center">
                  Features{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
            </ul>
          </div>
          {/* Button */}
          <div className="button">
            <ul className="flex items-center">
              <li>
                <a href="#" className="px-2">
                  Login
                </a>
              </li>
              <li className="px-2">
                <div
                  
                  className="p-2 rounded bg-primary text-white"
                >
                  Sign up
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {navbar === 2 && (
        <div className=" ">
          {/* top navbar */}
          <div className="top_navbar my-2 section_padding   grid grid-cols-3">
            {/* Information */}
            <div className="info">
              <ul className="flex">
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-lg">
                    call
                  </span>
                  <span className="pl-2 text-sm">977-9745695847</span>
                </li>
                <li className="flex items-center px-4">
                  <span className="material-symbols-outlined text-lg">
                    mail
                  </span>
                  <span className="pl-2 text-sm">info@edukeshan.com</span>
                </li>
              </ul>
            </div>

            {/* Logo section */}
            <div className="logo grid place-items-center ">
              <div className="text-primary text-3xl font-bold ">Edu-Keshan</div>
            </div>

            {/* Button */}
            <div className="button ">
              <ul className="flex items-center justify-end w-full">
                <li>
                  <a href="#" className="px-2 flex items-center ">
                    <span className="material-symbols-outlined text-lg">
                      login
                    </span>
                    <span className="pl-2">Login</span>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#" className="px-2 flex items-center ">
                    <span className="material-symbols-outlined text-lg">
                      person_add
                    </span>
                    <span className="pl-2">Sign up</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom navbar */}
          <div className="bottom_navbar section_padding  bg-slate-800 !py-4 ">
            <ul className="flex justify-center">
              <li>
                <a href="#" className="px-6 flex items-center text-white">
                  <span className="material-symbols-outlined bold px-2 text-lg">
                    home
                  </span>
                  Home
                </a>
              </li>
              {/* <li><a href="#"></a></li> */}
              <li>
                <a href="#" className="px-6 flex items-center  text-white">
                  Pages{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="px-6 flex items-center  text-white">
                  Courses{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="px-6 flex items-center  text-white">
                  Blogs{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="px-6 flex items-center  text-white">
                  Features{" "}
                  <span className="material-symbols-outlined px-2 text-lg">
                    expand_more
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="px-6 flex items-center  text-white" >
                  <span className="material-symbols-outlined pr-2 text-lg">search</span>
                  Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
