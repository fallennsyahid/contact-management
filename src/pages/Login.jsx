import { Link } from "react-router-dom";
import { useAuth } from "../stores/Auth";
import { useState } from "react";

export default function LoginPage() {
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-800 flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-xl border border-gray-700 backdrop-blur-sm w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient rounded-full mb-4">
            <i className="fa-solid fa-address-book text-white text-3xl"></i>
          </div>
          <h1 className="text-3xl text-white font-bold">Contact Management</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium text-sm mb-2"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                <i className="fas fa-user text-gray-500"></i>
              </div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 transition-all"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium text-sm mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                <i className="fas fa-lock text-gray-500"></i>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your name.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 transition-all"
              />
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full cursor-pointer bg-gradient text-white py-3 px-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
            >
              <i className="fas fa-sign-in-alt mr-2"></i> Sign In
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 space-x-2">
            {"Don't have a account? "}
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
