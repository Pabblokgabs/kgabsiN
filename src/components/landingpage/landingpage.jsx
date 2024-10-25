import React, { useState, useEffect } from "react";
import "./landingpage.scss";
import listPhoto from "./slide";
import SearchFilter from "../searchFilter/searchfilter";

function Landingpage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % listPhoto.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing-page">
            <div className="home-top">
                <div className="ht-container">
                    <div className="ht-left">
                        <p>At kgabs iN, we connect students with landlords to ensure a safe and seamless housing experience. Discover your perfect accommodation near campus and feel at home as you embark on your academic journey. Start finding your key today!</p>
                        <span>Your Key to Safe Student Housing</span>
                        <div className="search-filter"><SearchFilter /></div>
                    </div>
                    <div className="ht-right">
                        <div className="bg-cycle">
                            <div className="bg-img">
                                {/*<img src={listPhoto[currentIndex]} alt="photo" />*/}
                                <img src="/pagePhotos/key3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="bg-cycle2">
                            <div className="bg-img2">
                                <div className="bg-img-clr">
                                    <img src="/pagePhotos/key1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-bottom">
                <div className="hb-container">
                    <span>
                        <h4>Varsity</h4>
                        <p>16+</p>
                    </span>
                    <span>
                        <h4>Colleges</h4>
                        <p>9+</p>
                    </span>
                    <span>
                        <h4>Properties</h4>
                        <p>900+</p>
                    </span>
                    <span>
                        <h4>Rooms</h4>
                        <p>2500+</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;
