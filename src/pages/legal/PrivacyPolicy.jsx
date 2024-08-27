import { Helmet } from 'react-helmet-async';

function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="Learn about ReBuild Ireland's commitment to protecting your privacy. Our Privacy Policy explains how we collect, use, and safeguard your personal information when you use our AI-driven platform for property renovation in Ireland." />
                <meta name="keywords" content="ReBuild Ireland Privacy Policy, data protection, personal information, privacy practices, data security, AI platform privacy, user data collection, Ireland property platform, privacy compliance, information safeguarding" />
            </Helmet>
            <div className='m-4'>
                <h1 className="text-customGreen font-semibold text-3xl py-3">Privacy Policy</h1>
                <p className="bg-primarylight text-lg text-start tracking-wide mx-auto max-w-lg rounded-lg overflow-hidden shadow p-3 mt-5">
                    *Policy goes here*</p>
            </div>
        </>
    );
}

export default PrivacyPolicy;
