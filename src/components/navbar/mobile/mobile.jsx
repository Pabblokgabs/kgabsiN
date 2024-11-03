import React, { useState, useRef, useEffect } from "react";
import "./mobile.scss";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaBell, FaCalendarCheck, FaHeart, FaArrowRight } from "react-icons/fa";
import Mode from "../../darkMode/mode";

function Mobile({ handleLogin, isUserLoggedIn }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="mobile-toggle">
            <button className="mt-fa" onClick={toggleMenu}>
                <FaBars className="fa-bars" />
                <FaUser className="fa-user" />
            </button>

            {isMenuOpen && (
                <div 
                    ref={menuRef}
                    className={`${isUserLoggedIn ? "m-user-true" : "m-user-false"} ${isMenuOpen ? "visible" : ""}`}
                >
                    <button className="close-icon" onClick={closeMenu}><FaArrowRight /></button>
                    {isUserLoggedIn ? (
                        <>
                            <Link className="m-link2"><FaUser className="fa-icon" />Profile</Link>
                            <Link className="m-link2"><FaHeart className="fa-icon" />Favorite</Link>
                            <Link className="m-link2"><FaCalendarCheck className="fa-icon" />Booking</Link>
                            <Link className="m-link2"><FaBell className="fa-icon" />Notification</Link>
                            <div className="line-breaker"></div>
                            <Link className="m-link2">Community</Link>
                            <Link className="m-link2">Events</Link>
                            <Link className="m-link2">Alerts</Link>
                            <Link className="m-link2">Local Services</Link>
                            <div className="line-breaker"></div>
                            <div className="change-mode"><Link className="log-out">Log out</Link><Mode /></div>
                        </>
                    ) : (
                        <>
                            <Link className="m-link1" onClick={(e) => {e.preventDefault; handleLogin() }}>Log in</Link>
                            <Link className="m-link1" to="/signup">Sign up</Link>
                            <div className="line-breaker"></div>
                            <Link className="m-link2">List Your Property</Link>
                            <Link className="m-link2">Help Center</Link>
                            <Link className="m-link2">Terms Of Services</Link>
                            <div className="line-breaker"></div>
                            <div className="change-mode"><Mode /></div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Mobile;
