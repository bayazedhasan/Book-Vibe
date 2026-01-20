import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    return (
        <div className='glass-nav'>
            <div className='navbar container mx-auto px-4 lg:px-24'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "font-medium hover:text-primary transition"}>Home</NavLink>
                            <NavLink to="/ListedBooks" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "font-medium hover:text-primary transition"}>Listed Books</NavLink>
                            <NavLink to="/PagesToRead" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "font-medium hover:text-primary transition"}>Pages to Read</NavLink>
                        </ul>
                    </div>
                    <Link to="/" className="text-3xl font-extrabold tracking-tight"><span className="text-secondary">Book</span><span className="text-primary">Vibe</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-base">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "font-medium hover:text-primary transition"}>Home</NavLink>
                        <NavLink to="/ListedBooks" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "font-medium hover:text-primary transition"}>Listed Books</NavLink>
                        <NavLink to="/PagesToRead" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary" : "font-medium hover:text-primary transition"}>Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-primary/20 ring-2 ring-transparent hover:ring-primary/40 transition-all">
                                    <div className="w-10 rounded-full">
                                        <img alt="User" src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-52 border border-base-200">
                                    <li className="menu-title px-4 py-2 text-xs uppercase text-gray-400 font-bold tracking-wider">Account</li>
                                    <li>
                                        <Link to="/profile" className="justify-between active:bg-primary active:text-white">
                                            Profile
                                            <span className="badge badge-primary badge-sm">New</span>
                                        </Link>
                                    </li>
                                    <li><a onClick={signOutUser} className="text-error hover:bg-error/10">Logout</a></li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link to="/signin"><button className='btn btn-ghost text-primary hover:bg-primary/10 font-bold'>Sign In</button></Link>
                                <Link to="/signup"><button className='btn btn-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-transform'>Sign Up</button></Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;