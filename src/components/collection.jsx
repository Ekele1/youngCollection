import React, { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

const Collections = ({ name, items }) => {
    const nav = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Calculate the range of items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = items.slice(startIndex, endIndex);

    // Skeleton Loading Component
    const SkeletonLoader = () => (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            aria-label="Loading item"
        >
            <div className="w-full bg-gray-200 animate-pulse"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 animate-pulse mb-1"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-1/2"></div>
            </div>
        </div>
    );

    return (
        <div className="w-full lg:px-4 lg:py-2 pb-5 bg-white dark:bg-[#111828] dark:text-gray-500">
            {/* Section Title */}
            <div className="w-full text-center pt-10 pb-5 mb-5">
                <h1 className="text-2xl dark:text-blue-600 lg:text-3xl font-bold">
                    {name}
                </h1>
                <p className="text-gray-500 mt-2">Explore our curated collection</p>
            </div>

            <div className="w-full flex items-center justify-center">
                {/* Items Grid */}
                <div className="lg:w-[80%] w-full p-1 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 gap-1">
                    {visibleItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group bg-white dark:bg-[#1d283a] rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Image Container */}
                            <div onClick={() => nav(`/detail/${item._id}`, { state: item })} className="w-full">
                                <LazyLoad offset={100} once>
                                    <img
                                        className="w-full lg:h-[200px] rounded-sm lg:rounded-lg transition-transform duration-300"
                                        src={item?.images[0]}
                                        alt={`Image of ${item.name}`}
                                        loading="lazy"
                                        aria-hidden="true"
                                    />
                                </LazyLoad>
                            </div>

                            {/* Item Details */}
                            <div className="lg:p-4 flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-[15px] font-semibold text-gray-500">
                                    <FaNairaSign />
                                    <p>{item.price.toLocaleString()}</p>
                                </div>
                                <p className="text-sm text-gray-600 truncate">
                                    {item.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Skeleton Loading for Remaining Items */}
                    {visibleItems.length < itemsPerPage &&
                        Array.from({ length: itemsPerPage - visibleItems.length }).map((_, i) => (
                            <SkeletonLoader key={`skeleton-${i}`} />
                        ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="w-full flex justify-center mt-10">
                <nav
                    className="flex gap-2"
                    aria-label="Pagination"
                >
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-4 py-2 rounded-lg ${
                                currentPage === i + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            } transition-colors duration-300`}
                            aria-label={`Go to page ${i + 1}`}
                            aria-current={currentPage === i + 1 ? "page" : undefined}
                        >
                            {i + 1}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

Collections.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string,
            colors: PropTypes.number,
        })
    ).isRequired,
};

export default Collections;