import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center pb-3">
                <NavLink
                    to="/"
                    className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-green-700' : 'text-black'}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/officers"
                    className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-green-700' : 'text-black'}`}
                >
                    Officers
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-green-700' : 'text-black'}`}
                >
                    Contact Us
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
