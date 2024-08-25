import { TbMessageChatbotFilled } from "react-icons/tb";
import "./App.css";
import { FaUser } from "react-icons/fa";

function App() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="m-2 w-full md:w-1/2 lg:3/4 border flex flex-col rounded-t-xl">
        <header className="w-full bg-primary-500 flex justify-between px-2 py-1 rounded-t-lg items-center bg-blue-500">
          <h2 className="font-semibold text-white flex gap-2 text-2xl items-center">
            <TbMessageChatbotFilled className="text-white" />
            Chatbot
          </h2>
          <span className="text-white aspect-square w-8 cursor-pointer p-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"
              />
            </svg>
          </span>
        </header>

        <div className="flex flex-col gap-4 p-2 select-none">
          <div className="flex items-end">
            <div className="rounded bg-blue-500 w-8 aspect-square p-1.5 items-center flex justify-center">
              <TbMessageChatbotFilled className="text-white text-2xl" />
            </div>
            <p className="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm">
              Hi there 👋
              <br />
              How can I help you today?
            </p>
          </div>
          <div className="flex items-end flex-row-reverse">
            <div className="rounded bg-blue-500 w-8 aspect-square p-1.5">
              <h2 className="font-semibold text-white flex gap-2 text-2xl items-center">
                <FaUser className="text-white" />
              </h2>
            </div>
            <p className="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm">
              Hi there 👋
              <br />I need help!
            </p>
          </div>
        </div>

        <div className="flex items-center my-2 mx-1">
          <textarea
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            className="flex justify-center items-center aspect-square h-9 bg-primary-500 p-2 text-white rounded-full cursor-pointer hover:bg-primary-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
