const GoogleButton = ({ onClick, text }) => {
  return (
    <div className="my-5">
      <button
        type="button"
        onClick={onClick}
        className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 border-gray-300"
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
