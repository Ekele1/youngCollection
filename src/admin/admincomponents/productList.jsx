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
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const navigate = useNavigate();
  const { products } = useContext(AuthContext);

  const headers = [
    "Image",
    "Name",
    "Description",
    "Category",
    "Brand",
    "Price",
    "Material",
    "Sale",
    "Stock",
    "Date Listed",
    "Action",
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
      products?.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    );
  }, [searchQuery, products]);

  const totalPages = Math.ceil(filteredProducts.length / entriesPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
  };

  const handleDelete = async () => {
    if (!selectedProduct) return;

    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      await axios.delete(
        `https://youngcollection-server.onrender.com/admin/deleteProduct/${selectedProduct._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFilteredProducts((prev) =>
        prev.filter((p) => p._id !== selectedProduct._id)
      );
      setShowModal(false);
      toast.success("Product deleted successfully.");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:mt-7 h-full overflow-auto">
      <div className="w-full font-bold text-[25px] h-[70px] flex items-center dark:text-gray-500">
        <p>Product List</p>
      </div>
      <div className="w-full p-3 rounded-lg lg:shadow-md lg:bg-white dark:bg-[#1d283a]">
        {/* Top Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="text-gray-500 flex items-center">
            <p>Showing</p>
            <select
              className="w-[80px] mx-2 outline-none border-2 border-gray-500 rounded-md"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 20, 30].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <p>entries</p>
          </div>
          <div className="lg:w-[40%] w-full h-[45px] border-2 border-gray-500 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search by product name, description, category, or brand"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full dark:text-gray-500 h-full border-none outline-none bg-inherit pl-3"
            />
            <IoSearchOutline size={25} className="mx-2" />
          </div>
        </div>

        {/* Product Table */}
        <div className="w-full overflow-auto mt-3">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#0D92F4] text-white">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 px-3 py-2 text-left font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="dark:text-gray-500">
              {paginatedProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="text-center py-4 text-gray-500"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                paginatedProducts.map((product, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() =>
                      navigate(`/admin/productdetail/${product._id}`, {
                        state: product,
                      })
                    }
                  >
                    <td className="border border-gray-300 px-3 py-2">
                      {product.images?.[0] && (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-[50px] w-[50px] object-cover rounded-md"
                        />
                      )}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.name}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.description}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.category?.name}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.brand}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ${product.price}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.material}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.sale}%
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.stock}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {new Date(product.createdAt).toLocaleDateString()}
                    </td>
                    <td className="border border-gray-300 px-3 py-2 flex gap-3">
                      <button
                        aria-label="Edit product"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/admin/editproduct/${product._id}`, {
                            state: product,
                          });
                        }}
                        className="cursor-pointer text-blue-500"
                      >
                        <CiEdit size={20} />
                      </button>
                      <button
                        aria-label="Delete product"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                          setShowModal(true);
                        }}
                        className="cursor-pointer text-red-500"
                      >
                        <RiDeleteBin6Line size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="w-full mt-3 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-[12px] text-gray-400">
            Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
            {Math.min(currentPage * entriesPerPage, filteredProducts.length)} of{" "}
            {filteredProducts.length} entries
          </p>
          <div className="h-[50px] flex gap-3">
            <button
              className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack />
            </button>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex}
                className={`pagination-btn ${
                  currentPage === pageIndex + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(pageIndex + 1)}
              >
                {pageIndex + 1}
              </button>
            ))}
            <button
              className={`pagination-btn ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        <DeleteConfirmationModal
          show={showModal}
          onClose={() => setShowModal(false)}
          loading={loading}
          onConfirm={handleDelete}
          action={"Delete"}
          message={"This action cannot be undone"}
          confirmButtonDisabled={loading}
        />
      </div>
    </div>
  );
};

export default ProductList;