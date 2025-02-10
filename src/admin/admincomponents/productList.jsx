import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductList = () => {
  const listDetailHeader = [
    "Image",
    "Product name",
    "Price",
    "Quantity",
    "Sale",
    "Stock",
    "Date listed",
    "Action",
  ];

  const [listDetail, setListDetail] = useState([
    {
      image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg",
      productName: "Polo Shirt",
      price: 300,
      quantity: 40,
      sale: 10,
      stock: "In Stock",
      dateListed: "01/01/2025",
    },
    {
      image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg",
      productName: "Collar Bone",
      price: 200,
      quantity: 30,
      sale: 15,
      stock: "Out of Stock",
      dateListed: "01/02/2025",
    },
    // Add more data for testing...
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedList = listDetail.filter((_, i) => i !== index);
      setListDetail(updatedList);
    }
  };

  const handleEdit = (index) => {
    alert(`Edit product at index: ${index}`);
  };

  const filteredList = listDetail.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = filteredList.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedList = filteredList.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full dark:text-gray-500 font-bold text-[25px] h-[70px] flex items-center">
        <p>Product List</p>
      </div>
      <div className="w-full lg:bg-white dark:bg-[#1d283a] p-3 rounded-lg lg:shadow-md">
        {/* Top Controls */}
        <div className="w-full lg:h-[70px] flex flex-col gap-3 lg:flex-row items-center justify-between">
          <div className="text-gray-500 flex items-center w-full">
            <p>Showing</p>
            <select
              className="w-[80px] mx-2 outline-none border-2 border-gray-500 rounded-md"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to the first page
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
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

        {/* Table */}
        <div className="w-full overflow-auto mt-3">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#0D92F4] text-white">
                {listDetailHeader.map((header, i) => (
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
              {filteredList.length === 0 ? (
                <tr>
                  <td
                    colSpan={listDetailHeader.length}
                    className="text-center py-4 text-gray-500"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                paginatedList.map((product, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <td className="border border-gray-300 px-3 py-2">
                      <img
                        src={product.image || "https://via.placeholder.com/150"}
                        alt={product.productName || "Product"}
                        className="h-[50px] w-[50px] object-cover rounded-md"
                      />
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.productName}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ${product.price}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.quantity}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.sale}%
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.stock}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      {product.dateListed}
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      <div className="flex gap-3">
                        <CiEdit
                          size={20}
                          onClick={() => handleEdit(index)}
                          className="cursor-pointer text-blue-500"
                          title="Edit product"
                        />
                        <RiDeleteBin6Line
                          size={20}
                          onClick={() => handleDelete(index)}
                          className="cursor-pointer text-red-500"
                          title="Delete product"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="w-full mt-3 lg:h-[100px] flex flex-col lg:flex-row items-center justify-between">
          <p className="text-[12px] text-gray-400">
            Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of{" "}
            {totalEntries} entries
          </p>
          <div className="h-[50px] flex gap-3">
            <div
              className="w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 hover:text-white border-2 border-gray-400 flex items-center justify-center cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <IoIosArrowBack />
            </div>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div
                key={pageIndex}
                className={`w-[40px] h-[40px] ${
                  currentPage === pageIndex + 1
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-500 hover:text-white"
                } rounded-[50%] flex items-center justify-center cursor-pointer`}
                onClick={() => handlePageChange(pageIndex + 1)}
              >
                <p>{pageIndex + 1}</p>
              </div>
            ))}
            <div
              className="w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 hover:text-white border-2 border-gray-400 flex items-center justify-center cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
