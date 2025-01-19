import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-[#bdcdd0] shadow-md z-50 p-5">
      <ul className="flex justify-around p-4">
        <li>
          <Link
            to="/"
            className={`text-white no-underline p-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
              location.pathname === "/" ? "bg-[#8ba6ac]" : "bg-gray-500 hover:bg-gray-700"
            }`}
          >
            Sobre Mí
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className={`text-white no-underline p-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
              location.pathname === "/experience" ? "bg-[#8ba6ac]" : "bg-gray-500 hover:bg-gray-700"
            }`}
          >
            Mi Experiencia
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`text-white no-underline p-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
              location.pathname === "/contact" ? "bg-[#8ba6ac]" : "bg-gray-500 hover:bg-gray-700"
            }`}
          >
            Contáctame
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;