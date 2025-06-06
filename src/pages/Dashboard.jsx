import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <i className="fa-solid fa-users text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Contacts</h1>
        </div>
        <SearchForm />
      </main>
    </>
  );
}
