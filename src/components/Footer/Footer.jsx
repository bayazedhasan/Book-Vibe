import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content pt-16 pb-8">
            <div className="container mx-auto px-4 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight"><span className="text-secondary">Book</span><span className="text-primary">Vibe</span></h2>
                        <p className="text-neutral-content/70 text-sm leading-relaxed">
                            Discover your next favorite book with BookVibe. We curate the best reads just for you, from timeless classics to modern bestsellers.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-primary transition-colors text-xl"><FaFacebook /></a>
                            <a href="#" className="hover:text-primary transition-colors text-xl"><FaTwitter /></a>
                            <a href="#" className="hover:text-primary transition-colors text-xl"><FaInstagram /></a>
                            <a href="#" className="hover:text-primary transition-colors text-xl"><FaGithub /></a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="footer-title opacity-100 text-white mb-4">Services</h6>
                        <ul className="space-y-2 text-sm text-neutral-content/70">
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">Book Reviews</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">Reading Lists</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">Author Interviews</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">Community Forum</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h6 className="footer-title opacity-100 text-white mb-4">Company</h6>
                        <ul className="space-y-2 text-sm text-neutral-content/70">
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">Jobs</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:underline">Press Kit</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h6 className="footer-title opacity-100 text-white mb-4">Newsletter</h6>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text-alt text-neutral-content/70">Enter your email address</span>
                            </label>
                            <div className="join w-full">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item w-full text-black focus:outline-none focus:border-primary" />
                                <button className="btn btn-primary join-item text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-content/10 mt-12 pt-8 text-center text-sm text-neutral-content/50">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Book Vibe Ltd.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;