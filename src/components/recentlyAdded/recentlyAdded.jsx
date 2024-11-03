import "./recentlyAdded.scss";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaRoad, FaUniversity, FaMoneyBillWave, FaBed, FaStar, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ListData } from "../../listdata/dommyData";
import { Link } from "react-router-dom";

function RecentlyAdded() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const totalItems = ListData.length;

    const nextPage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
    };

    const prevPage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - itemsPerPage + totalItems) % totalItems
        );
    };

    const displayedItems = ListData.slice(currentIndex, currentIndex + itemsPerPage);
    const numberOfDots = Math.ceil(totalItems / itemsPerPage);

    const getRatingMessage = (rating) => {
        if (rating < 4) {
            return "Poor";
        } else if (rating >= 4 && rating <= 5) {
            return "Fair";
        } else if (rating > 5 && rating < 8) {
            return "Good";
        } else if (rating === 0){
            return  "No Ratings"
        }else {
            return "Very Good";
        }
    };

    return (
        <div className="recently-added">
            <div className="recetly-added-container">
                <div className="rac-top">
                    <span>Recently Added</span>
                    <p>Choose the one that suits you and be the first to book!</p>
                </div>

                <div className="rac-midddle">
                    {displayedItems.map((item) => (
                        <div className="rac-m-container" key={item.id}>
                            <div className="rac-m-c-img">
                            <Link to={`/details/${item.id}`}><img src={item.image[0]} alt="" /></Link>
                            </div>
                            <Link to={`/details/${item.id}`}>
                            <div className="rac-m-c-contant">
                                <div className="top">
                                    <h4>{item.name}</h4>
                                    <div className="t-info">
                                        <span><FaMapMarkerAlt />{item.province}</span>
                                        <span><FaUniversity />{item.closestCampus}</span>
                                        <span><FaBed />{item.resType}</span>
                                        <span><FaRoad />{item.distance} to Campus</span>
                                    </div>
                                    <div className="ratings-cont">
                                        <span className="scores"><FaStar/>{item.rating}</span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <p><FaMoneyBillWave />R{item.price} <span>p/m</span></p>
                                    <button>More Details</button>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="rac-bottom">
                    <button onClick={prevPage} disabled={currentIndex === 0}><FaArrowAltCircleLeft/></button>
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
                    <button onClick={nextPage} disabled={currentIndex >= totalItems - itemsPerPage}><FaArrowAltCircleRight/></button>
                </div>
            </div>
        </div>
    );
}

export default RecentlyAdded;