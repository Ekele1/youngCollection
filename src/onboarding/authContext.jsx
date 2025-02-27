import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      await fetchUser();
      await fetchAllUsers();
      await fetchAdmin();
      await getCategories();
      await getAllProducts()
    };

    fetchData();
  }, []);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.response && error.response.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchAllUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/auth/getAllUsers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
      if (error.response && error.response.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  // console.log(allUsers)

  const fetchAdmin = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/auth/adminProfile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(response.data.admin);
    } catch (error) {
      console.error("Error fetching admin profile:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please log in again.");
        adminLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-all-categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAllProducts");
      setProducts(response.data.products);
      // console.log(response)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  // console.log(products)
  const adminLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/adminLogin", { email, password });
      const { token, admin } = response.data;
      localStorage.setItem("token", token);
      setAdmin(admin);
      await fetchAdmin(); // Fetch admin details immediately after login
    } catch (error) {
      console.error("Admin login error:", error);
      throw new Error(error.response?.data?.message || "Admin login failed");
    }
  };
  const userLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/userLogin", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      await fetchUser(); // Fetch user details immediately after login
    } catch (error) {
      console.error("login error:", error);
      throw new Error(error.response?.data?.message || "user login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const adminLogout = (navigate) => {
    localStorage.removeItem("token");
    setAdmin(null);
    navigate("/admin")
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        logout,
        adminLogout,
        loading,
        categories,
        adminLogin,
        userLogin,
        products,
        allUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
