// navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import logo from '/src/assets/logo.svg';

const Navbar = () => {
  const { pathname } = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // window.location.reload();
    navigate('/');
  };

  return (
    <nav className="grid h-16 grid-cols-12 bg-white shadow-md max-h-16">
      <div className="col-span-3">
        <img src={logo} className="h-12 pt-3 pl-3" alt="Logo do Raceit" />
      </div>
      <div className="col-span-6">
        <ul className="flex items-center justify-center w-full h-full space-x-4 text-md">
          {isAuthenticated ? (
            <>
              <Link
                to="/generator"
                className={`hover:text-blue-800 ${
                  pathname === "/generator" && "text-blue-800"
                }`}
              >
                <li>Gerador de Pitch</li>
              </Link>
              <li
                className="cursor-pointer hover:text-blue-800"
                onClick={handleLogout}
              >
                Logoff
              </li>
            </>
          ) : (
            <>
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
              <Link
                to="/login"
                className={`hover:text-blue-800 ${
                  pathname === "/login" && "text-blue-800"
                }`}
              >
                <li>Login</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
