import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-secondary">
            <div className="container mx-auto flex justify-between items-center my-3 p-2">
                {/* Logo and Company Name */}
                <Link to="/" className="flex items-center">
                    <img src="../src/assets/logoBrown.png" alt="ReBuild Ireland Logo" className="h-8 w-auto mr-2" />
                    <span className="text-2xl font-semibold text-customGreen hover:text-customLightGreen pt-2">
                        ReBuild Ireland
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-customBrown'} hover:text-customLightGreen px-3 pt-2`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/officers"
                        className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-customBrown'} hover:text-customLightGreen pt-2`}
                    >
                        Officers
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-customBrown'} hover:text-customLightGreen pt-2`}
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/ChatRoom"
                        className={({ isActive }) => `${isActive ? 'text-customGreen' : 'text-customBrown'} bg-customLightGreen hover:bg-customGreen text-primarylight font-bold py-2 px-3 rounded-lg shadow`}
                    >
                        Contact Buildie
                    </NavLink>
                </div>

                {/* Mobile Navigation (Burger Menu) */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-customGreen text-xl focus:outline-none pt-3"
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-secondary px-4 py-3 space-y-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `block text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-customBrown'} hover:text-customLightGreen`}
                        onClick={toggleMobileMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/officers"
                        className={({ isActive }) => `block text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-customBrown'} hover:text-customLightGreen`}
                        onClick={toggleMobileMenu}
                    >
                        Officers
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `block text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-customBrown'} hover:text-customLightGreen`}
                        onClick={toggleMobileMenu}
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/ChatRoom"
                        className={({ isActive }) => `${isActive ? 'text-customGreen' : 'text-customBrown'} block mx-auto w-40 bg-customLightGreen hover:bg-customGreen text-primarylight font-bold py-2 rounded-lg shadow-lg`}
                        onClick={toggleMobileMenu}
                    >
                        Contact Buildie
                    </NavLink>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
