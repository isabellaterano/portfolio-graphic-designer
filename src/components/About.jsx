import { motion } from "framer-motion";
import AboutMe from "../assets/aboutme.jpg";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-16 px-6 mt-5 ${darkMode ? " text-white" : "bg-gray-100"}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={AboutMe}
            alt="Profile"
            className="w-full h-auto max-h-96 rounded-lg shadow-lg object-cover"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-6 md:mt-0 md:ml-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            ABOUT ME
          </h2>
          <p
            className={`text-lg mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Hi, I&apos;m Marie Mancini, a passionate graphic designer with a
            love for creating stunning visuals that tell a story. With over 5
            years of experience in the industry, I specialize in branding, web
            design, and illustration. My goal is to bring your vision to life
            through beautiful and effective design.
          </p>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            When I&apos;m not designing, you can find me exploring the outdoors,
            experimenting with photography, or indulging in a good book.
            Let&apos;s create something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
