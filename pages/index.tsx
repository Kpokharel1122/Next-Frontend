// import Navbar from "@/component/home/navbar/Navbar"
// import Button from "@/global/Button";
import Navbar from "../component/home/navbar/Navbar";
import Link from "next/link";
import { useState } from "react";
import Home from "../component/Home";
const index = () => {
  const [navbar, setNavbar] = useState<Number>(2);
  const [navtoggler, setNavtoggler] = useState<boolean>(false);
  return (
    <>
      <>
        {navbar === 1 && (
          <div className="section_padding flex justify-between items-center !py-4 bg-gray-100">
            {/* logo section */}
            <div className="logo">
              <p className="text-primary text-3xl font-bold ">Edu-Keshan</p>
            </div>
            {/* Navbar links */}
            <div className="navbar_icons max-[1020px]:hidden">
              <ul className="flex">
                <li>
                  <a href="#" className="px-6 flex items-center">
                    Home
                  </a>
                </li>
                {/* <li><a href="#"></a></li> */}
                <li>
                  <a href="#" className="px-6 flex items-center">
                    Courses
                  </a>
                </li>

                <li>
                  <a href="#" className="px-6 flex items-center">
                    Programmee
                  </a>
                </li>
                <li>
                  <a href="#" className="px-6 flex items-center">
                    Admission
                  </a>
                </li>
              </ul>
            </div>
            {/* Button */}
            <div className="button ">
              <ul className="flex items-center">
                <li>
                  <a href="#" className="px-2">
                    Login
                  </a>
                </li>
                <li className="px-2">
                  <div className="p-2 rounded bg-primary text-white">
                    Sign up
                  </div>
                </li>
              </ul>
            </div>
            <div className="navbar_icons absolute bottom-0 left-0 w-full section_padding  !py-2  bg-gray-100 hidden max-[1020px]:block">
              <ul className="flex justify-between">
                <li>
                  <a
                    href="#"
                    className="flex flex-col justify-center items-center text-sm"
                  >
                    <span className="material-symbols-outlined bold text-2xl">
                      home
                    </span>
                    Home
                  </a>
                </li>
                {/* <li><a href="#"></a></li> */}
                <li>
                  <a
                    href="#"
                    className=" flex flex-col justify-center items-center text-sm"
                  >
                    <span className="material-symbols-outlined bold pr-2 text-2xl">
                      article
                    </span>
                    Programme
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" flex flex-col justify-center items-center text-sm"
                  >
                    <span className="material-symbols-outlined bold pr-2 text-2xl">
                      auto_stories
                    </span>
                    Courses
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" flex flex-col justify-center items-center text-sm"
                  >
                    <span className="material-symbols-outlined bold pr-2 text-2xl">
                      school
                    </span>
                    Admission
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {navbar === 2 && (
          <div className=" ">
            {/* top navbar */}
            <div className="top_navbar !py-4 section_padding  max-[720px]:bg-slate-100  grid grid-cols-3 max-[1165px]:flex max-[1165px]:justify-between">
              {/* Information */}
              <div className="info max-[1165px]:hidden">
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
                <div className="text-primary text-3xl font-bold ">
                  Edu-Keshan
                </div>
              </div>

              {/* Button */}
              <div className="button ">
                <ul className="flex items-center justify-end w-full max-[720px]:hidden">
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
                <ul className=" items-center justify-end w-full hidden max-[720px]:flex">
                  <li>
                    <div className="px-2 flex items-center cursor-pointer">
                      <span className="material-symbols-outlined text-3xl">
                        account_circle
                      </span>
                    </div>
                  </li>
                  <li className="px-2">
                    <div
                      className="px-2 flex items-center cursor-pointer "
                      onClick={(e) => setNavtoggler(!navtoggler)}
                    >
                      <span className="material-symbols-outlined text-3xl">
                        menu
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* bottom navbar */}
            <div
              className={
                navtoggler
                  ? "bottom_navbar section_padding relative z-50 transform scale-x-1  transition delay-300 origin-left bg-slate-800 !py-4 max-[720px]:!py-10 max-[720px]:fixed max-[720px]:w-42 max-[720px]:h-screen max-[720px]:top-0"
                  : "bottom_navbar section_padding z-50 relative transform !scale-x-1   transition delay-300 origin-left max-[720px]:scale-x-0 bg-slate-800 !py-4 max-[720px]:!py-10 max-[720px]:fixed max-[720px]:w-42 max-[720px]:h-screen max-[720px]:top-0"
              }
            >
              <div className="text-primary text-3xl font-bold hidden max-[720px]:block ">
                Edu-Keshan
              </div>
              <span
                className="material-symbols-outlined hidden absolute right-2 top-2 text-white cursor-pointer max-[720px]:block "
                onClick={(e) => setNavtoggler(!navtoggler)}
              >
                cancel
              </span>
              <ul className="flex justify-center max-[720px]:flex-col max-[720px]:pt-8 ">
                <li>
                  <a
                    href="#"
                    className="px-6 max-[720px]:px-0 max-[720px]:text-2xl max-[720px]:py-10 flex items-center text-white"
                  >
                    <span className="material-symbols-outlined  max-[720px]:text-3xl pr-2">
                      home
                    </span>
                    Home
                  </a>
                </li>
                {/* <li><a href="#"></a></li> */}
                <li>
                  <a
                    href="#"
                    className="px-6 max-[720px]:px-0 max-[720px]:text-2xl max-[720px]:py-10 max-[720px]:border-t-2 max-[720px]:border-slate-500 flex items-center  text-white"
                  >
                    <span className="material-symbols-outlined bold pr-2 text-2xl">
                      auto_stories
                    </span>
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-6 max-[720px]:px-0 max-[720px]:text-2xl max-[720px]:py-10 max-[720px]:border-t-2 max-[720px]:border-slate-500 flex items-center  text-white"
                  >
                    <span className="material-symbols-outlined bold pr-2 text-2xl">
                      article
                    </span>
                    Programme
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-6 flex max-[720px]:px-0 max-[720px]:text-2xl max-[720px]:py-10 max-[720px]:border-t-2 max-[720px]:border-slate-500 items-center  text-white"
                  >
                    <span className="material-symbols-outlined bold pr-2 text-2xl">
                      school
                    </span>
                    Admission
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={
                navtoggler
                  ? "overlay w-full h-full absolute bg-black opacity-40 transform scale-x-1 transition delay-300 origin-left"
                  : "overlay w-full h-full absolute bg-black opacity-40 transform scale-x-0 transition delay-300 origin-left"
              }
              onClick={(e)=>setNavtoggler(!navtoggler)}
            ></div>
          </div>
        )}
      </>
    </>
  );
};

export default index;
