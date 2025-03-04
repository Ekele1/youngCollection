import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footercomp = () => {
    return (
        <footer className="dark:bg-gray-900 bg-[#1e2b47] py-12">
            <div className="container mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div className="mb-8">
                        <h3 className="text-xl text-gray-500 font-bold mb-4">Elegance</h3>
                        <p className="text-gray-500">
                            Discover timeless fashion and elevate your style with our curated collections. We bring you the finest clothing for every occasion.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8">
                        <h3 className="text-xl text-gray-500 font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-500 hover:text-black transition-colors">Home</a></li>
                            <li><a href="/shop" className="text-gray-500 hover:text-black transition-colors">Shop</a></li>
                            <li><a href="/about" className="text-gray-500 hover:text-black transition-colors">About Us</a></li>
                            <li><a href="/contact" className="text-gray-500 hover:text-black transition-colors">Contact</a></li>
                            <li><a href="/faq" className="text-gray-500 hover:text-black transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-500">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter to get the latest updates and exclusive offers.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors"
                            >
                                <FaEnvelope className="inline-block" />
                            </button>
                        </form>
                    </div>

                    {/* Social Media */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-500">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white my-8"></div>

                {/* Bottom Footer */}
                <div className="text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Elegance. All rights reserved.
                    </p>
                    <p className="mt-2">
                        Designed with ❤️ by <a href="https://yourwebsite.com" className="text-blue-500 hover:text-blue-400">Your Team</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footercomp;