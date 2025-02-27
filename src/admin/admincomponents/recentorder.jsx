import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const RecentOrder = () => {
  const listDetailHeader = [
    "Product",
    "Price",
    "Quantity",
    "Payment",
    "Status",
    "Date",
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
    <div className="w-full overflow-auto bg-gray-50 lg:p-5 dark:bg-[#1d283a]">
      <div className="w-full font-bold text-2xl text-gray-500 h-[70px] flex items-center">
        <p>Recent Order</p>
      </div>
      <div className="w-full bg-white dark:bg-[#1d283a] p-5 rounded-lg lg:shadow-lg">

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
      </div>
    </div>
  );
};

export default RecentOrder;
