import { MdOutlineError } from "react-icons/md";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center gap text-xs text-red-600">
      <MdOutlineError />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
