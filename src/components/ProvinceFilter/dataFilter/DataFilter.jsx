import data from "../../../listdata/province-filter";
import "./DataFilter.scss";
import { Link } from "react-router-dom"

function DataFilter({ activeIndex, isExpanded }) {
    const { ProvinceData, UniversityData, CollegesData, RoomTypeData } = data;

    let currentData;
    let itemLabel = "Properties"; // Default label

    switch (activeIndex) {
        case 0:
            currentData = ProvinceData;
            break;
        case 1:
            currentData = UniversityData;
            break;
        case 2:
            currentData = CollegesData;
            break;
        case 3:
            currentData = RoomTypeData;
            itemLabel = "Rooms"; // Change label for RoomTypeData
            break;
        default:
            currentData = [];
    }

    return (
        <div className="filter-data-p-u-c-r">
            <div className="container-p-u-c-r">
                {currentData.slice(0, isExpanded ? currentData.length : 12).map((item, index) => (
                    <div key={index} className="link-container-p-u-c-r">
                        <Link className="links-p-u"><span>{item.name}</span></Link>
                        <p>{item.numberProperties} {itemLabel}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataFilter;
