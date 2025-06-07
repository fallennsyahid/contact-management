import "./App.css";
import "./main.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Router } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreateContact from "./pages/CreateContact";
import { Toaster } from "react-hot-toast";
import DetailContact from "./pages/DetailContact";

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
