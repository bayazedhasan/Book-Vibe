import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import { CiStar } from 'react-icons/ci';

const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useData();
    const [book, setBook] = useState(null);

    useEffect(() => {
        if (books.length > 0) {
            const singleBook = books.find(b => b.bookId == bookId);
            setBook(singleBook);
        }
    }, [books, bookId]);

    if (!book) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        )
    }

    return (
        <div className='container mx-auto px-4 lg:px-24 my-10'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-base-100 rounded-3xl p-6 lg:p-12 shadow-xl border border-base-200">

                {/* Image Section */}
                <div className="bg-base-200/50 rounded-2xl flex items-center justify-center p-8 lg:p-16 h-full min-h-[400px]">
                    <img
                        src={book.image}
                        alt={book.bookName}
                        className="rounded-xl shadow-2xl w-full max-w-sm hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold font-serif leading-tight">{book.bookName}</h1>
                    <p className="text-xl font-medium text-base-content/70">By: <span className="text-base-content font-semibold">{book.author}</span></p>

                    <div className="border-t border-dashed border-base-300"></div>

                    <div className="text-lg font-medium text-base-content/80">
                        {book.category}
                    </div>

                    <div className="border-t border-dashed border-base-300"></div>

                    <p className="text-base-content/80 leading-relaxed text-justify">
                        <span className="font-bold text-base-content">Review:</span> {book.review}
                    </p>

                    <div className="flex gap-4 items-center flex-wrap">
                        <span className="font-bold text-base-content">Tags:</span>
                        {book.tags.map((tag, idx) => (
                            <span key={idx} className="badge badge-primary/10 text-primary font-bold px-4 py-3">#{tag}</span>
                        ))}
                    </div>

                    <div className="border-t border-base-300"></div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-12 text-sm lg:text-base">
                            <span className="text-base-content/60 w-32">Number of Pages:</span>
                            <span className="font-bold text-base-content">{book.totalPages}</span>
                        </div>
                        <div className="flex items-center gap-12 text-sm lg:text-base">
                            <span className="text-base-content/60 w-32">Publisher:</span>
                            <span className="font-bold text-base-content">{book.publisher}</span>
                        </div>
                        <div className="flex items-center gap-12 text-sm lg:text-base">
                            <span className="text-base-content/60 w-32">Year of Publishing:</span>
                            <span className="font-bold text-base-content">{book.yearOfPublishing}</span>
                        </div>
                        <div className="flex items-center gap-12 text-sm lg:text-base">
                            <span className="text-base-content/60 w-32">Rating:</span>
                            <span className="font-bold text-base-content flex items-center gap-1">
                                {book.rating} <CiStar className="text-xl pb-1" />
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button className="btn btn-outline px-8 h-12 rounded-xl text-lg hover:bg-base-content hover:text-base-100 font-bold">
                            Read
                        </button>
                        <button className="btn btn-primary px-8 h-12 rounded-xl text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform font-bold">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
