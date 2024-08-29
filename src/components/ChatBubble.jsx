function ChatBubble(props) {
  return (
    <div className="p-2 m-2 bg-veryLightGreen rounded-lg shadow">
      {props.message}
    </div>
  );
}

export default ChatBubble;
