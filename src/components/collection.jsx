import React, { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Collections = ({ name, items }) => {
    const nav = useNavigate();
    const [visibleItems, setVisibleItems] = useState(8);

    const handleViewMore = () => {
        setVisibleItems((prev) => prev + 4);
    };

    return (
        <div className="w-full pl-2 pr-2 pb-20">
            <div className="w-full h-[80px] text-[30px] font-bold flex items-center justify-center">
                {name}
            </div>
            <div className="w-full flex justify-around gap-2 lg:gap-0 flex-wrap bg-[#f8f8f8] pb-10">
                {items.slice(0, visibleItems).map((item, i) => (
                    <div
                        key={i}
                        onClick={() => nav(`/detail/${item.id}`)}
                        className="w-[47%] lg:w-[25%] hover:border-2 border-black cursor-pointer p-2 rounded"
                    >
                        <div className="w-full h-[200px] lg:h-[300px] bg-gray-300 relative">
                            <img
                                className="object-cover hover:object-cover lg:object-contain w-full rounded-[10px] h-full"
                                src={item.image}
                                alt={`Image of ${item.name}`}
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-1">
                                <FaNairaSign /> <p className="font-bold">{item.price}</p>
                            </div>
                            <p className="text-[10px]">{item.description}</p>
                            <div>
                                <p>{item.colors} colors</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleItems < items.length && (
                <div className="w-full flex items-center justify-center pt-10">
                    <button
                        onClick={handleViewMore}
                        className="w-[70%] lg:w-[20%] h-[60px] lg:h-[40px] flex items-center justify-center gap-3 bg-blue-100"
                    >
                        View More <FaLongArrowAltDown />
                    </button>
                </div>
            )}
        </div>
    );
};

Collections.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string,
            price: PropTypes.number.isRequired,
            description: PropTypes.string,
            colors: PropTypes.number,
        })
    ).isRequired,
};

export default Collections;
