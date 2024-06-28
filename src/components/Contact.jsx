import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-16 px-6 mb-5 ${
        darkMode ? " text-neutral-100" : "bg-neutral-100"
      }`}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          GET IN TOUCH
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I&apos;d love to hear from you! Whether you have a question or just
          want to say hi, feel free to reach out.
        </motion.p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://behance.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${
              darkMode ? "text-blue-400" : "text-[#0056FF]"
            } hover:text-opacity-70`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaBehance />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${
              darkMode ? "text-blue-400" : "text-blue-700"
            } hover:text-opacity-70`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${
              darkMode ? "text-blue-400" : "text-[#0F87EE]"
            } hover:text-opacity-70`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${
              darkMode ? "text-blue-400" : "text-pink-500"
            } hover:text-opacity-70`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${
              darkMode ? "text-blue-400" : "text-[#FFB0DC]"
            } hover:text-opacity-70`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <FaDribbble />
          </motion.a>
          <motion.a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${
              darkMode ? "text-blue-400" : "text-[#E60023]"
            } hover:text-opacity-70`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <FaPinterest />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
