const Footer = ({ darkMode }) => {
  return (
    <footer
      className={` text-neutral-100 py-4 border-t-2 border-teal-50 ${
        darkMode ? "text-white" : "bg-neutral-950"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between">
        <p className="text-lg font-bold">MM</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
