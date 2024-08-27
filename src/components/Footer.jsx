import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-secondary py-4">
            <div className="container mx-auto text-center">
                <div className="mt-2">
                    <Link to="/contact" className="text-customGreen hover:font-semibold mx-2 px-2">Contact Us</Link>
                    <Link to="/faq" className="text-customGreen hover:font-semibold mx-2">FAQ</Link>
                    <Link to="/privacyPolicy" className="text-customGreen hover:font-semibold mx-2">Privacy Policy</Link>
                    <Link to="/termsOfService" className="text-customGreen hover:font-semibold mx-2">Terms Of Service</Link>
                </div>
                <p className="text-sm pt-2">&copy;2024 ReBuild Ireland<br></br>All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
