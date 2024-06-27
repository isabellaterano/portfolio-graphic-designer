const Footer = ({ darkMode }) => {
  return (
    <footer
      className={` text-zinc-100 py-4 ${
        darkMode ? "text-white" : "bg-[#232933]"
      }`}
    >
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">Marie Mancini</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
