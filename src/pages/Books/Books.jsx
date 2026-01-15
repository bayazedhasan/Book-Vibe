import React from 'react';
import useData from '../../hooks/useData';
import { CiStar } from 'react-icons/ci';

const Books = () => {
    const { books } = useData()
    return (
        <div className='container mx-auto px-32'>
            <div>
                <h1 className='text-4xl font-bold flex justify-center items-center py-15'>Books</h1>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    books.map((book, index) => {
                        return (
                            <div key={index} className='border px-4 py-4 rounded-xl bg-[#FFFFFF] border-gray-200 p-5'>
                                <div className='border border-none bg-[#F3F3F3] p-6 flex justify-center items-center rounded-xl'>
                                    <img className='w-40 h-30 object-cover' src={book.image} alt="" />
                                </div>
                                <div className='pt-4'>
                                    <div className='flex items-center gap-2'>
                                        <p className='border bg-[#F3F3F3] px-3 text-[12px] border-none rounded-full text-[#23BE0A]'>{book.tags[0]}</p>
                                        <p className='border bg-[#F3F3F3] px-3 text-[12px] border-none rounded-full text-[#23BE0A]'>{book.tags[1]}</p>
                                    </div>
                                    <h1 className='text-xl font-bold py-2 truncate'>{book.bookName}</h1>
                                    <p className='text-[#424242] text-sm font-medium'>By: {book.author}</p>
                                    <div className='border-b border-dashed my-2'></div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[#424242] text-sm'>{book.category}</p>
                                        <div className='flex  items-center gap-1'>
                                            <p className='text-[#424242] text-sm'>{book.rating}</p>
                                            <CiStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Books;