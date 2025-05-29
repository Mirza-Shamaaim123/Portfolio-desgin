import { useState } from "react";

export default function Navbar() {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <div className="bg-[#171d32] text-white">
      <div className="flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 pb-6">
        <span className="text-xl font-bold tracking-wide">Portfolio</span>
        
        <ul className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl md:border-none md:bg-transparent md:static md:mx-0 md:flex space-y-2 md:space-y-0 md:space-x-6`}>
          <a href="#about">
            <li className="cursor-pointer text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400">About</li>
          </a>
          <a href="#experience">
            <li className="cursor-pointer text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400">Experience</li>
          </a>
          <a href="#project">
            <li className="cursor-pointer text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400">Project</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400">Contact</li>
          </a>
        </ul>
        
        {showMenu && (
          menu ? (
            <div 
              className='md:hidden absolute right-10 top-6 text-2xl cursor-pointer text-white transition-all duration-300 hover:text-blue-400'
              onClick={() => openMenu(false)}
            >
              ✕
            </div>
          ) : (
            <div 
              className='md:hidden absolute right-10 top-6 text-2xl cursor-pointer text-white transition-all duration-300 hover:text-blue-400'
              onClick={() => openMenu(true)}
            >
              ☰
            </div>
          )
        )}
      </div>
    </div>
  );
}
