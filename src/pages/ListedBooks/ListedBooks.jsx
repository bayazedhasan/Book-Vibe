import React, { useState, useEffect } from 'react';
import useData from '../../hooks/useData';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";

const ListedBooks = () => {
    const { books } = useData();
    const [tabIndex, setTabIndex] = useState(0);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [sortBy, setSortBy] = useState('rating');

    // Simulate "Read" vs "Wishlist" based on some criteria since we don't have a backend yet
    // Example: Read = Rating > 4.5, Wishlist = Rating <= 4.5
    const readBooks = books.filter(b => b.rating > 4.5);
    const wishlistBooks = books.filter(b => b.rating <= 4.5);

    useEffect(() => {
        let currentBooks = tabIndex === 0 ? [...readBooks] : [...wishlistBooks];

        // Sorting Logic
        if (sortBy === 'rating') {
            currentBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'pages') {
            currentBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === 'year') {
            currentBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        setDisplayBooks(currentBooks);
    }, [books, tabIndex, sortBy]);

    return (
        <div className="container mx-auto px-4 lg:px-24 py-8">
            {/* Header */}
            <div className="bg-base-200 rounded-3xl py-8 mb-8 text-center">
                <h2 className="text-3xl font-bold">Books</h2>
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-center mb-12">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-primary text-white px-8 m-1">
                        Sort By <span className="text-xs">▼</span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => setSortBy('rating')}><a>Rating</a></li>
                        <li onClick={() => setSortBy('pages')}><a>Number of Pages</a></li>
                        <li onClick={() => setSortBy('year')}><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>

            {/* Tabs */}
            <div role="tablist" className="tabs tabs-lifted max-w-4xl cursor-pointer">
                <a
                    role="tab"
                    className={`tab text-lg ${tabIndex === 0 ? 'tab-active font-bold text-primary [--tab-bg:theme(colors.base-100)] [--tab-border-color:theme(colors.base-300)]' : ''}`}
                    onClick={() => setTabIndex(0)}
                >
                    Read Books
                </a>
                <a
                    role="tab"
                    className={`tab text-lg ${tabIndex === 1 ? 'tab-active font-bold text-primary [--tab-bg:theme(colors.base-100)] [--tab-border-color:theme(colors.base-300)]' : ''}`}
                    onClick={() => setTabIndex(1)}
                >
                    Wishlist Books
                </a>
            </div>

            {/* Book List Content */}
            <div className="bg-base-100 border-x border-b border-base-300 rounded-b-box p-6 space-y-6">
                {displayBooks.map((book) => (
                    <div key={book.bookId} className="card card-side bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all flex-col md:flex-row p-6 items-center md:items-start gap-8">
                        <figure className="w-full md:w-56 h-64 bg-base-200 rounded-2xl flex items-center justify-center shrink-0">
                            <img src={book.image} alt={book.bookName} className="h-48 object-contain shadow-lg rounded-md" />
                        </figure>
                        <div className="flex-1 w-full space-y-4">
                            <div>
                                <h2 className="card-title text-2xl font-bold font-work-sans">{book.bookName}</h2>
                                <p className="font-medium text-gray-500 mt-2">By : {book.author}</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <span className="font-bold text-black">Tag</span>
                                {book.tags.map((tag, idx) => (
                                    <span key={idx} className="badge badge-accent/10 text-accent font-semibold p-3">#{tag}</span>
                                ))}
                                <div className="flex items-center gap-2 text-gray-500">
                                    <CiLocationOn className="text-xl" />
                                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 text-gray-500 pb-4 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <HiOutlineUsers className="text-xl" />
                                    <span>Publisher: {book.publisher}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdOutlineContactPage className="text-xl" />
                                    <span>Page {book.totalPages}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <span className="badge badge-primary/10 text-primary p-4 rounded-full">Category: {book.category}</span>
                                <span className="badge badge-warning/10 text-warning p-4 rounded-full">Rating: {book.rating}</span>

                                <Link to={`/books/${book.bookId}`} className="btn btn-primary rounded-full px-6 text-white ml-auto">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {displayBooks.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-xl">No books found in this list.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListedBooks;