import "./pin.scss";
import { Popup, Marker } from "react-leaflet";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Pin({item}) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="popup-container">
                    <img src={item.image[0]} alt="" />
                    <div className="text-container">
                        <Link to={`/details/${item.id}`}>{item.name}</Link>
                        <span>{item.location}</span>
                        <b>R{item.price} p/m</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin;