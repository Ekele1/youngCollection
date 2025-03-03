import React, { useState } from "react";
import { FaNairaSign,} from "react-icons/fa6";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

const Collections = ({ name, items }) => {
    const nav = useNavigate();
    const [visibleItems, setVisibleItems] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setVisibleItems(page * itemsPerPage);
    };

    const totalPages = Math.ceil([items].length / itemsPerPage);

    // Skeleton Loading Component
    const SkeletonLoader = () => (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            aria-label="Loading item"
        >
            <div className="w-full h-48 lg:h-64 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
                <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 animate-pulse mb-1"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-1/2"></div>
            </div>
        </div>
    );

    return (
        <div className="w-full px-4 py-4 bg-gray-50 dark:bg-[#111828] dark:text-gray-500">
            {/* Section Title */}
            <div className="w-full text-center lg:mb-10 mb-5">
                <h1 className="text-3xl dark:text-blue-600 lg:text-4xl font-bold">
                    {name}
                </h1>
                <p className="text-gray-500 mt-2">Explore our curated collection</p>
            </div>

            {/* Items Grid */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 gap-1">
                {items?.slice(0, visibleItems).map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group bg-white dark:bg-[#1d283a] rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        {/* Image Container */}
                        <div onClick={()=>nav(`/detail/${item._id}`, {state: item})} className="w-full">
                            <LazyLoad offset={100} once>
                                <img
                                    className="w-full lg:h-[200px] h-[150px] object-contain rounded-lg transition-transform duration-300"
                                    src={item?.images[0]}
                                    // srcSet={`${item.image} 1x, ${item.image.replace(".jpg", "@2x.jpg")} 2x, ${item.image.replace(".jpg", "@3x.jpg")} 3x`}
                                    alt={`Image of ${item.name}`}
                                    loading="lazy"
                                    aria-hidden="true"
                                />
                            </LazyLoad>
                        </div>

                        {/* Item Details */}
                        <div className="lg:p-4 flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-lg font-semibold text-gray-500">
                                <FaNairaSign />
                                <p>{item.price.toLocaleString()}</p>
                            </div>
                            <p className="text-sm text-gray-600">
                                {item.name}
                            </p>
                            {/* <div className="text-xs text-gray-500">
                                {item.description}
                            </div> */}

                            {/* Add to Cart Button */}
                            <button
                                onClick={()=>nav(`/detail/${item._id}`, {state: item})}
                                className="w-full mt-2 flex items-center justify-center lg:gap-2 lg:px-4 lg:py-2 py-1 bg-blue-600 text-white lg:rounded-lg rounded-sm hover:bg-blue-700 transition-colors duration-300"
                                aria-label={`Add ${item.name} to cart`}
                            >
                                {/* <BsFillCartPlusFill aria-hidden="true" /> */}
                                See detail
                            </button>
                        </div>
                    </motion.div>
                ))}

                {/* Skeleton Loading for Remaining Items */}
                {Array.from({ length: visibleItems - items.slice(0, visibleItems).length }).map((_, i) => (
                    <SkeletonLoader key={`skeleton-${i}`} />
                ))}
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