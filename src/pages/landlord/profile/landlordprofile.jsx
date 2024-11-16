import "./landlordprofile.scss";
import { IoInformationCircleOutline, IoNotificationsOutline } from 'react-icons/io5';
import Mode from "../modechange/mode";
import Sidebar from "../sidebar/sidebar";
import Information from "../info-container/information";
import { useState } from "react";


function LandlordProfile() {
    const [toggle, setToggle] = useState(false);
    const [activeComponent, setActiveComponent] = useState('home');

    return (
        <section className="landlordprofile">
            <div className="landlord-navbar">
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
            <div className="landlord-wrapper">
                <Sidebar toggle={toggle} setToggle={setToggle} activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
                <Information toggle={toggle} activeComponent={activeComponent}/>
            </div>
        </section>
    )
}

export default LandlordProfile;