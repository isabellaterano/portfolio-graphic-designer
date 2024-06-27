import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-extrabold text-zinc-50 underline">MM</div>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-2 text-center bg-slate-100 bg-opacity-65">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-white py-2 block transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-gray-300"
    >
      {children}
    </a>
  );
};

export default Navbar;
