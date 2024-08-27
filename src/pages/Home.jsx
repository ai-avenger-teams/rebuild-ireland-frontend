import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
        <Helmet>
        <title>Home Page</title>
        <meta name="description" content="ReBuild Ireland is an AI-powered platform helping you navigate the process of refurbishing derelict and vacant properties in Ireland." />
        <meta name="keywords" content="ReBuild Ireland, property renovation, vacant properties Ireland, AI property guide, refurbishment grants, Irish real estate, derelict properties, home renovation Ireland, property compliance, derelict property grant, vacant property grant" />
      </Helmet>
        <div className='m-4'>
            <h1 className="text-customGreen font-semibold text-5xl py-3">Welcome to ReBuild Ireland</h1>
            <p className="bg-primarylight text-lg text-start tracking-wide mx-auto max-w-lg rounded-lg overflow-hidden shadow p-3 mt-5">
                ReBuild Ireland is an innovative AI-driven platform designed to guide individuals through the intricate process of purchasing,
                refurbishing, and managing vacant or derelict properties in Ireland. This platform aims to demystify the complexities of property renovation
                by providing users with a personalized, step-by-step guide, leveraging AI to ensure compliance with local regulations, optimize grant applications,
                and manage refurbishment projects efficiently.</p>
        </div>
        </>
    );
}

export default Home;
