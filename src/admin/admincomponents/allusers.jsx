import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const AllUsers = () => {
  const listDetailHeader = ["Image", "User Name", "Email", "Address", "Phone", "Action"];

  const [listDetail, setListDetail] = useState([
    {
      image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg",
      userName: "John Snow",
      email: "john@gmail.com",
      address: "Lagos",
      phone: "09123456789",
    },
    {
      image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg",
      userName: "Colar Bone",
      email: "colar@gmail.com",
      address: "Lagos",
      phone: "09123456789",
    },
    // Add more data for testing...
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (index) => {
    const updatedList = listDetail.filter((_, i) => i !== index);
    setListDetail(updatedList);
  };

  const handleEdit = (index) => {
    alert(`Edit user at index: ${index}`);
  };

  const filteredList = listDetail.filter((user) =>
    user.userName.toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className="w-full h-full overflow-auto dark:text-gray-500">
      <div className="w-full font-bold text-[25px] h-[70px] flex items-center">
        <p>All Users</p>
      </div>
      <div className="w-full bg-white dark:bg-[#1d283a] p-3 rounded-lg lg:shadow-md">
        <div className="w-full lg:h-[70px] flex flex-col gap-3 lg:flex-row items-center justify-between">
          {/* Entries Dropdown */}
          <div className="text-gray-500 flex items-center">
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

          {/* Search Bar */}
          <div className="lg:w-[40%] w-full h-[45px] border-2 border-gray-500 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search by user name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full border-none outline-none bg-inherit pl-3"
            />
            <IoSearchOutline size={25} className="mx-2" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#0D92F4] text-white">
                {listDetailHeader.map((header, i) => (
                  <th
                    key={i}
                    className="p-3 border border-gray-300 text-left min-w-[150px]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedList.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border border-gray-300"
                >
                  <td className="p-3">
                    <img
                      className="w-[50px] h-[50px] rounded-md object-cover"
                      src={user.image}
                      alt={user.userName}
                    />
                  </td>
                  <td className="p-3">{user.userName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.address}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3 flex gap-2">
                    <CiEdit
                      size={25}
                      onClick={() => handleEdit(index)}
                      className="cursor-pointer"
                    />
                    <RiDeleteBin6Line
                      size={25}
                      onClick={() => handleDelete(index)}
                      className="cursor-pointer text-red-500"
                    />
                  </td>
                </tr>
              ))}
              {paginatedList.length === 0 && (
                <tr>
                  <td
                    colSpan={listDetailHeader.length}
                    className="text-center p-3 text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
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

export default AllUsers;
