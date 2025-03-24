import React, { useState, useRef, useContext, useEffect } from "react";
import { FaNairaSign, FaCartPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { AuthContext } from "../onboarding/authContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { toast } from "react-toastify";
import axios from "axios";
import { debounce } from "lodash";
import { Skeleton } from "@mui/material";

const DetailPage = () => {
  const [sample, setSample] = useState([1,2,3,4,5])
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const { id } = useParams();
  const [fullImg, setFullImg] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState("small");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const thumbnailContainerRef = useRef(null);
  const { logout, user, setCart } = useContext(AuthContext);

  // Redirect if product is not found
  // if (!product) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-center text-red-500 text-2xl">
  //         Product not found. Please go back to the{" "}
  //         <a href="/" className="text-blue-500 underline">
  //           homepage
  //         </a>
  //         .
  //       </p>
  //     </div>
  //   );
  // }


  // Debounced add to cart function
  const debouncedAddToCart = debounce(async (data, token) => {
    const apiBaseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.post(`${apiBaseUrl}/cart/addToCart`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(response)
      if (response.data.data?.cart) {
        setCart(response.data.data.cart.items); // Update the cart state with the items array
        toast.success("Product added successfully.");
      } else {
          toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please log in again.");
        logout();
      }
    } finally {
      setLoading(false);
    }
  }, 500); // 500ms debounce delay

  // Handle add to cart
  const handleAddToCart = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!user) {
      setLoading(false);
      toast.error("You have to login to add products to your cart");
      navigate("/onboarding/login");
      return;
    }

    if (quantity < 1 || isNaN(quantity)) {
      setLoading(false);
      toast.error("Quantity must be at least 1");
      return;
    }

    const data = {
      userId: user?._id,
      productId: product._id,
      quantity: parseInt(quantity),
      size: selectedSize,
      selectedImage: fullImg,
    };

    debouncedAddToCart(data, token);
  };

  // Scroll thumbnails
  const scrollThumbnails = (direction) => {
    const container = thumbnailContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(() => checkScroll(container), 300); // Check scroll position after scrolling
    }
  };

  // Check scroll position
  const checkScroll = (container) => {
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (container) {
      checkScroll(container);
      container.addEventListener("scroll", () => checkScroll(container));
      return () => container.removeEventListener("scroll", () => checkScroll(container));
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-[400px] flex items-center justify-center bg-[#ecf5f4]">
        <p className="text-4xl font-semibold">Product Details</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex flex-col gap-6 pt-[70px] pb-[100px]">
          <div className="w-full flex gap-5">
            <div className="w-[50%] flex flex-col gap-3">
              <div className="w-full h-[400px] bg-[#f7f8fa] p-4 rounded-md">
                <img className="w-full h-full object-contain" src="./womenbg.png" alt="" />
              </div>
              <div className="w-full h-[100px] bg-white flex gap-2 overflow-x-scroll items-center">
                <FaChevronLeft />
                {
                  sample.map((e,i)=>(
                <div className="w-[100px] h-full bg-[#f7f8fa] p-2 rounded-md" key={i}>
                  <img className="w-full h-full object-contain" src="./womenbg.png" alt="" />
                </div>
                  ))
                }
                <FaChevronRight />
              </div>
            </div>
            <div className="w-[50%] pl-5">
              <div className="w-full">
                <p className="text-xl font-semibold">Female luxurious Jacket</p>
                <div className="flex items-center gap-5 pt-3 pb-3">
                  <p className="flex items-center text-[#0f3d38]"><FaNairaSign />80,000</p>
                  <p className="flex items-center line-through"><FaNairaSign />120,000</p>
                </div>
                <p className="text-sm mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Laudantium harum optio perferendis iste eligendi accusantium iure eaque ducimus 
                  fugit voluptas voluptate nostrum dolor quae, repellat error illum blanditiis quia commodi.
                </p>
                <div className="flex items-center gap-4 pb-5 pt-5">
                  <p className="text-xs">size</p>
                  <select className="w-[170px] outline-none border-[1px] border-[#0f3d38]" name="size" id="size">
                    <option value="">select size</option>
                    <option value="small">SM</option>
                    <option value="medium">MD</option>
                    <option value="large">L</option>
                    <option value="x-large">Xl</option>
                    <option value="2x-large">2XL</option>
                    <option value="3x-large">3XL</option>
                  </select>
                </div>
                <div className="flex pt-3 items-center gap-6">
                  <input className="outline-none w-[180px] h-[40px] border-[1px] border-[#0f3d38] rounded-md text-sm pl-2" 
                  placeholder="quantity" type="number" />

                  <button className="bg-[#9fbbbe] pl-5 pr-5 pt-2 pb-2 rounded-lg text-white">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[80px] flex items-center justify-between">
              <p className="text-xl font-semibold">More Products Like This</p>
              <div className="flex items-center gap-5">
                <FaChevronLeft />
                <FaChevronRight />
              </div>
            </div>
            <div className="w-full flex items-center gap-4">
              {
                sample.map((e,i)=>(
              <div className="w-[18%] h-[300px] bg-white hover:shadow-md cursor-pointer">
                <div className="w-full h-[70%] bg-[#f7f8fa] p-3">
                  <img className="w-full h-full object-contain" src="./shoe-rb.png" alt="" />
                </div>
                <div className="p-3">
                  <p>Men's shoe</p>
                  <p className="flex items-center"><FaNairaSign />40,000</p>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;