import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export const AuthContext = createContext();
// console.log("url",apiBaseUrl)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize as null
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [cart, setCart] = useState([]);
  const [menCat, setMenCat] = useState([]);
  const [womenCat, setWomenCat] = useState([]);

  // Fetch initial data
  const fetchData = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      await fetchUser();
      await fetchAllUsers();
      await fetchAdmin();
      await getCategories();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllProducts();
    getProductByCategoryMen();
    getProductByCategoryWomen();
    fetchData();
  }, [fetchData]);

  // Fetch cart when user is updated
  useEffect(() => {
    if (user?._id) {
      getCart(); // Fetch cart only when user._id is available
    }
  }, [user]); // Dependency on user

  const fetchUser = useCallback(async () => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${apiBaseUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.user && response.data.user._id !== user?._id) {
        setUser(response.data.user);
      }
    } catch (error) {
      // console.error("Error fetching user:", error);
      if (error.response && error.response.status === 401) {
        logout();
      }
    }
  }, [user]);


  const fetchAllUsers = async () => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${apiBaseUrl}/auth/getAllUsers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllUsers(response.data.users);
    } catch (error) {
      // console.error("Error fetching users:", error);
      if (error.response && error.response.status === 401) {
        logout();
      }
    }
  };

  const fetchAdmin = async (navigate) => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${apiBaseUrl}/auth/adminProfile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(response.data.admin);
    } catch (error) {
      // console.error("Error fetching admin profile:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please log in again.");
        adminLogout(navigate);
      }
    }
  };

  const getCategories = async () => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.get(`${apiBaseUrl}/get-all-categories`);
      setCategories(response.data.categories);
    } catch (error) {
      // console.error("Error fetching categories:", error);
    }
  };

  const getCart = async () => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
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
      const response = await axios.get(`${apiBaseUrl}/cart/viewCart/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(response.data.data.cart.items);
      // console.log(response);
    } catch (error) {
      // console.error("Error fetching cart:", error);
    }
  };

  // console.log("all cart",cart)

  const getAllProducts = async () => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    // console.log("url",apiBaseUrl)
    try {
      const response = await axios.get(`${apiBaseUrl}/getAllProducts`);
      // const response = await axios.get(apiBaseUrl);
      setProducts(response.data.products);
    } catch (error) {
      // console.error("Error fetching products:", error);
    }
  };

  const getProductByCategoryMen = async () => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
      try {
          const response = await axios.get(`${apiBaseUrl}/product/category/men`);
          setMenCat(response.data?.products);
          // console.log(response);
      } catch (error) {
          // console.error("Error fetching products:", error);
      }
  };
  const getProductByCategoryWomen = async () => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
      try {
          const response = await axios.get(`${apiBaseUrl}/product/category/women`);
          setWomenCat(response.data?.products);
          // console.log(response);
      } catch (error) {
          // console.error("Error fetching products:", error);
      }
  };

  const adminLogin = async (email, password) => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.post(`${apiBaseUrl}/auth/adminLogin`, { email, password });
      const { token, admin } = response.data;
      localStorage.setItem("token", token);
      setAdmin(admin);
      await fetchAdmin();
    } catch (error) {
      // console.error("Admin login error:", error);
      throw new Error(error.response?.data?.message || "Admin login failed");
    }
  };

  const userLogin = async (email, password) => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.post(`${apiBaseUrl}/auth/userLogin`, { email, password });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      await fetchUser();
    } catch (error) {
      // console.error("login error:", error);
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
        womenCat,
        menCat,
        allUsers,
        cart,
        setCart,
        getAllProducts
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};