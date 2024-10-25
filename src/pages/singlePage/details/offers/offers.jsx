import "./offers.scss";
import { FaWifi, FaBolt, FaUtensils, FaParking, FaSwimmingPool, FaShower} from 'react-icons/fa';
import { GiWashingMachine, GiCctvCamera, GiKitchenTap } from 'react-icons/gi';

const iconMap = {
    wifi: <FaWifi />,
    electricity: <FaBolt />,
    kitchen: <GiKitchenTap />,
    laundryMachine: <GiWashingMachine />,
    parkingLot: <FaParking />,
    pool: <FaSwimmingPool />,
    shower: <FaShower />,
    security: <GiCctvCamera />,
};

function Offers({ offers }) {
    return (
        <div className="offers">
                {Object.entries(offers).map(([key, value]) => (
                    <div className="offer-item" key={key}>
                        <div className="icon">{iconMap[key]}</div>
                        <div className="description">{value}</div>
                    </div>
                ))}
        </div>
    );
}

export default Offers;
