import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-[#d7d7b8] shadow-lg z-50 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Kevin Leguizamon</div>
        <ul className="flex space-x-16">
          <li>
            <Link
              to="/"
              className={`text-gray-800 no-underline py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                location.pathname === "/" ? "bg-[#8ba6ac] text-white" : "hover:bg-[#8ba6ac] hover:text-white"
              }`}
            >
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={`text-gray-800 no-underline py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                location.pathname === "/experience" ? "bg-[#8ba6ac] text-white" : "hover:bg-[#8ba6ac] hover:text-white"
              }`}
            >
              Mi Experiencia
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-gray-800 no-underline py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                location.pathname === "/contact" ? "bg-[#8ba6ac] text-white" : "hover:bg-[#8ba6ac] hover:text-white"
              }`}
            >
              Contáctame
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;