import "./footer.scss";
import { Link } from "react-router-dom";
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <span><img src="/logo.png" alt="logo" /> kgab iN</span>
                    <Link className="links">About</Link>
                    <Link className="links">How We Work</Link>
                </div>
                <div className="container">
                    <h4 className="header">Support</h4>
                    <Link className="links">kgabs iN community</Link>
                    <Link to="/contact-page" className="links">Contact Center</Link>
                    <Link className="links">Career</Link>
                    <Link to="/faq-page" className="links">FAQ's</Link>
                </div>
                <div className="container">
                    <h4 className="header">Discover</h4>
                    <Link className="links">Events</Link>
                    <Link to="/transport-help" className="links">Transport Help</Link>
                    <Link className="links">Trending News</Link>
                </div>
                <div className="container">
                    <h4 className="header">Terms Of Use</h4>
                    <Link className="links">Terms & Conditions</Link>
                    <Link className="links">Privacy Policy</Link>
                    <Link className="links">Cookies</Link>
                    <Link className="links">Partner Dispute</Link>
                </div>
            </div>
            <div className="footer-btm">
                <p>Copyright &copy; {currentYear} kgabs iN. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
