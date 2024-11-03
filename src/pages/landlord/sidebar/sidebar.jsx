import "./sidebar.scss";
import { FaHome, FaComments, FaListUl, FaClipboardCheck, FaFileContract, FaSignOutAlt, FaQuestionCircle, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function Sidebar({toggle, setToggle, activeComponent, setActiveComponent}) {
    const HandleToggle = () => {setToggle(!toggle)};

    return (
        <div className="sidebar-wrapper">
            <div className={!toggle ? "sidebar-main" : "sidebar-main active"}>
                <div className="sidebar-main-container">
                    <div className="close-bar">
                        <button onClick={HandleToggle}><FaArrowAltCircleLeft className="close-bar-icon"/></button>
                    </div>
                    <span onClick={() => setActiveComponent('home')}><FaHome className={activeComponent === 'home' ? 'icon active-icon' : "icon"}/>Home</span>
                    <span onClick={() => setActiveComponent('messages')}><FaComments className={activeComponent === 'messages' ? 'icon active-icon' : "icon"} />Messages</span>
                    <span onClick={() => setActiveComponent('property')}><FaListUl className={activeComponent === 'property' ? 'icon active-icon' : "icon"} />List</span>
                    <span onClick={() => setActiveComponent('bookings')}><FaClipboardCheck className={activeComponent === 'bookings' ? 'icon active-icon' : "icon"} />Bookings</span>
                    <div className="line-devider"></div>
                    <span onClick={() => setActiveComponent('terms')}><FaFileContract className={activeComponent === 'terms' ? 'icon active-icon' : "icon"} />Terms</span>
                    <span onClick={() => setActiveComponent('faqs')}><FaQuestionCircle className={activeComponent === 'faqs' ? 'icon active-icon' : "icon"} />FAQ's</span>
                    <div className="line-devider"></div>
                    <span onClick={() => setActiveComponent('signout')}><FaSignOutAlt className={activeComponent === 'signout' ? 'icon active-icon' : "icon"} />Log out</span>
                </div>
            </div>

            <div className="sidebar-icons">
                <div className="sidebar-icons-container">
                    <div className="open-bar">
                        <button onClick={HandleToggle}><FaArrowAltCircleRight className="open-bar-button"/></button>
                    </div>
                    <button onClick={() => setActiveComponent('home')}><FaHome className={activeComponent === 'home' ? 'icon active-icon' : "icon"}/></button>
                    <button onClick={() => setActiveComponent('messages')}><FaComments className={activeComponent === 'messages' ? 'icon active-icon' : "icon"} /></button>
                    <button onClick={() => setActiveComponent('property')}><FaListUl className={activeComponent === 'property' ? 'icon active-icon' : "icon"} /></button>
                    <button onClick={() => setActiveComponent('bookings')}><FaClipboardCheck className={activeComponent === 'bookings' ? 'icon active-icon' : "icon"} /></button>
                    <div className="line-devider"></div>
                    <button onClick={() => setActiveComponent('terms')}><FaFileContract className={activeComponent === 'terms' ? 'icon active-icon' : "icon"} /></button>
                    <button onClick={() => setActiveComponent('faqs')}><FaQuestionCircle className={activeComponent === 'faqs' ? 'icon active-icon' : "icon"} /></button>
                    <div className="line-devider"></div>
                    <button onClick={() => setActiveComponent('signout')}><FaSignOutAlt className={activeComponent === 'signout' ? 'icon active-icon' : "icon"} /></button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;