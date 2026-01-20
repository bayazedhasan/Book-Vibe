import React from 'react';
import useData from '../../hooks/useData';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Books = () => {
    const { books } = useData();

    return (
        <div className='container mx-auto px-4 lg:px-24 my-20'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-extrabold mb-4'>Books</h2>
                <p className='text-base-content/60 max-w-2xl mx-auto'>Browse our collection of top-rated books from various genres.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    books.map((book, index) => {
                        return (
                            <Link to={`/books/${book.bookId}`} key={index} className='card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer'>
                                <figure className='bg-base-200/50 m-6 rounded-2xl p-8 h-64 flex items-center justify-center relative overflow-hidden'>
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <img
                                        className='h-44 shadow-lg group-hover:scale-110 transition-transform duration-500'
                                        src={book.image}
                                        alt={book.bookName}
                                    />
                                </figure>
                                <div className='card-body pt-0'>
                                    <div className='flex gap-3 mb-3'>
                                        {book.tags.slice(0, 2).map((tag, idx) => (
                                            <span key={idx} className='badge badge-primary/10 text-primary font-bold border-none px-3 py-3'>{tag}</span>
                                        ))}
                                    </div>

                                    <h2 className='card-title font-bold text-2xl font-serif mb-1 group-hover:text-primary transition-colors line-clamp-1'>
                                        {book.bookName}
                                    </h2>
                                    <p className='text-base-content/70 font-medium mb-3'>By: {book.author}</p>

                                    <div className='border-t border-dashed border-base-300 my-2'></div>

                                    <div className='flex justify-between items-center text-base-content/70 font-medium mt-auto'>
                                        <span>{book.category}</span>
                                        <div className='flex items-center gap-2'>
                                            <span>{book.rating}</span>
                                            <CiStar className="text-xl pb-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Books;