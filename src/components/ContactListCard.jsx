import { Link } from "react-router-dom";
import Button from "./Button";
import Swal from "sweetalert2";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/config";
import toast from "react-hot-toast";

export default function ContactListCard({ contact }) {
  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteDoc(doc(db, "contacts", contact.id));
        toast.success("Delete contact successfully");
      } catch (error) {
        console.error("Error deleting contact: " + error);
        toast.error("Error!, Failed to delete contact." + error);
      }
    }
  };

  return (
    <div className="bg-gray-800/80 rounded-xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="p-6">
        <Link
          to={`/detail-contact/${contact.id}`}
          className="block cursor-pointer hover:bg-gray-700 rounded-lg transition-all duration-200 p-3"
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
              <i className="fa-solid fa-user text-white"></i>
            </div>
            <h1 className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">
              {contact.first_name} {contact.last_name}
            </h1>
          </div>
          <div className="space-y-3 text-gray-300 ml-2">
            <p className="flex items-center">
              <i className="fa-solid fa-user-tag text-gray-500 w-6"></i>
              <span className="font-medium w-24">First Name:</span>
              <span>{contact.first_name}</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-user-tag text-gray-500 w-6"></i>
              <span className="font-medium w-24">Last Name:</span>
              <span>{contact.last_name}</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-envelope text-gray-500 w-6"></i>
              <span className="font-medium w-24">Email:</span>
              <span>{contact.email}</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-phone text-gray-500 w-6"></i>
              <span className="font-medium w-24">Phone:</span>
              <span>{contact.phone}</span>
            </p>
          </div>
        </Link>
        <div className="flex justify-end mt-4 space-x-3">
          <Link
            to={`/edit-contact/${contact.id}`}
            className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
          >
            <i className="fa-solid fa-edit mr-2"></i> Edit
          </Link>
          <Button
            onClick={handleDelete}
            icon="fa-trash-alt"
            text="Delete"
            btnColor="bg-gradient-to-r from-red-600 to-red-500"
          />
        </div>
      </div>
    </div>
  );
}
