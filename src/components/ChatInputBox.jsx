import { useState } from "react";
import PropTypes from "prop-types";

function ChatInputBox({ addMessage }) {
	const [userMessage, setUserMessage] = useState("");

	const updateMessage = (e) => {
		setUserMessage(e.target.value);
	};

	const handleSendMessage = () => {
		if (userMessage.trim()) {
			addMessage(userMessage);
			setUserMessage(""); // Clear the input after sending
		}
	};

	return (
		<div id="chatInputBox" className="w-full">
			<input
				className="p-2 rounded-lg shadow bg-primarylight w-full"
				placeholder="Enter your message to Buildie the chatbot."
				onChange={updateMessage}
				value={userMessage}
			/>
			<button 
				onClick={handleSendMessage} 
				className="rounded-lg shadow relative float-right bg-customLightGreen hover:bg-customGreen text-primarylight mt-2 px-2 py-1"
				aria-label="Submit message button"	
			>
				Submit
			</button>
		</div>
	);
};
ChatInputBox.propTypes = {
	addMessage: PropTypes.string,
};
export default ChatInputBox;