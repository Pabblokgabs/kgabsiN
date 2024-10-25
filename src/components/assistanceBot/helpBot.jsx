import React, { useState } from 'react';
import "./helpBot.scss";

function HelpBot() {
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const [messages, setMessages] = useState([
        { text: 'How can I assist you?', isUser: false, time: getCurrentTime() },
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, isUser: true, time: getCurrentTime() }]);
            setInputValue('');
        }
    };

    return (
        <div className="help-bot">
            <div className="hb-top">Ask anything</div>

            <div className="hb-middle">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.isUser ? 'chats-container-user' : 'chats-container-bot'}>
                        <div>{msg.text}</div>
                        <div className="message-time">{msg.time}</div>
                    </div>
                ))}
            </div>

            <div className="hb-bottom">
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type here..."
                ></textarea>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default HelpBot;
