import React from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
} from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Bengaluru <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-20 h-20  " >
            {
          <img src='data:image/png;base64,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' 
               alt="logo" 
               className="w-full h-full rounded-md" 
  />}
  
          </div>
           
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            NCR <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-bmsnavbar-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab screen */}
          <NavMd />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/**
 * Md:hidden for mobile screen /*Mobile Screen*
md hidden makes the meduim screen and screen larger than medium hidden
So it is equal to writing lg:hidden xl:hidden md:hidden

hidden lg:hidden md:flex  /*pc dcreen
so we have set default to hidden 
 when we have large screen or screen larger than large it hidden 
but when medium screen navbar item becomes flex  

hidden lg:flex   /*desktop Screen* 
default = hidden 
 for large it is flex  

 */