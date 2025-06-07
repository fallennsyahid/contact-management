import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EditAddress = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/detail-contact"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Contact Details
          </Link>
          <h1 className="text-2xl text-white font-bold flex items-center">
            <i className="fas fa-location-dot text-blue-400 mr-3"></i> Edit
            Address
          </h1>
        </div>

        <div className="bg-gray-800/80 rounded-xl shadow-xl border border-gray-700 overflow-hidden max-w-2xl mx-auto">
          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-gradient rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <i className="fa-solid fa-user text-3xl text-white"></i>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">John Doe</h1>
              <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
            </div>

            <form>
              <div className="mb-5">
                <label
                  htmlFor="street"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Street
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-road text-gray-500"></i>
                  </div>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value="123 Third St"
                    required
                    className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-city text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value="NYC"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="province"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Province/State
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-map text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value="NY"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-flag text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value="USA"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="postal_code"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Postal Code
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-envelopes-bulk text-gray-500"></i>
                    </div>
                    <input
                      type="number"
                      id="postal_code"
                      name="postal_code"
                      value="12345"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
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
                  <i class="fas fa-save mr-2"></i> Save Changes
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

export default EditAddress;
