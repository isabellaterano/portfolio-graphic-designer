import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
import { MdNightlightRound, MdOutlineLightMode } from "react-icons/md";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={` ${
        darkMode
          ? "bg-neutral-950 text-neutral-200"
          : "bg-neutral-200 text-black"
      }`}
    >
      <Header darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <div className="mx-5 md:mx-8 lg:mx-10">
        <About darkMode={darkMode} />
        <Work darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
      <button
        className="fixed bottom-4 right-4 bg-gray-800 text-neutral-50 py-2 px-4 rounded-full shadow-lg z-50"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <MdOutlineLightMode className="text-yellow-500" />
        ) : (
          <MdNightlightRound />
        )}
      </button>
    </div>
  );
}

export default App;
