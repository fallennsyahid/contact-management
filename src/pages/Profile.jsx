import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../stores/Auth";
import PasswordInput from "../components/PasswordInput";

export default function Profile() {
  const { user } = useAuth();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPasseword] = useState("");

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <i className="fa-solid fa-user-cog text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 animate-fade-in">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3 shadow-md">
                  <i className="fa-solid fa-user-edit text-white text-xl"></i>
                </div>
                <h2 className="text-xl text-white font-semibold">
                  Edit Profile
                </h2>
              </div>

              {/* Form 1: Edit Name */}
              <form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                      <i className="fa-solid fa-user text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      value={user.displayName}
                      required
                      className="w-full pl-10 pr-3 py-2 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <button
                    type="submit"
                    className="w-full bg-gradient text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
                  >
                    <i className="fa-solid fa-save mr-2"></i> Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Form 2: Password Edit */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 animate-fade-in">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3 shadow-md">
                  <i className="fa-solid fa-key text-white text-xl"></i>
                </div>
                <h2 className="text-xl text-white font-semibold">
                  Change Password
                </h2>
              </div>

              <form>
                <PasswordInput
                  label="New Password"
                  name="new_password"
                  id="new_password"
                  iconLeft="fa-lock"
                  placeholder="Enter your a new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  withToggle
                />

                <PasswordInput
                  label="Confrim New Password"
                  name="confirm_password"
                  id="confirm_password"
                  iconLeft="fa-check-double"
                  placeholder="Confirm your a new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPasseword(e.target.value)}
                  withToggle
                />

                {/* <div className="mb-5">
                  <label
                    htmlFor="confirm_password"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                      <i className="fa-solid fa-check-double text-gray-500"></i>
                    </div>
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      <i
                        className={`fas ${
                          showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                        } text-gray-500`}
                      ></i>
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm your new password"
                      required
                      className="w-full pl-10 pr-3 py-2 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div> */}

                <div className="mb-5">
                  <button
                    type="submit"
                    className="w-full bg-gradient text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
                  >
                    <i className="fa-solid fa-key mr-2"></i> Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
