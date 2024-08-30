import { Helmet } from "react-helmet-async";
import ChatbotGreeting from "../components/ChatbotGreeting";
import { useEffect } from "react";
import { firebaseAuth, firebaseDB } from "../config/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { saveMessageToResponses } from "../api/auth";

// This is a simple component for rendering each chat bubble
function ChatRoom() {
  // Function to add a new message to the chat log

  console.log(firebaseAuth.currentUser);
  const handleUserInput = async (event) => {
    const user = firebaseAuth.currentUser;
    if (user) {
      // Add user prompt to the prompt history

      const userPrompt = event.detail.input;

      // Update Firestore with the prompt history
      const userDocRef = doc(firebaseDB, "users", user.uid);
      await updateDoc(userDocRef, {
        promptHistory: arrayUnion(userPrompt),
      });
    }
  };

  async function handleReceivedMessage(event) {
    // When bot working add logic to store responses

    await saveMessageToResponses(event.detail.data.messages);

    event.detail.data.messages = event.detail.data.messages.filter(
      (message) => {
        return message.type === "text";
      }
    );
  }

  useEffect(() => {
    // Here we add an event listener to the chatbot user input
    window.addEventListener("df-user-input-entered", handleUserInput);

    // Here we add an event listener to the chatbot response
    window.addEventListener("df-response-received", handleReceivedMessage);

    return () => {
      window.removeEventListener("df-user-input-entered", handleUserInput);
      window.removeEventListener("df-response-received", handleReceivedMessage);
    };
  }, []);

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
          oauth-client-id="1019667926235-4jj7aobdfbjmt0mgfjvl0mo1ckge425h.apps.googleusercontent.com"
          location="eu"
          project-id="national-ai-rebuild-ireland"
          agent-id="db35d0a4-b15d-4349-a972-2095c66f446d"
          language-code="en"
          max-query-length="-1"
        >
          <df-messenger-chat-bubble
            expanded="true"
            class="absolute bottom-20 right-0"
            chat-title="Rebuild Ireland"
          ></df-messenger-chat-bubble>
        </df-messenger>
        <ChatbotGreeting />
      </section>
    </>
  );
}

export default ChatRoom;
