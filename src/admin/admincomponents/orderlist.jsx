import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OrderList = () => {
  const listDetailHeader = [
    "Product",
    "Price",
    "Quantity",
    "Payment",
    "Status",
    "Date",
    "Action",
  ];

  const [listDetail, setListDetail] = useState([
    { Product: "Polo Shirt", price: 300, quantity: 40, Payment: 10, status: "success", date: "01/01/2025" },
    { Product: "Collar Bone", price: 300, quantity: 40, Payment: 10, status: "pending", date: "01/01/2025" },
    { Product: "T-Shirt", price: 300, quantity: 40, Payment: 10, status: "failed", date: "01/01/2025" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (index) => {
    const updatedList = listDetail.filter((_, i) => i !== index);
    setListDetail(updatedList);
  };

  const handleEdit = (index) => {
    alert(`Edit product at index: ${index}`);
  };

  const filteredList = listDetail.filter((product) =>
    product.Product.toLowerCase().includes(searchQuery.toLowerCase())
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

  const statusStyles = {
    success: "text-green-500",
    pending: "text-yellow-500",
    failed: "text-red-500",
  };

  return (
    <div className="w-full mt-10 overflow-auto bg-gray-50 lg:p-5 dark:bg-[#1d283a]">
      <div className="w-full font-bold text-2xl text-gray-500 h-[30px] flex items-center">
        <p>Order List</p>
      </div>
      <div className="w-full min-h-screen bg-white dark:bg-[#1d283a] p-5 rounded-lg lg:shadow-lg">
        {/* Controls */}
        <div className="w-full  lg:h-[70px] flex flex-col gap-3 lg:flex-row items-center justify-between">
          <div className="text-gray-500 flex items-center w-full">
            <p>Show</p>
            <select
              className="w-[80px] mx-2 outline-none border border-gray-300 rounded-md px-2 py-1"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <p>entries</p>
          </div>
          <div className="lg:w-[40%] w-full h-[45px] border border-gray-300 rounded-lg flex items-center shadow-sm">
            <input
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full border-none outline-none bg-transparent pl-3"
            />
            <IoSearchOutline size={25} className="mx-2 text-gray-400" />
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-auto mt-5">
          {paginatedList.length > 0 ? (
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white text-left">
                  {listDetailHeader.map((header, i) => (
                    <th key={i} className="px-4 py-2 text-sm font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="dark:bg-[#1d283a]">
                {paginatedList.map((product, index) => (
                  <tr
                    key={index}
                    className="bg-white dark:bg-[#1d283a] hover:bg-gray-100 transition-colors border-b text-sm text-gray-500"
                  >
                    <td className="px-4 py-2">{product.Product}</td>
                    <td className="px-4 py-2">${product.price}</td>
                    <td className="px-4 py-2">{product.quantity}</td>
                    <td className="px-4 py-2">{product.Payment}</td>
                    <td className={`px-4 py-2 ${statusStyles[product.status]} font-semibold`}>
                      {product.status}
                    </td>
                    <td className="px-4 py-2">{product.date}</td>
                    <td className="px-4 py-2 flex items-center gap-3">
                      {/* <CiEdit
                        size={20}
                        onClick={() => handleEdit(index)}
                        className="cursor-pointer text-blue-500 hover:text-blue-700"
                        title="Edit"
                      /> */}
                      <RiDeleteBin6Line
                        size={20}
                        onClick={() => handleDelete(index)}
                        className="cursor-pointer text-red-500 hover:text-red-700"
                        title="Delete"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full text-center py-10 text-gray-500">
              No entries found
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="w-full mt-5 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-xs text-gray-400">
            Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-600 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <IoIosArrowBack />
            </button>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => handlePageChange(pageIndex + 1)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === pageIndex + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {pageIndex + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-600 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
