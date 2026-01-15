import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center container mx-auto px-32 p-5'>
            <div>
                <Link to="/"><h1 className='font-extrabold text-2xl text-black'>Book Vibe</h1></Link>
            </div>
            <div className='flex justify-between items-center gap-10'>
                <div className='border border-emerald-400 rounded-md py-1 px-2'>
                    <NavLink to="/"><p className='hover:text-emerald-400 text-gray-600 font-semibold duration-300 text-sm'>Home</p></NavLink>
                </div>
                <div>
                    <NavLink to="/ListedBooks"><p className='hover:text-emerald-400 duration-300 text-gray-600 font-semibold text-sm'>Listed Books</p></NavLink>
                </div>
                <div>
                    <NavLink to="/PagesToRead"><p className='hover:text-emerald-400 duration-300 text-gray-600 font-semibold text-sm'>Pages to Read</p></NavLink>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <button className='btn bg-emerald-400 text-white border-none'>Sign In</button>
                <button className='btn border-none bg-[#59c6d2] text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;