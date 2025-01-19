import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 bg-gray-800 shadow-md z-50 rounded-3xl p-5">
      <ul className="flex justify-around gap-6 p-4">
        <li>
          <Link to="/" className="text-white no-underline p-2 rounded hover:bg-gray-700">
            Sobre Mí
          </Link>
        </li>
        <li>
          <Link to="/experience" className="text-white no-underline p-2 rounded hover:bg-gray-700">
            Mi Experiencia
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white no-underline p-2 rounded hover:bg-gray-700">
            Contáctame
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
