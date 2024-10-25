import { useState } from "react";
import "./ProvinceFilter.scss";
import DataFilter from "./dataFilter/DataFilter";
import data from "../../listdata/province-filter";

function ProvinceFilter() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const buttons = ["Province", "University", "College", "Room Type"];

    const handleButtonClick = (index) => {
        setActiveIndex(index);
        setIsExpanded(false);
    };

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    const currentData = [
        data.ProvinceData,
        data.UniversityData,
        data.CollegesData,
        data.RoomTypeData,
    ][activeIndex];

    const showSeeMore = currentData.length > 12;

    return (
        <section className={`province-filter`}>
            <span>Quick Links</span>
            <div className="pf-filter-container" style={{ height: isExpanded ? 'auto' : '200px' }}>
                <div className="pf-button-container">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={activeIndex === index ? "active" : ""}
                            onClick={() => handleButtonClick(index)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <div className="line-breaker"></div>
                <div className="pf-Links-container">
                    <DataFilter activeIndex={activeIndex} isExpanded={isExpanded} />
                </div>
            </div>
            {showSeeMore && (
                <div className="see-more-link">
                    <button onClick={toggleExpand}>
                        {isExpanded ? "See Less" : "See More"}
                    </button>
                </div>
            )}
        </section>
    );
}

export default ProvinceFilter;
