const Error500 = () => {
    return (
        <div className="container mx-auto text-center my-10">
            <h1 className="text-customGreen font-semibold text-5xl py-3">Server Error!</h1>
            <div className="py-3">
                <p className="text-lg px-2">Uh-oh, something went wrong on our end. It seems the server has encountered a problem. Don't worry, we're on it! Meanwhile, here's a button to help you head back to the home page!</p>
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

export default Error500;
