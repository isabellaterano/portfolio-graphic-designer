import { motion } from "framer-motion";
import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Marie Mancini
        </motion.h1>
        <motion.p
          className="text-md sm:text-lg md:text-xl text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Graphic Designer | UI & UX Designer
        </motion.p>
        <motion.button
          className="bg-white text-red-600 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          See Work
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
