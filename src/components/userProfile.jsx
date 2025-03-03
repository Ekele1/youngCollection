import React, { useState, useContext, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarker, FaEdit } from "react-icons/fa";
import { AuthContext } from "../onboarding/authContext";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useContext(AuthContext);

//   console.log(user)

  useEffect(()=>{
    user
  },[user])

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cover Photo */}
          <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>

          {/* Profile Photo and Edit Button */}
          <div className="flex flex-col items-center -mt-20">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={handleEdit}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <FaEdit />
              {isEditing ? "Save" : "Edit Profile"}
            </button>
          </div>

          {/* User Details */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-4">{user?.fullName}</h1>
            {/* <p className="text-gray-600 text-center mb-6">{user.bio}</p> */}

            {/* User Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600" />
                <p className="text-gray-700">{user?.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-600" />
                <p className="text-gray-700">{user?.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarker className="text-blue-600" />
                <p className="text-gray-700">{user?.address}</p>
              </div>
            </div>

            {/* Edit Form (Conditional Rendering) */}
            {isEditing && (
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={user?.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={user?.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  name="address"
                  value={user?.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Address"
                />

                <button
                onClick={handleEdit}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                <FaEdit />
                Save
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