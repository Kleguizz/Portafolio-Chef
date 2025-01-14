import { Link } from "react-router-dom";

function Navbar() {
return (
    <nav className="p-4 bg-gray-800 shadow-md">
        <ul className="flex list-none gap-4 m-0 p-0 justify-center">
            <li><Link to="/" className="text-white no-underline p-2 rounded hover:bg-gray-700">Inicio</Link></li>
            <li><Link to="/about" className="text-white no-underline p-2 rounded hover:bg-gray-700">Sobre Mí</Link></li>
            <li><Link to="/experience" className="text-white no-underline p-2 rounded hover:bg-gray-700">Mi Experiencia</Link></li>
            <li><Link to="/contact" className="text-white no-underline p-2 rounded hover:bg-gray-700">Contáctame</Link></li>
        </ul>
    </nav>
);
}

export default Navbar;