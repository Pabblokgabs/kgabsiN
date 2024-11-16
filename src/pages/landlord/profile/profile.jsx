import "./profile.scss";
import "./landlordprofile.scss";
import "../../../landlord.index.scss";
import { IoInformationCircleOutline, IoNotificationsOutline } from 'react-icons/io5';
import Mode from "../modechange/mode";
import { useState } from "react";
import { renderActiveComponent } from "../../../libraries/LandlordProfileRender";

function ProfileSec() {
    const [activeComponent, setActiveComponent] = useState('home');
    return (
        <section className="lordprofile">
            <div className="lord-navbar">
                <div className="left">
                    <img src="/logo.png" alt="Logo" />
                    <h1>kgabs <span>iN</span></h1>
                </div>
                <div className="right">
                    <button><Mode/></button>
                    <button><IoInformationCircleOutline/></button>
                    <button><IoNotificationsOutline/></button>
                    <img src="/nopic.jpg" alt="Profile Photo" />
                </div>
            </div>
            <div className="lord-wrapper">
                <div className="button_top">
                    <button onClick={() => setActiveComponent('home')} className={activeComponent === "home" ? 'active' : ''}>Dashtop</button>
                    <button onClick={() => setActiveComponent('messages')} className={activeComponent === "messages" ? 'active' : ''}>Messages</button>
                    {/* <button onClick={() => setActiveComponent('bookings')} className={activeComponent === "bookings" ? 'active' : ''}>Bookings</button> */}
                    <button onClick={() => setActiveComponent('property')} className={activeComponent === "property" ? 'active' : ''}>Your Property</button>
                </div>
                <div className="bottom_info">
                    {renderActiveComponent(activeComponent)}
                </div>
            </div>
        </section>
    )
}

export default ProfileSec;