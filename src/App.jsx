import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "bg-zinc-900" : ""}`}>
      <Header darkMode={darkMode} />
      <Hero darkMode={darkMode} />
      <div className="mx-5 md:mx-8 lg:mx-10">
        <About darkMode={darkMode} />
        <Work darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
      <button
        className="fixed bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded-full shadow-lg"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
