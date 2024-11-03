import { FaCaretDown } from "react-icons/fa";
import "./chat.scss";
import { useEffect, useRef, useState } from "react";

function Chats() {
    /* handle filter option */
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('All');
    const options = ['All' ,'Unread', 'Read'];
    const optionsRef = useRef();
    const handleIconClick = () => {setIsOpen((prev) => !prev);};
    const handleOptionClick = (option) => {
        setSelectedValue(option);
        setIsOpen(false);
    };
    const handleClickOutside = (event) => {if (optionsRef.current && !optionsRef.current.contains(event.target)) {setIsOpen(false);}};
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {document.removeEventListener('mousedown', handleClickOutside);};
    }, []);


    return (
        <div className="chat">
            <div className="chat-container-left-side">
                <div className="cls-top">
                    <h1>Chats</h1>
                    <div className="select-icon" onClick={handleIconClick}>{selectedValue}<FaCaretDown style={{cursor: 'pointer', fontSize: '20px'}}/></div>
                    {isOpen && (
                        <div className="options" ref={optionsRef}>
                            {options.map((option) => (
                                <div key={option} className="option" onClick={() => handleOptionClick(option)} >{option}</div>))}
                        </div>
                    )}
                </div>
                <div className="cls-bottom">
                    <div className="cls-bottom-chat-container">
                        <img src="/nopic.jpg" alt="profile photo" />
                        <div className="cls-bottom-chat-container-right">
                            <div className="cbccr-top">
                                <h4>John Doe</h4>
                                <span>12:10</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quidem!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-container-right-side">
                <div className="chat-container-right-side-top">
                    <div className="ccrst-left">
                        <img src="/nopic.jpg" alt="profile picture" />
                        <h1>John Doe</h1>
                    </div>
                    <button>X</button>
                </div>
                <div className="chat-container-right-side-bottom">
                    <div className="messages-display"></div>
                    <div className="textarea">
                        <textarea name="text" id="text" placeholder="Type message"></textarea>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats;