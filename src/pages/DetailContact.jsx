import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddAddressCard from "../components/AddAddressCard";
import AddressListCard from "../components/AddressListCard";

const DetailContact = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Contacts
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-id-card mr-3 text-blue-400"></i> Contact
            Details
          </h1>
        </div>

        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg border border-gray-700 overflow-hidden max-w-2xl mx-auto">
          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-gradient rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <i className="fa-solid fa-user text-3xl text-white"></i>
              </div>
              <h1 className="text-white text-2xl font-bold mb-2">John Doe</h1>
              <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-5 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:backdrop-opacity-70">
                  <div className="flex items-center mb-2">
                    <i className="fa-solid fa-user-tag text-blue-400 mr-2"></i>
                    <h1 className="text-sm font-medium text-gray-300">
                      First Name
                    </h1>
                  </div>
                  <p className="text-white text-lg ml-6">John</p>
                </div>
                <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:backdrop-opacity-70">
                  <div className="flex items-center mb-2">
                    <i className="fa-solid fa-user-tag text-blue-400 mr-2"></i>
                    <h1 className="text-sm font-medium text-gray-300">
                      Last Name
                    </h1>
                  </div>
                  <p className="text-white text-lg ml-6">Doe</p>
                </div>
              </div>

              <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:backdrop-opacity-70">
                <div className="flex items-center mb-2">
                  <i className="fa-solid fa-envelope text-blue-400 mr-2"></i>
                  <h1 className="text-sm font-medium text-gray-300">Email</h1>
                </div>
                <p className="text-white text-lg ml-6">john.doe@example.com</p>
              </div>

              <div className="bg-gray-700 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:backdrop-opacity-70">
                <div className="flex items-center mb-2">
                  <i className="fa-solid fa-phone text-blue-400 mr-2"></i>
                  <h1 className="text-sm font-medium text-gray-300">Phone</h1>
                </div>
                <p className="text-white text-lg ml-6">+62 123456789</p>
              </div>
            </div>

            {/* Address Information Section */}
            <div className="mb-8">
              <div className="flex items-center mb-5">
                <i className="fa-solid fa-map-marker-alt text-blue-400 mr-3"></i>
                <h1 className="text-xl font-semibold text-white">Addresses</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <AddAddressCard />
                <AddressListCard />
                <AddressListCard />
                <AddressListCard />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailContact;
