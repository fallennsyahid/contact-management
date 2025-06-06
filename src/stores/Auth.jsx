import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config.js";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, password, fullName) => {
    try {
      setError(null);
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      setUser({ ...userCredential.user, displayName: fullName });

      toast.success("Selamat Datang 😉");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      toast.error("Login gagal: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Selamat Datang 😉");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      toast.error("Login gagal: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    const result = await Swal.fire({
      title: "Yakin ingin logout?",
      text: "Kamu akan keluar dari akun ini.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, logout",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        setError(null);
        setLoading(true);
        await signOut(auth);
        toast.success("Logout Berhasil 👋");
        navigate("/");
      } catch (err) {
        setError(err.message);
        toast.error("Logout gagal: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        isAuthenticated: !!user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
