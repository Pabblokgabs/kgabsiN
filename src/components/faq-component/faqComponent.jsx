import React, { useState } from 'react';
import './faqComponent.scss';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

function FaqComponent({LandlordFaq}) {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-component">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-component-wrapper">
                {LandlordFaq.map((item, index) => (
                    <div className="fcw-container" key={index}>
                        <div className="fcw-container-top" onClick={() => toggleAnswer(index)}>
                            <div className="left">{item.question}</div>
                            <button>{openIndex === index ? <FaChevronDown/> : <FaChevronUp/>}</button>
                        </div>
                        {openIndex === index && (
                            <div className={`fcw-container-bottom ${openIndex === index ? 'open' : ''}`}>{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaqComponent;
