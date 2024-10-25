import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./layout.scss";
import Footer from "../../components/footer/footer";
import HelpBot from "../../components/assistanceBot/helpBot";
import { FaRobot } from 'react-icons/fa';
import { useState } from 'react';

function Layout() {
    const [isHelpBotVisible, setHelpBotVisible] = useState(false);

    const toggleHelpBot = () => {setHelpBotVisible(!isHelpBotVisible);};

    return (
        <div className="layout">
            <div>
                <Navbar  />
            </div>
            <div className="content">
                <Outlet />
            </div>
            <div className={`helpbot ${isHelpBotVisible ? 'active' : ''}`} onClick={toggleHelpBot}>
                <FaRobot />
                <div className="tooltip">Assistant Bot</div>
            </div>
            {isHelpBotVisible && <HelpBot />} 
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
