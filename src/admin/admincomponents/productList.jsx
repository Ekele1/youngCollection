import React, { useState, useContext, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../onboarding/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteConfirmationModal from "./deleteConfirmation";
import { toast } from "react-toastify";

const ProductList = () => {
  const navigate = useNavigate();
  const { products } = useContext(AuthContext);

  const headers = [
    "Image", "Name", "Description", "Brand", "Price", "Quantity", "Sale", "Stock", "Date Listed", "Action"
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  useEffect(() => {
    setFilteredProducts(
      products?.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())) || []
    );
  }, [searchQuery, products]);

  const totalPages = Math.ceil(filteredProducts.length / entriesPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
  };

  const handleDelete = async () => {
    if (!selectedProduct) return;

    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      // console.log("No token found, redirecting to login.");
      setLoading(false);
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/admin/deleteProduct/${selectedProduct._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFilteredProducts(prev => prev.filter(p => p._id !== selectedProduct._id));
      setShowModal(false);
      toast.success("product deleted successfully")
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full font-bold text-[25px] h-[70px] flex items-center dark:text-gray-500">
        <p>Product List</p>
      </div>
      <div className="w-full p-3 rounded-lg lg:shadow-md lg:bg-white dark:bg-[#1d283a]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="text-gray-500 flex items-center">
            <p>Showing</p>
            <select
              className="w-[80px] mx-2 outline-none border-2 border-gray-500 rounded-md"
              value={entriesPerPage}
              onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }}
            >
              {[10, 20, 30].map(num => <option key={num} value={num}>{num}</option>)}
            </select>
            <p>entries</p>
          </div>
          <div className="lg:w-[40%] w-full h-[45px] border-2 border-gray-500 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full border-none outline-none bg-inherit pl-3"
            />
            <IoSearchOutline size={25} className="mx-2" />
          </div>
        </div>

        <div className="w-full overflow-auto mt-3">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#0D92F4] text-white">
                {headers.map((header, i) => (
                  <th key={i} className="border border-gray-300 px-3 py-2 text-left font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="dark:text-gray-500">
              {paginatedProducts.length === 0 ? (
                <tr>
                  <td colSpan={headers.length} className="text-center py-4 text-gray-500">No products found</td>
                </tr>
              ) : (
                paginatedProducts.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors cursor-pointer">
                    <td className="border border-gray-300 px-3 py-2">
                      {product.images?.[0] && (
                        <img
                          src={product.images[0].url}
                          alt={product.images[0].altText || "product image"}
                          className="h-[50px] w-[50px] object-cover rounded-md"
                        />
                      )}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">{product.name}</td>
                    <td className="border border-gray-300 px-3 py-2">{product.description}</td>
                    <td className="border border-gray-300 px-3 py-2">{product.brand}</td>
                    <td className="border border-gray-300 px-3 py-2">${product.price}</td>
                    <td className="border border-gray-300 px-3 py-2">{product.quantity}</td>
                    <td className="border border-gray-300 px-3 py-2">{product.sale}%</td>
                    <td className="border border-gray-300 px-3 py-2">{product.stock}</td>
                    <td className="border border-gray-300 px-3 py-2">{new Date(product.createdAt).toLocaleDateString()}</td>
                    <td className="border border-gray-300 px-3 py-2 flex gap-3">
                      <CiEdit size={20} onClick={() => navigate(`/admin/editproduct`, { state: product })} className="cursor-pointer text-blue-500" title="Edit product" />
                      <RiDeleteBin6Line size={20} onClick={() => { setSelectedProduct(product); setShowModal(true); }} className="cursor-pointer text-red-500" title="Delete product" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <DeleteConfirmationModal show={showModal} onClose={() => setShowModal(false)} loading={loading} onConfirm={handleDelete} />
      </div>
    </div>
  );
};

export default ProductList;
