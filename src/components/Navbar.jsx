// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link className="flex items-center hover:opacity-90 transition-opacity duration-200">
          <i className="fas fa-address-book text-black text-2xl mr-3"></i>
          <div className="text-black font-bold text-xl">Contact Management</div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link className="text-slate-800 hover:text-black flex items-center transition-colors duration-200">
                <i className="fas fa-user-circle mr-2"></i>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link className="text-slate-800 hover:text-black flex items-center transition-colors duration-200">
                <i className="fas fa-sign-out-alt mr-2"></i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
