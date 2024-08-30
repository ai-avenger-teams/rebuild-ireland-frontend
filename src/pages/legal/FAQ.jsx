import React from "react";
import { Helmet } from 'react-helmet-async';

const FAQPage = () => {
    const faqs = [
        {
            question: "What is ReBuild Ireland?",
            answer: "ReBuild Ireland is an innovative AI-driven platform designed to guide individuals through the process of purchasing, refurbishing, and managing vacant or derelict properties in Ireland. It offers personalized, step-by-step assistance to help you navigate property renovation, comply with local regulations, and access available grants."
        },
        {
            question: "Is ReBuild Ireland free to use?",
            answer: "Yes, ReBuild Ireland is completely free to use."
        },
        {
            question: "Can I use ReBuild Ireland if I’m new to property renovation?",
            answer: "Absolutely! ReBuild Ireland is designed for users of all experience levels. Whether you're a first-time renovator or a seasoned property investor, our platform provides the guidance and resources you need to succeed."
        },
        {
            question: "What types of properties can I work on using ReBuild Ireland?",
            answer: "ReBuild Ireland specializes in vacant and derelict properties across Ireland. Whether you're looking to refurbish a small cottage or redevelop a larger building, our platform can support your project."
        },
        {
            question: "Does ReBuild Ireland provide support for legal and regulatory compliance?",
            answer: "Yes, ReBuild Ireland helps you navigate the legal and regulatory landscape. The platform provides guidance on local regulations and ensures that your project complies with all necessary requirements."
        },
        {
            question: "How can I contact support?",
            answer: "If you need assistance, you can contact our support team through the 'Contact Us' page. Fill out the form with your details and a description of your issue, and our support team will get back to you as soon as possible."
        },
        {
            question: "Is my personal information safe?",
            answer: "Yes, we prioritize the security of your personal information. Our website uses industry-standard security measures to protect your data. Please refer to our Privacy Policy for more details on how we handle your information."
        },
        {
            question: "What should I do if I encounter a bug?",
            answer: "If you encounter a bug or any technical issues, please report it to our support team via the 'Contact Us' page. Provide as much detail as possible about the issue, including screenshots if applicable, so we can resolve it promptly."
        }
    ];

    return (
        <>
            <Helmet>
                <title>FAQ Page</title>
                <meta name="description" content="Find answers to frequently asked questions about ReBuild Ireland, including how our AI-driven platform helps with derelict and vacant property renovation in Ireland." />
                <meta name="keywords" content="ReBuild Ireland FAQ, frequently asked questions, property renovation help, AI property platform, Ireland real estate support, renovation guidance, home renovation questions, property compliance FAQ" />
            </Helmet>
            <div className="container justify-content-center text-center mx-auto my-3">
                <h1 className="text-customGreen font-semibold text-3xl py-3">Frequently Asked Questions</h1>
                <div className="w-full max-w-5xl mx-auto my-3 flex flex-col">
                    <p className="p-3">
                        Welcome to our FAQ section! Here you will find answers to the most commonly asked questions about our services. We aim to provide clear and concise information to help you better understand our offerings and resolve any queries you may have. If you need further assistance, please do not hesitate to contact us directly.
                    </p>
                    <div className="px-2">
                        {faqs.map((faq, index) => (
                            <div key={index} className="w-full max-w-4xl mx-auto my-4 p-4 border rounded-lg shadow-lg bg-primarylight text-start">
                                <h2 className="text-customGreen font-semibold text-lg pb-2">{faq.question}</h2>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQPage;