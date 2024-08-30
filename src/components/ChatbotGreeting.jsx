import { useState, useEffect } from "react";

function ChatbotGreeting() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      className={`fixed right-4 top-24 bg-primarylight p-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center">
        <img
          src="/buildie2.png"
          alt="Chatbot Buildie"
          className="w-12 h-12 mr-3 rounded-full"
        />
        <div>
          <p className="font-semibold text-customGreen">Hello, I’m Buildie!</p>
          <p>Here to help!</p>
        </div>
      </div>
    </div>
  );
}

export default ChatbotGreeting;
