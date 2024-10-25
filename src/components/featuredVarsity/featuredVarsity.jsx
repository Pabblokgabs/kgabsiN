import React, { useState, useEffect, useRef } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import "./featuredVarsity.scss";
import FeaturedListData from '../../listdata/featuredFilter';

function FeaturedVarsity() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedType, setSelectedType] = useState("University");
    const [itemsPerView, setItemsPerView] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (containerRef.current) {
                const width = containerRef.current.clientWidth;
                setItemsPerView(Math.floor(width / 220));
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            Math.min(prevIndex + 1, filteredData.length - itemsPerView)
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            Math.max(prevIndex - 1, 0)
        );
    };

    // Filter data based on selected type
    const filteredData = FeaturedListData.filter(item => item.type === selectedType);

    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex + itemsPerView < filteredData.length;

    const handleFilterChange = (type) => {
        setSelectedType(type);
        setCurrentIndex(0); // Reset index when filter changes
    };

    return (
        <div className='featured-varsity'>
            <div className="fv-filter-container">
                <button 
                    className={selectedType === "University" ? "active" : ""} 
                    onClick={() => handleFilterChange("University")}
                >
                    Universities
                </button>
                <button 
                    className={selectedType === "College" ? "active" : ""} 
                    onClick={() => handleFilterChange("College")}
                >
                    Colleges
                </button>
            </div>
            <div className="fv-image-container">
                {hasPrevious && (
                    <div className="btn-left">
                        <div className="btn-cont-left">
                            <button onClick={handlePrev}><FaLessThan /></button>
                        </div>
                    </div>
                )}
                <div className="fv-contant-container" ref={containerRef}>
                    <div className="sv-cc-containers">
                        {filteredData.slice(currentIndex, currentIndex + itemsPerView).map((item, i) => (
                            <div className="container" key={i}>
                                <div className="color-hover"></div>
                                <div className="container-info-img">
                                    <div className="img-cont">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="info-cont">
                                        <h1>{item.name}</h1>
                                        <p>{item.properties} Properties</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {hasNext && (
                    <div className="btn-right">
                        <div className="btn-cont-right">
                            <button onClick={handleNext}><FaGreaterThan /></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FeaturedVarsity;
