import { useState } from "react";
import PropTypes from "prop-types";

function ContactForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            onSubmit(formData);
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-primarylight rounded-lg shadow-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-customGreen">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full rounded-lg shadow focus:outline-veryLightGreen"
                    placeholder="Your Name"
                    autoComplete="name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-customGreen">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full rounded-lg shadow focus:outline-veryLightGreen"
                    placeholder="Your Email"
                    autoComplete="email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-customGreen">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full rounded-lg shadow focus:outline-veryLightGreen"
                    rows="4"
                    placeholder="Your Message"
                />
            </div>
            <button
                type="submit"
                className="bg-customLightGreen hover:bg-customGreen text-primarylight py-2 px-4 rounded-lg shadow"
            >
                Send Message
            </button>
        </form>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
