// Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../stores/Auth";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <header className="bg-gradient shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/dashboard"
          className="flex items-center hover:opacity-90 transition-opacity duration-200"
        >
          <i className="fas fa-address-book text-white text-2xl mr-3"></i>
          <div className="text-white font-bold text-xl">Contact Management</div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/profile"
                className="text-gray-100 hover:text-white flex items-center transition-colors duration-200"
              >
                <i className="fas fa-user-circle mr-2"></i>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="text-gray-100 hover:text-white flex items-center transition-colors duration-200 cursor-pointer"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
