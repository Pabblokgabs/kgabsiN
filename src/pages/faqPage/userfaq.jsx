import { useState } from 'react';
import './userfaq.scss';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import {AllUserFaq} from "../../libraries/faqRender"

function UserFaq() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="user-faq-all">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-component-wrapper-all">
                {AllUserFaq.map((item, index) => (
                    <div className="fcw-container-all" key={index}>
                        <div className="fcw-container-top-all" onClick={() => toggleAnswer(index)}>
                            <div className="left">{item.question}</div>
                            <button>{openIndex === index ? <FaChevronDown/> : <FaChevronUp/>}</button>
                        </div>
                        {openIndex === index && (
                            <div className={`fcw-container-bottom-all ${openIndex === index ? 'open' : ''}`}>{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default UserFaq;