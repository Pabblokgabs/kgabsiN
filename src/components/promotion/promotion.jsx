import { useState } from "react";
import ListDataPromo from "../../listdata/Promotion";
import { Link } from "react-router-dom" 
import "./promotion.scss";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

function Promotion() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 2;
    const totalItems = ListDataPromo.length;

    const nextPage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
    };

    const prevPage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - itemsPerPage + totalItems) % totalItems
        );
    };

    const displayedItems = ListDataPromo.slice(currentIndex, currentIndex + itemsPerPage);
    const numberOfDots = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="promo-page">
            <div className="ppc-cont-top">
                <span>Trending News</span>
                <p>Events, Promotions, Deal and Jobs offers!</p>
            </div>
            <div className="promo-page-container">
                {displayedItems.map(item => (
                    <div className="ppc-cont" key={item.id}>
                        <fieldset className="ppc-cont-bottom">
                            <legend>For {item.heading}</legend>
                            <div className="container">
                                <div className="content-container">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <div className="button-date">
                                        <Link to={`/promotion-details/${item.id}`} ><button>More Details</button></Link>
                                        <span>{item.dateStart} - {item.dateEnd}</span>
                                    </div>
                                </div>
                                <div className="img-container">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                ))}
            </div>
            <div className="pp-n-p">
                <button onClick={prevPage} disabled={currentIndex === 0}><FaArrowCircleLeft /></button>
                {totalItems > 0 && numberOfDots > 1 && (
                    <div className="carousel-dots">
                        {Array.from({ length: numberOfDots }, (_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === Math.floor(currentIndex / itemsPerPage) ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index * itemsPerPage)}
                            />
                        ))}
                    </div>
                )}
                <button onClick={nextPage} disabled={currentIndex >= totalItems - itemsPerPage}><FaArrowCircleRight /></button>
            </div>
        </div>
    );
}

export default Promotion;
