import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CreateContact = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-3 flex items-center transition-colors duration-200"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i> Back to Contacts
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fa-solid fa-user-plus mr-2"></i> Create New Contact
          </h1>
        </div>

        <div className="bg-gray-800/80 rounded-xl shadow-lg border border-gray-700 overflow-hidden max-w-2xl mx-auto">
          <div className="p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user-tag text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Enter your first name"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user-tag text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Enter your last name"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-500"></i>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-phone text-gray-500"></i>
                  </div>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link
                  to="/dashboard"
                  className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
                >
                  <i className="fas fa-times mr-2"></i> Cancel
                </Link>
                <button
                  type="submit"
                  className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center cursor-pointer"
                >
                  <i class="fas fa-plus-circle mr-2"></i> Create Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CreateContact;
