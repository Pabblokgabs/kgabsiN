import { ChatMessages} from "./chatsmessages/chatmessages";
import ChatMessagesViewpoint from "./chatsmessages/chatmessagesviewpoint";

import "./messages.scss";

function Messages() {
    return (
        <div className="landlord-messages">
            <div className="landlord-messages-container">
                <ChatMessages />
                <ChatMessagesViewpoint />
            </div>
        </div>
    )
}

export default Messages;