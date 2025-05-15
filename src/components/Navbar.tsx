const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gray-900/50 text-white z-50 backdrop-blur-md">
      <ul className="flex justify-center space-x-4">
        <li><a href="#hero" className="hover:text-green-400">Home</a></li>
        <li><a href="#about" className="hover:text-green-400">About</a></li>
        <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
        <li><a href="#resume" className="hover:text-green-400">Resume</a></li>
        <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 