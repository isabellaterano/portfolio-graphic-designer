import { motion } from "framer-motion";
import Tile from "./Tile";
import { TiArrowRightOutline } from "react-icons/ti";

const Hero = ({ darkMode }) => {
  return (
    <div
      className={`w-full relative ${
        darkMode ? "bg-neutral-950" : "bg-neutral-200"
      }`}
    >
      <section className="w-full grid grid-cols-11 lg:grid-cols-20 h-screen overflow-y-clip">
        {Array.from(Array(20 * 12)).map((_, i) => (
          <Tile key={i} darkMode={darkMode} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mt-14 mb-10 font-poppins">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-center ${
            darkMode ? "text-neutral-100" : "text-neutral-900"
          }`}
        >
          Marie Mancini
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className={`w-11/12 md:w-2/3 lg:w-1/2 text-lg md:text-xl lg:text-2xl text-center tracking-wide ${
            darkMode ? "text-neutral-100" : "text-neutral-900"
          }`}
        >
          Graphic Designer | UI & UX Designer
        </motion.p>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="#contact"
          className={`rounded-lg text-lg px-5 md:px-7 py-2 md:py-3 border pointer-events-auto inline-flex items-center gap-2 font-bold bg-purple-700 border-purple-900 text-neutral-900`}
        >
          Get in touch <TiArrowRightOutline className="h-5 w-5" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
