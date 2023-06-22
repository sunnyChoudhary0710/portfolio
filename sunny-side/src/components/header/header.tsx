"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const openPanel = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };
  //h-[calc(100vh-5rem)]
  useEffect(() => {
    console.log(isHeaderOpen);
  }, [isHeaderOpen]);
  return (
    <>
      <header className="sticky top-0 z-20 h-20 bg-port-yellow-light px-0 md:px-4 lg:h-24 lg:px-4 sm:px-0 flex justify-between items-center border-b-2 border-b-rose-50">
        <div className="h-auto flex items-center">
          <img
            className="w-24 object-contain cursor-pointer transition-transform hover:rotate-12 hover:scale-125"
            src="/logo.webp"
            alt="Sunny Side"
          />
        </div>
        <div
          onClick={openPanel}
          className="flex flex-col justify-center items-center z-10 gap-1 w-14 h-14 mx-4 rounded-full transition-all hover:cursor-pointer hover:bg-slate-50 md:hidden"
        >
          <span
            className={`w-6 h-1 bg-port-yellow-dark rounded-md transition-all ${
              isHeaderOpen ? "transform-gpu origin-left rotate-45 w-7" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-port-yellow-dark rounded-md transition-all ${
              isHeaderOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-port-yellow-dark rounded-md transition-all ${
              isHeaderOpen ? "transform-gpu origin-left -rotate-45 w-7" : ""
            }`}
          ></span>
        </div>

        <nav className="md:flex gap-10 h-auto items-center hidden font-bold">
          <span className="port-nav hover:port-nav-hover">Projects</span>
          <span className="port-nav hover:port-nav-hover">About</span>
          <span className="port-nav hover:port-nav-hover">Career</span>
          <span className="port-nav hover:port-nav-hover">Interests</span>
          <span className="port-nav hover:port-nav-hover">Say Hi</span>
        </nav>
      </header>
      <div
        className={`absolute overflow-auto h-[calc(100vh-5rem)] w-screen z-10 bg-black transition-all  ${
          isHeaderOpen ? "transform-gpu translate-x-[0%]" : "translate-x-full"
        } flex flex-col gap-20 text-white text-7xl px-16 py-11 items-center`}
      >
        <span className="port-nav-mob hover:port-nav-hover-mob">Projects</span>
        <span className="port-nav-mob hover:port-nav-hover-mob">About</span>
        <span className="port-nav-mob hover:port-nav-hover-mob">Career</span>
        <span className="port-nav-mob hover:port-nav-hover-mob">Interests</span>
        <span className="port-nav-mob hover:port-nav-hover-mob">Say Hi</span>
      </div>
    </>
  );
};

export default Header;
