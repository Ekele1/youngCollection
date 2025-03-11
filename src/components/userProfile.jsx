import React, { useState, useContext, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarker, FaEdit } from "react-icons/fa";
import { AuthContext } from "../onboarding/authContext";
import axios from "axios";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [editedUser, setEditedUser] = useState(user);
  const [profilePictureFile, setProfilePictureFile] = useState(null); // State for the uploaded file

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  // console.log(user)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePictureFile(file); // Store the selected file
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedUser((prevUser) => ({
          ...prevUser,
          profilePicture: reader.result, // Preview the image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("No token found, redirecting to login.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullName", editedUser.fullName || "");
      formData.append("address", editedUser.address || "");
      formData.append("phoneNumber", editedUser.phoneNumber || "");
      if (profilePictureFile) {
        formData.append("profilePicture", profilePictureFile); // Append the file
      }

      const response = await axios.patch(
        "https://youngcollection-server.onrender.com/user/updateProfile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );
      console.log(response)
      setUser(response.data.user); // Update the user context
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:from-[#1c2741] dark:to-[#1e2b47] dark:text-gray-500 bg-gradient-to-r from-blue-50 to-purple-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white dark:bg-[#111828] rounded-lg shadow-lg overflow-hidden">
          {/* Cover Photo */}
          <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>

          {/* Profile Photo and Edit Button */}
          <div className="flex flex-col items-center -mt-20">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img
                src={editedUser?.profilePicture || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {isEditing && (
              <div className="mt-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </div>
            )}
            <button
              onClick={isEditing ? handleSave : handleEdit}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <FaEdit />
              {isEditing ? (loading ? "Saving..." : "Save") : "Edit Profile"}
            </button>
          </div>

          {/* User Details */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-4">{editedUser?.fullName}</h1>

            {/* User Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600" />
                <p className="text-gray-500">{editedUser?.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-600" />
                <p className="text-gray-500">{editedUser?.phoneNumber}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarker className="text-blue-600" />
                <p className="text-gray-500">{editedUser?.address}</p>
              </div>
            </div>

            {/* Edit Form (Conditional Rendering) */}
            {isEditing && (
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={editedUser?.fullName || ""}
                  onChange={handleChange}
                  className="w-full p-2 border dark:bg-[#1e2b47] border-gray-300 rounded-lg"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedUser?.phoneNumber || ""}
                  onChange={handleChange}
                  className="w-full p-2 border dark:bg-[#1e2b47] border-gray-300 rounded-lg"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  name="address"
                  value={editedUser?.address || ""}
                  onChange={handleChange}
                  className="w-full p-2 border dark:bg-[#1e2b47] border-gray-300 rounded-lg"
                  placeholder="Address"
                />
                <button
                  onClick={handleSave}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <FaEdit />
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;