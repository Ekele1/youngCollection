import React, { useState, useContext, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { ImBlocked } from "react-icons/im";
import { CgUnblock } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AuthContext } from "../../onboarding/authContext";
import DeleteConfirmationModal from "./deleteConfirmation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllUsers = () => {
  const { allUsers } = useContext(AuthContext);
  const listDetailHeader = ["Image", "User Name", "Email", "Address", "Phone", "Is Blocked", "Action"];

  const [listDetail, setListDetail] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (allUsers) {
      setListDetail(allUsers);
      setIsLoading(false);
    }
  }, [allUsers]);

  useEffect(() => {
    const filtered = allUsers?.filter(
      (user) =>
        user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page when search query changes
  }, [searchQuery, allUsers]);

  const totalEntries = filteredUsers.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedList = filteredUsers?.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleBlockUnblock = async (userId, isBlocked) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://youngcollection-server.onrender.com/admin/blockUser/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ action: isBlocked ? "unblock" : "block" }), // Send "block" or "unblock"
      });

      if (response.ok) {
        const updatedUsers = allUsers.map((user) =>
          user.id === userId ? { ...user, isBlocked: !isBlocked } : user
        );
        setListDetail(updatedUsers);
        setFilteredUsers(updatedUsers);
        toast.success(`User has been ${isBlocked ? "unblocked" : "blocked"} successfully.`);
      } else {
        console.error("Failed to update user status");
        toast.error("Failed to update user status.");
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      toast.error("Error updating user status.");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <div className="w-full h-full mt-3 overflow-auto dark:text-gray-500">
      <div className="w-full font-bold text-[25px] h-[70px] flex items-center">
        <p>All Users</p>
      </div>
      <div className="w-full bg-white dark:bg-[#1d283a] p-3 rounded-lg lg:shadow-md">
        <div className="w-full lg:h-[70px] flex flex-col gap-3 lg:flex-row items-center justify-between">
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
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <p>entries</p>
          </div>

          <div className="lg:w-[40%] w-full h-[45px] border-2 border-gray-500 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search by user name, email, address, or phone"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full border-none outline-none bg-inherit pl-3"
            />
            <IoSearchOutline size={25} className="mx-2" />
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#0D92F4] text-white">
                {listDetailHeader.map((header, i) => (
                  <th key={i} className="p-3 border border-gray-300 text-left min-w-[150px]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={listDetailHeader.length} className="text-center p-3">
                    Loading...
                  </td>
                </tr>
              ) : paginatedList.length === 0 ? (
                <tr>
                  <td colSpan={listDetailHeader.length} className="text-center p-3 text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                paginatedList.map((user, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="p-3">
                      <img
                        className="w-[50px] h-[50px] rounded-md object-cover"
                        src={user.profilePicture}
                        alt={user.fullName}
                      />
                    </td>
                    <td className="p-3">{user.fullName}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.address}</td>
                    <td className="p-3">{user.phoneNumber}</td>
                    <td className="p-3">{user.isBlocked ? "Yes" : "No"}</td>
                    <td className="p-3 flex flex-col items-center justify-center">
                      <button
                        aria-label={user.isBlocked ? "Unblock user" : "Block user"}
                        onClick={() => {
                          setSelectedUser(user);
                          setShowModal(true);
                        }}
                      >
                        {user.isBlocked ? (
                          <>
                          <p>UnBlock</p>
                          <CgUnblock size={25} className="cursor-pointer text-blue-500" />
                          </>
                        ) : (
                          <>
                          <p>Block</p>
                          <ImBlocked size={25} className="cursor-pointer text-red-500" />
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="w-full mt-3 lg:h-[100px] flex flex-col lg:flex-row items-center justify-between">
          <p className="text-[12px] text-gray-400">
            Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries
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

        <DeleteConfirmationModal
          show={showModal}
          onClose={() => setShowModal(false)}
          loading={loading}
          onConfirm={() => handleBlockUnblock(selectedUser?._id, selectedUser?.isBlocked)}
          action={selectedUser?.isBlocked ? "Unblock" : "Block"}
          message={`Are you sure you want to ${selectedUser?.isBlocked ? "unblock" : "block"} this user?`}
        />
      </div>
    </div>
  );
};

export default AllUsers;