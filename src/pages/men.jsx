import React, { useContext, useEffect, useState, useRef } from 'react';
import Collections from '../components/collection';
import { AuthContext } from "../onboarding/authContext";
import axios from 'axios';

const MenCollections = () => {
    const { products } = useContext(AuthContext);
    const [men, setMen] = useState([]);
    const [videoUrl, setVideoUrl] = useState([
        "./001.mp4", "./002.mp4", "./003.mp4", "./010.mp4", "./005.mp4"
    ]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null); // Reference to the video element

    const getProductByCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/product/category/men`);
            setMen(response.data?.products);
            console.log(response);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProductByCategory();
    }, [products]);

    // Handle video end event
    useEffect(() => {
        const videoElement = videoRef.current;

        const handleVideoEnd = () => {
            // Move to the next video in the list
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrl.length);
        };

        if (videoElement) {
            videoElement.addEventListener('ended', handleVideoEnd);
        }

        // Cleanup event listener
        return () => {
            if (videoElement) {
                videoElement.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, [videoUrl.length]);

    return (
        <>
            <div className="relative h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    ref={videoRef}
                    src={videoUrl[currentVideoIndex]}
                    className="absolute top-0 left-0 w-full h-full object-contain z-0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video Background"
                    muted
                    autoPlay // Automatically start playing the video
                ></video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Elegance Redefined</h1>
                        <p className="text-xl mb-8">Discover Timeless Styles for Every Occasion</p>
                        <button className="px-6 py-3 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <Collections name="MEN'S COLLECTION" items={men} />
        </>
    );
};

export default MenCollections;