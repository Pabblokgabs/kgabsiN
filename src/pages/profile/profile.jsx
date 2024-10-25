import "./profile.scss";
import { useState } from 'react';
import { FaUser, FaBell, FaBookmark, FaCalendarCheck, FaEnvelopeOpenText, FaComments } from 'react-icons/fa';
import { renderActiveComponent } from "../../libraries/profile";

function Profile() {
    const [activeComponent, setActiveComponent] = useState('notifications');

    return (
        <section className="profile">
            <div className="container">
                <div className="conta-left">
                    <div className="button-container">
                        <button className={activeComponent === 'notifications' ? 'active' : ''} onClick={() => setActiveComponent('notifications')}><FaBell/><span>Notifications</span></button>
                        <button className={activeComponent === 'bookings' ? 'active' : ''} onClick={() => setActiveComponent('bookings')}><FaCalendarCheck/><span>Bookings</span></button>
                        <button className={activeComponent === 'requests' ? 'active' : ''} onClick={() => setActiveComponent('requests')}><FaEnvelopeOpenText/><span>Requests</span></button>
                        <button className={activeComponent === 'savedList' ? 'active' : ''} onClick={() => setActiveComponent('savedList')}><FaBookmark/><span>Saved List</span></button>
                        <button className={activeComponent === 'chats' ? 'active' : ''} onClick={() => setActiveComponent('chats')}><FaComments/><span>Chats</span></button>
                        <div className="lineBreaker"></div>
                        <button className={activeComponent === 'profileView' ? 'active' : ''} onClick={() => setActiveComponent('profileView')}><FaUser/><span>Profile</span></button>
                    </div>
                    <div className="more-info-container">
                        <p><b>Important Notice:</b> If you notice any suspicious activity or encounter a potential scam, please report it to us immediately. Your safety is our priority, and prompt reporting helps us protect our community.</p>
                    </div>
                </div>
                <div className="conta-middle">
                    {renderActiveComponent(activeComponent)}
                </div>
                <div className="conta-right"></div>
            </div>
        </section>
    );
}

export default Profile;
