import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`p-4 absolute top-0 left-0 right-0 z-20 border-b-2 rounded-sm m-4 px-8  ${
        darkMode
          ? "text-neutral-50 border-b-neutral-50"
          : "border-b-neutral-900 text-neutral-900"
      } `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-extrabold">MM</div>
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
            {isOpen ? (
              <HiOutlineX className="text-purple-950 w-7 h-7" />
            ) : (
              <HiOutlineMenuAlt3 className="text-purple-950 w-7 h-7" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-2 text-center bg-opacity-65">
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#work" onClick={closeMenu}>
            Work
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="py-2 block transition duration-300 ease-in-out hover:bg-opacity-25 hover:text-gray-300"
    >
      {children}
    </a>
  );
};

export default Navbar;
