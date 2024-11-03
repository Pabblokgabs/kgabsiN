import "./navbar.scss";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import NotMobile from "./notMobile/notmobile";
import Mobile from "./mobile/mobile";
import Login from "../login/login";
import Mode from "../darkMode/mode";
import SignUp from "../../pages/SignUp/SignUp";
import Register from "../../pages/landlord/register/register";

function Navbar() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {setIsLogin(!isLogin)}

    useEffect(() => {
        isLogin ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
        return () => {document.body.style.overflow = ""}
    }, [isLogin])

    return (
        <nav>
            <div className="nav-left">
                <div className="logo-nav-left">
                    <Link to="/" className="lnl-link"><img src="/logo.png" alt="Logo" ></img><h1>kgabs <span>iN</span></h1></Link>
                </div>
                <div className="links-nav-left">
                    <Link to="/contact-page" className="lnl-hover">Contact</Link>
                    <Link className="lnl-hover">About</Link>
                    <Link className="lnl-hover">How It Works</Link>
                </div>
            </div>
            <div className="nav-right">
                {!isUserLoggedIn ? (<>
                    <span className="landlord-link">
                    <Link to="/registration-page-landlord">Are You The LandLord?</Link>
                    </span>
                    <span className="landlord-link2">
                        <Link to="/registration-page-landlord">LandLord</Link>
                    </span>
                    </>) : (
                    <span style={{padding: "10px", backgroundColor: "var(--sec-bg)", borderRadius: "10px"}}><Mode/></span>
                )}
                <div className="notMobile"><NotMobile handleLogin={handleLogin} isUserLoggedIn={isUserLoggedIn}/></div>
                <div className="mobile"><Mobile handleLogin={handleLogin} isUserLoggedIn={isUserLoggedIn}/></div>
            </div>
            <div className={!isLogin ? "log-cont" : "log-cont login-active"} ><Login handleLogin={handleLogin} /></div>
        </nav>
    );
}

export default Navbar;
