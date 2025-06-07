import "./App.css";
import "./main.css";
import { Routes, Route, Router } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreateContact from "./pages/CreateContact";
import { Toaster } from "react-hot-toast";
import DetailContact from "./pages/DetailContact";
import EditContact from "./pages/EditContact";
import AddAddress from "./pages/AddAddress";
import EditAddress from "./pages/EditAddress";
import NotFound404 from "./pages/404";
import ServerError5xx from "./pages/5xx";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/detail-contact" element={<DetailContact />} />
        <Route path="/edit-contact" element={<EditContact />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/edit-address" element={<EditAddress />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="/5xx" element={<ServerError5xx />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
