import "./navbar.scss";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import NotMobile from "./notMobile/notmobile";
import Mobile from "./mobile/mobile";

function Navbar({ toggleLogin }) {

    return (
        <nav>
            <div className="nav-left">
                <div className="logo-nav-left">
                    <Link to="/" className="lnl-link"><img src="/logo.png" alt="Logo" ></img><h1>kgabs <span>iN</span></h1></Link>
                </div>
                <div className="links-nav-left">
                    <Link className="lnl-hover">Contact</Link>
                    <Link className="lnl-hover">About</Link>
                    <Link className="lnl-hover">Services</Link>
                    <Link className="lnl-hover">How It Works</Link>
                </div>
            </div>
            <div className="nav-right">
                <span className="landlord-link">
                    <Link to="/">Are You The LandLord?</Link>
                </span>
                <span className="landlord-link2">
                    <Link to="/">LandLord</Link>
                </span>
                <div className="notMobile"><NotMobile toggleLogin={toggleLogin} /></div>
                <div className="mobile"><Mobile toggleLogin={toggleLogin} /></div>
            </div>
        </nav>
    );
}

export default Navbar;
