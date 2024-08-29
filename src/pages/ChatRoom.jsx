import { Helmet } from "react-helmet-async";
import ChatInputBox from "../components/ChatInputBox";
import ChatbotGreeting from "../components/ChatbotGreeting";

// This is a simple component for rendering each chat bubble
function ChatRoom() {
  // Function to add a new message to the chat log

  return (
    <>
      <Helmet>
        <title>Chatbot Buildie</title>
        <meta
          name="description"
          content="Chat with Buildie, ReBuild Ireland's AI chatbot, for instant guidance on property purchasing, renovation, and management in Ireland. Get answers to your questions, personalized advice, and support for your property projects."
        />
        <meta
          name="keywords"
          content="ReBuild Ireland AI chat, Buildie chatbot, property renovation advice, AI property assistant, Irish real estate chat, property management support, AI-driven property guidance, home renovation tips, property investment Ireland, interactive property help"
        />
      </Helmet>
      <section className="w-4/5 relative h-screen m-auto flex flex-col justify-between gap-y-8">
        <df-messenger
          // oauth-client-id="INSERT_OAUTH_CLIENT_ID"
          location="eu"
          project-id="national-ai-rebuild-ireland"
          agent-id="db35d0a4-b15d-4349-a972-2095c66f446d"
          language-code="en"
          max-query-length="-1"
        >
          <df-messenger-chat-bubble
            open
            class="absolute bottom-20  right-0"
            chat-title="Rebuild Ireland"
          ></df-messenger-chat-bubble>
        </df-messenger>
        <div>
          {/* Pass the addMessageToLog function to ChatInputBox */}
          {/* <ChatInputBox addMessage={addMessageToLog} /> */}
        </div>
        <ChatbotGreeting />
      </section>
    </>
  );
}

export default ChatRoom;
