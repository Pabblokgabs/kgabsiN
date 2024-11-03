import './chatviewpoint.scss';

function ChatMessagesViewpoint() {
    return (
        <div className="chat-messages-viewpoint">
            <div className="chat-messages-viewpoint-top">
                <div className="chat-messages-viewpoint-top-left">
                    <img src="/nopic.jpg" alt="" />
                    <h4>John Doe</h4>
                </div>
                <button>X</button>
            </div>
            <div className="chat-messages-viewpoint-bottom">
                <div className="cmvb-viewpoint"></div>
                <div className="cmvb-type">
                    <textarea name="currentUserMessage" id="currentUserMessage" placeholder='Type a message'></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatMessagesViewpoint;