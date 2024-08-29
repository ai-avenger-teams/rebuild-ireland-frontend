const GoogleButton = ({ onClick, text }) => {
  return (
    <div className="my-5">
      <button
        type="button"
        onClick={onClick}
        className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center rounded-lg text-customLightGreen hover:border-customLightGreen hover:text-customGreen hover:shadow transition duration-150 shadow border-veryLightGreen"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          className="w-6 h-6"
          alt="Google logo to verify authentication"
        />
        <span> {text || "Login with Google"}</span>
      </button>
    </div>
  );
};

export default GoogleButton;
