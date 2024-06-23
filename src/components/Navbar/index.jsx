import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/logo.svg";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="grid h-16 grid-cols-12 bg-white shadow-md max-h-16">
      <div className="col-span-3">
        <img src={logo} className="h-12 pt-3 pl-3" alt="Logo do Raceit" />
      </div>
      <div className="col-span-6">
        <ul className="flex items-center justify-center w-full h-full space-x-4 text-md">
          <Link
            to="/"
            className={`hover:text-blue-800 ${
              pathname === "/" && "text-blue-800"
            }`}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className={`hover:text-blue-800 ${
              pathname === "/about" && "text-blue-800"
            }`}
          >
            <li>Sobre</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;