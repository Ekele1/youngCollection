import React, { useState } from "react";
import { IoNotificationsOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Notification = () => {
  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      description: "You have received a new order from John Doe.",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Payment Successful",
      description: "Your payment of $199.99 has been processed successfully.",
      timestamp: "5 hours ago",
      read: true,
    },
    {
      id: 3,
      title: "Account Update",
      description: "Your account information has been updated.",
      timestamp: "1 day ago",
      read: false,
    },
    {
      id: 4,
      title: "New Message",
      description: "You have a new message from Jane Smith.",
      timestamp: "2 days ago",
      read: true,
    },
  ];

  const [notificationList, setNotificationList] = useState(notifications);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotificationList((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  // Pagination
  const totalPages = Math.ceil(notificationList.length / entriesPerPage);
  const paginatedNotifications = notificationList.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className="w-full mt-8 overflow-auto p-6 bg-gray-50 dark:bg-[#1d283a] dark:text-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <IoNotificationsOutline size={28} />
            Notifications
          </h1>
          <select
            className="p-2 border border-gray-300 rounded-md dark:bg-[#1d283a] dark:border-gray-600"
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
          </select>
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          {paginatedNotifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No notifications found.
            </div>
          ) : (
            paginatedNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg shadow-sm flex items-start gap-4 ${
                  notification.read
                    ? "bg-white dark:bg-[#2d3748]"
                    : "bg-blue-50 dark:bg-[#2d3748] border-l-4 border-blue-500"
                }`}
              >
                <div className="flex-1">
                  <h2 className="font-semibold">{notification.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {notification.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {notification.timestamp}
                  </p>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="p-2 hover:bg-blue-100 rounded-full transition-colors"
                    title="Mark as read"
                  >
                    <IoCheckmarkCircleOutline size={20} className="text-blue-500" />
                  </button>
                )}
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8">
          <p className="text-sm text-gray-500">
            Showing {(currentPage - 1) * entriesPerPage + 1} to{" "}
            {Math.min(currentPage * entriesPerPage, notificationList.length)} of{" "}
            {notificationList.length} notifications
          </p>
          <div className="flex gap-2">
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
      </div>
    </div>
  );
};

export default Notification;