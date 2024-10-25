import "./reviews.scss";
import { FaGreaterThan, FaLessThan, FaUserCircle } from 'react-icons/fa';
import TestimonialData from "../../listdata/testiminial";
import { useState } from "react";

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const reviews = TestimonialData;

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            setFade(false);
        }, 300);
    };

    const handlePrev = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
            setFade(false);
        }, 300); 
    };

    return (
        <section className="reviews">
            <div className="reviews-container">
                <span>See the testimony:</span>
                <div className={`rev-cont-content ${fade ? 'fade' : ''}`}>
                    {reviews.map((item, index) => (
                        <div className="container" key={item.id} style={{ display: index === currentIndex ? 'flex' : 'none' }}>
                            <div className="img-bunner">
                                {item.image ? (
                                    <img src={item.image} alt={item.name} />
                                ) : (
                                    <FaUserCircle className="faUser" />
                                )}
                            </div>
                            <p>" {item.testimonial} "</p>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="switch-button">
                    <button className="prev" onClick={handlePrev} aria-label="Previous">
                        <FaLessThan className="fa" />
                    </button>
                    <button className="next" onClick={handleNext} aria-label="Next">
                        <FaGreaterThan className="fa" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
