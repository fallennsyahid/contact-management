import { Link } from "react-router-dom";
import { useAuth } from "../stores/Auth";
import { useState } from "react";
import PasswordInput from "../components/PasswordInput";

export default function RegisterPage() {
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    await register(email, password, fullName);
  };
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-800 flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-800/80 p-8 rounded-xl shadow-xl border border-gray-700 backdrop-blur-sm w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient rounded-full mb-4">
            <i className="fa-solid fa-address-book text-white text-3xl"></i>
          </div>
          <h1 className="text-3xl text-white font-bold">Contact Management</h1>
          <p className="text-gray-500 mt-2">Create a new account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
                name="email"
                id="email"
                placeholder="Enter your email.."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 transition-all"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="full-name"
              className="block text-gray-300 font-medium text-sm mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                <i className="fas fa-id-card text-gray-500"></i>
              </div>
              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Enter your full name.."
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 transition-all"
              />
            </div>
          </div>

          <PasswordInput
            label="Password"
            name="password"
            id="password"
            iconLeft="fa-lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            withToggle
          />

          <PasswordInput
            label="Confirm Password"
            name="confirm-password"
            id="confirm-password"
            iconLeft="fa-check-double"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            withToggle
          />

          <div className="mb-6">
            <button
              type="submit"
              className="w-full cursor-pointer bg-gradient text-white py-3 px-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
            >
              <i className="fas fa-sign-in-alt mr-2"></i> Sign Up
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 space-x-2">
            {"Already have an account? "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
