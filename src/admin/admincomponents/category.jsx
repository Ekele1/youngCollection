import React, { useEffect, useState, useContext } from "react";
import axios from "axios"; // Import axios
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../onboarding/authContext";


const Category = () => {
  const listDetailHeader = ["Image", "Name", "Quantity", "Sale", "Action"];
  const { categories } = useContext(AuthContext);
  
  const [listDetail, setListDetail] = useState([]); // Initialize as an empty array
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter categories based on search query
  const filteredList = listDetail.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) // Use `category.name`
  );

  useEffect(() => {
    setListDetail(categories); // Update listDetail when categories change
  }, [categories]);

  // Pagination
  const totalEntries = filteredList.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedList = filteredList.slice(startIndex, endIndex);

  // Handle Page Change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle Delete Category
  const handleDelete = (index) => {
    const updatedList = listDetail.filter((_, i) => i !== index);
    setListDetail(updatedList);
  };

  // Handle Edit Placeholder
  const handleEdit = (index) => {
    console.log("Edit category at index:", index);
  };

  return (
    <div className="w-full h-full overflow-auto dark:text-gray-500">
      <div className="w-full font-bold text-[25px] h-[70px] flex items-center">
        <p>Category List</p>
      </div>
      <div className="w-full lg:bg-white dark:bg-[#1d283a] p-3 rounded-lg lg:shadow-md">
        {/* Top Controls */}
        <div className="w-full lg:h-[70px] flex flex-col gap-3 lg:flex-row items-center justify-between">
          {/* Entries Dropdown */}
          <div className="text-gray-500 flex items-center">
            <p>Showing</p>
            <select
              className="w-[80px] mx-2 outline-none border-2 border-gray-500 rounded-md"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <p>entries</p>
          </div>

          {/* Search Bar */}
          <div className="lg:w-[40%] w-full h-[45px] border-2 border-gray-500 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search by category name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full border-none outline-none bg-inherit pl-3"
            />
            <IoSearchOutline size={25} className="mx-2" />
          </div>
        </div>

        {/* Responsive Table */}
        <div className="w-full overflow-auto mt-3">
          <table className="table-auto w-full border-collapse border border-gray-300">
            {/* Table Header */}
            <thead className="bg-[#0D92F4] text-white">
              <tr>
                {listDetailHeader.map((header, i) => (
                  <th key={i} className="border border-gray-300 px-4 py-2 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="dark:bg-[#1d283a]">
              {paginatedList.map((category, index) => (
                <tr key={index} className="hover:bg-[#d6e9f3] transition-colors">
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      className="object-contain h-12 w-12 rounded-md"
                      src={category.image}
                      alt={category.name}
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {category.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {category.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {category.sale}%
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex gap-3">
                    <CiEdit size={25} onClick={() => handleEdit(index)} className="cursor-pointer" title="Edit category" />
                    <RiDeleteBin6Line size={25} onClick={() => handleDelete(index)} className="cursor-pointer text-red-500" title="Delete category" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="w-full mt-3 lg:h-[100px] flex flex-col lg:flex-row items-center justify-between">
          <p className="text-[12px] text-gray-400">
            Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries
          </p>
          <div className="h-[50px] flex gap-3">
            <div className="pagination-btn" onClick={() => handlePageChange(currentPage - 1)}>
              <IoIosArrowBack />
            </div>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div key={pageIndex} className={`pagination-btn ${currentPage === pageIndex + 1 ? "active" : ""}`} onClick={() => handlePageChange(pageIndex + 1)}>
                {pageIndex + 1}
              </div>
            ))}
            <div className="pagination-btn" onClick={() => handlePageChange(currentPage + 1)}>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
