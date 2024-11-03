import "./contact.scss";
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Contact() {
    return (
        <section className="contact-page">
            <div className="top-hint">
                <h1>Contact Us</h1>
                <p><b>Important Notice:</b> If you notice any suspicious activity or encounter a potential scam, please report it to us immediately. Your safety is our priority, and prompt reporting helps us protect our community.</p>
            </div>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="container"><span><FaEnvelope/></span><p>kgabs@in.com</p></div>
                    <div className="container"><span><FaPhone/></span><p>0123456789</p></div>
                    <div className="container"><span><FaWhatsapp/></span><p>0722991620</p></div>
                </div>
                <form action="">
                    <input type="text" placeholder="Enter your name" required/>
                    <input type="email" placeholder="Enter your email" required/>
                    <textarea name="message" id="message" placeholder="Type Message!"></textarea>
                    <div className="button"><button>Submit</button></div>
                </form>
            </div>
        </section>
    )
}

export default Contact;