import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreateContactCard({ isLoggedIn }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Oops..",
        text: "Login to add an address.",
        confirmButtonText: "OK",
        confirmButtonColor: "#CC0000",
      });
      return;
    }
    navigate("/create-contact");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-800/80 cursor-pointer rounded-xl overflow-hidden border-2 border-dashed border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
    >
      {/* <Link to="/create-contact" className="block p-6 h-full"> */}
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="w-20 h-20 bg-gradient rounded-full flex justify-center items-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110">
          <i className="fa-solid fa-user-plus text-3xl text-white"></i>
        </div>
        <h1 className="text-xl font-semibold text-white mb-3">
          Create New Contact
        </h1>
        <p className="text-gray-300">Add a new contact to your list</p>
      </div>
      {/* </Link> */}
    </div>
  );
}
