import { useState } from "react";
import { Helmet } from 'react-helmet-async';
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
		<>
			<Helmet>
				<title>Chatbot Buildie</title>
				<meta name="description" content="Chat with Buildie, ReBuild Ireland's AI chatbot, for instant guidance on property purchasing, renovation, and management in Ireland. Get answers to your questions, personalized advice, and support for your property projects." />
				<meta name="keywords" content="ReBuild Ireland AI chat, Buildie chatbot, property renovation advice, AI property assistant, Irish real estate chat, property management support, AI-driven property guidance, home renovation tips, property investment Ireland, interactive property help" />
			</Helmet>
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
		</>
	);
}

export default ChatRoom;
