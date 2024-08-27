import PropTypes from 'prop-types';

function ChatBubble(prop) {

	return(
		<div 
			className="p-2 m-2 bg-blue-100 rounded-lg" 
			id={"chatbubble" + prop.index}
		>
			{prop.message}
		</div>
	)
};

ChatBubble.propTypes = {
	message: PropTypes.string,
	index: PropTypes.number,
	user: PropTypes.bool,
};

export default ChatBubble;