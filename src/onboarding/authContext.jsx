import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize as null
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch initial data
  useEffect((navigate) => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        await fetchUser(); // Fetch user first
        await fetchAllUsers();
        await fetchAdmin(navigate);
        await getCategories();
        await getAllProducts();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch cart when user is updated
  useEffect(() => {
    if (user?._id) {
      getCart(); // Fetch cart only when user._id is available
    }
  }, [user]); // Dependency on user

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("https://youngcollection-server.onrender.com/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.user && response.data.user._id !== user?._id) {
        setUser(response.data.user); // Update user state
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.response && error.response.status === 401) {
        logout();
      }
    }
  };

  const fetchAllUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("https://youngcollection-server.onrender.com/auth/getAllUsers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
      if (error.response && error.response.status === 401) {
        logout();
      }
    }
  };

  const fetchAdmin = async (navigate) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("https://youngcollection-server.onrender.com/auth/adminProfile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(response.data.admin);
    } catch (error) {
      console.error("Error fetching admin profile:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please log in again.");
        adminLogout(navigate);
      }
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("https://youngcollection-server.onrender.com/get-all-categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    if (!user || !user._id) {
      console.error("User is not defined or does not have an ID.");
      return;
    }

    try {
      const response = await axios.get(`https://youngcollection-server.onrender.com/cart/viewCart/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(response.data.data.cart.items);
      // console.log(response);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // console.log("all cart",cart)

  const getAllProducts = async () => {
    try {
      const response = await axios.get("https://youngcollection-server.onrender.com/getAllProducts");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const adminLogin = async (email, password) => {
    try {
      const response = await axios.post("https://youngcollection-server.onrender.com/auth/adminLogin", { email, password });
      const { token, admin } = response.data;
      localStorage.setItem("token", token);
      setAdmin(admin);
      await fetchAdmin();
    } catch (error) {
      console.error("Admin login error:", error);
      throw new Error(error.response?.data?.message || "Admin login failed");
    }
  };

  const userLogin = async (email, password) => {
    try {
      const response = await axios.post("https://youngcollection-server.onrender.com/auth/userLogin", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      await fetchUser();
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
    if (navigate) {
      navigate("/admin"); // Redirect to /admin
    }
  }; 

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        admin,
        logout,
        adminLogout,
        loading,
        categories,
        adminLogin,
        userLogin,
        products,
        allUsers,
        cart,
        setCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};