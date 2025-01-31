import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductList = () => {
  const listDetailHeader = [
    "Image",
    "Product name",
    "Price",
    "Quantity",
    "Sale",
    "Stock",
    "Date listed",
    "Action",
  ];

  const [listDetail, setListDetail] = useState([
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    { image: "https://i.pinimg.com/474x/f9/3e/ea/f93eeac8630a7e5d41fc495c30867898.jpg", productName: "Polo Shirt", price: 300, quantity: 40, sale: 10, stock: "In Stock", dateListed: "01/01/2025" },
    // Additional sample data...
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (index) => {
    const updatedList = listDetail.filter((_, i) => i !== index);
    setListDetail(updatedList);
  };

  const handleEdit = (index) => {
    alert(`Edit product at index: ${index}`);
  };

  const filteredList = listDetail.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="w-full font-bold text-[25px] h-[70px] flex items-center">
        <p>Product List</p>
      </div>
      <div className="w-full h-auto bg-white p-3 rounded-lg shadow-md">
        {/* Header Controls */}
        <div className="w-full h-[70px] flex items-center justify-between">
          {/* Entries Dropdown */}
          <div className="text-gray-500 flex items-center">
            <p>Showing</p>
            <select className="w-[80px] mx-2 outline-none border-2 border-gray-500 rounded-md">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <p>entries</p>
          </div>

          {/* Search Bar */}
          <div className="w-[40%] h-[45px] border-2 border-gray-500 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full border-none outline-none bg-inherit pl-3"
            />
            <IoSearchOutline size={25} className="mx-2" />
          </div>
        </div>

        {/* Product Table */}
        <div className="w-full overflow-auto mt-3">
          {/* Table Header */}
          <div className="w-full flex bg-[#4ea1bf] rounded-md pl-2">
            {listDetailHeader.map((header, i) => (
              <div key={i} className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center font-bold">
                <p>{header}</p>
              </div>
            ))}
          </div>

          {/* Table Rows */}
          <div className="w-full flex flex-col gap-2 mt-2">
            {filteredList.map((product, index) => (
              <div
                key={index}
                className="w-full flex bg-[#eef6fa] hover:bg-[#d6e9f3] rounded-md p-2 items-center"
              >
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px]">
                  <img
                    className="object-contain h-full w-full rounded-md"
                    src={product.image}
                    alt={product.productName}
                  />
                </div>
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center">
                  {product.productName}
                </div>
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center">
                  ${product.price}
                </div>
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center">
                  {product.quantity}
                </div>
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center">
                  {product.sale}%
                </div>
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center">
                  {product.stock}
                </div>
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center">
                  {product.dateListed}
                </div>
                <div className="w-[150px] md:w-[200px] lg:w-[300px] h-[50px] flex items-center gap-3">
                  <CiEdit size={25} onClick={() => handleEdit(index)} className="cursor-pointer" />
                  <RiDeleteBin6Line size={25} onClick={() => handleDelete(index)} className="cursor-pointer text-red-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
