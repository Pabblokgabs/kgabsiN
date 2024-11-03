import { useState, useRef, useEffect } from 'react';
import { FaCaretDown} from 'react-icons/fa';
import "./chatmessages.scss";

export const ChatMessages = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const options = ['Unread', 'Read'];
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
        <div className="chat-messages">
            <div className="chat-messages-top">
                <div className="top-top-top">
                    <h1>Chats</h1>
                    <div className="select-icon" onClick={handleIconClick}><FaCaretDown /></div>
                    {isOpen && (
                        <div className="options" ref={optionsRef}>
                            <span>Filter by:</span>
                            {options.map((option) => (
                                <div key={option} className="option" onClick={() => handleOptionClick(option)} >{option}</div>))}
                        </div>
                    )}
                </div>
                <input type="text" placeholder='Search the name'/>
            </div>
            <div className="chat-messages-bottom">
                <div className="cmb-container">
                    <img src="./nopic.jpg" alt="" />
                    <div className="cmbt-left">
                        <div className="cmbtl-top">
                            <h4>John Doe</h4>
                            <span>12:20</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, perspiciatis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

