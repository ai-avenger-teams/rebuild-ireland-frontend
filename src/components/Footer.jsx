import React from 'react';

function Footer() {
    return (
        <footer className="pt-4 mt-8">
            <div className="container mx-auto text-center">
                <div className="mt-2">
                    <a href="/contact" className="text-gray-400 hover:text-gray-300 mx-2 px-2">Contact Us</a>
                    <a href="/faq" className="text-gray-400 hover:text-gray-300 mx-2">FAQ</a>
                    <a href="/privacy-policy" className="text-gray-400 hover:text-gray-300 mx-2">Privacy Policy</a>
                </div>
                <p className="text-sm pt-2">&copy;2024 ReBuild Ireland<br></br>All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
