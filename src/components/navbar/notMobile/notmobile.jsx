import "./notMobile.scss";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaBell, FaCalendarCheck, FaHeart } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Mode from "../../darkMode/mode";

function NotMobile({ toggleLogin }) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="not-mobile">
            <button onClick={toggleMenu}>
                <img src="/nopic.jpg" alt="" />
            </button>

            {isMenuOpen && (
                <div ref={menuRef} className={isUserLoggedIn ? "nm-user-true" : "nm-user-false"}>
                    {isUserLoggedIn ? (
                        <>
                            <Link className="nm-link2" onClick={closeMenu}><FaUser className="fa-icon"/>Profile</Link>
                            <Link className="nm-link2" onClick={closeMenu}><FaHeart className="fa-icon"/>Favorite</Link>
                            <Link className="nm-link2" onClick={closeMenu}><FaCalendarCheck className="fa-icon"/>Booking</Link>
                            <Link className="nm-link2" onClick={closeMenu}><FaBell className="fa-icon"/>Notification</Link>
                            <div className="line-breaker"></div>
                            <Link className="nm-link2" onClick={closeMenu}>Community</Link>
                            <Link className="nm-link2" onClick={closeMenu}>Events</Link>
                            <Link className="nm-link2" onClick={closeMenu}>Alerts</Link>
                            <Link className="nm-link2" onClick={closeMenu}>Local Services</Link>
                            <div className="line-breaker"></div>
                            <Link className="nm-link2" onClick={closeMenu}>Log out</Link>
                        </>
                    ) : (
                        <>
                            <Link className="nm-link1" onClick={() => {closeMenu(), toggleLogin() }}>Log in</Link>
                            <Link className="nm-link1" onClick={closeMenu} to="/signup">Sign up</Link>
                            <div className="line-breaker"></div>
                            <Link className="nm-link2" onClick={closeMenu}>List Your Property</Link>
                            <Link className="nm-link2" onClick={closeMenu}>Help Center</Link>
                            <Link className="nm-link2" onClick={closeMenu}>Terms Of Services</Link>
                            <Mode />
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default NotMobile;
