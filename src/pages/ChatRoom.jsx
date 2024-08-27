import { useState } from "react";
import ChatInputBox from "../components/ChatInputBox";
import ChatBubble from "../components/ChatBubble";

// This is a simple component for rendering each chat bubble
function ChatRoom() {
	const [chatLog, setChatLog] = useState([]);

	// Function to add a new message to the chat log
	const addMessageToLog = (newMessage) => {
		setChatLog((prevLog) => [...prevLog, newMessage]);
	};

	return (
		<section className="w-4/5 m-auto h-96 flex flex-col justify-between gap-y-8">
			<header className="min-h-80 overflow-y-scroll">
			{/* Render Chat Bubbles based on chatLog */}
			{chatLog.map((message, index) => (
				<ChatBubble key={index} message={message} />
			))}
			</header>
			<div>
			{/* Pass the addMessageToLog function to ChatInputBox */}
				<ChatInputBox addMessage={addMessageToLog} />
			</div>
		</section>
	);
}

export default ChatRoom;
