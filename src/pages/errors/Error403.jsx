const Error403 = () => {
    return (
        <div className="container mx-auto text-center my-10">
            <h1 className="text-customGreen font-semibold text-5xl py-3">Oops!</h1>
            <div className="py-3 mb-6">
                <p className="text-lg">It seems you don't have permission to access this page. If you believe this is a mistake, please contact support or go back to the home page.</p>
            </div>
            <a
                className="inline-block rounded-lg shadow bg-customLightGreen hover:bg-customGreen text-white mt-4 px-4 py-2"
                href="/"
            >
                Back to Home Page
            </a>
        </div>
    );
};

export default Error403;
