import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";

const images = [
  { src: image1, alt: "flower" },
  { src: image11, alt: "triangle" },
  { src: image2, alt: "girl with short hair in yellow clothes" },
  { src: image3, alt: "flowers in a vase" },
  { src: image4, alt: "birds and flower" },
  { src: image5, alt: "clown with blue hat" },
  { src: image6, alt: "donut" },
  { src: image7, alt: "winter" },
  { src: image8, alt: "Let's get funky" },
  { src: image9, alt: "background blue with squares" },
  { src: image13, alt: "astronaut" },
  { src: image12, alt: "dna" },
  { src: image10, alt: "white ball" },
  { src: image8, alt: "duplicate of Let's get funky" },
];

const Work = ({ darkMode }) => {
  return (
    <section id="work" className="py-10 ">
      <h2
        className={`text-center text-lg md:text-xl lg:text-4xl font-bold mb-10 ${
          darkMode ? " text-white" : ""
        }`}
      >
        WORK
      </h2>
      <div className="container mx-auto">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
