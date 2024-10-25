import "./card.scss";
import { Link } from "react-router-dom";
import { FaBookmark, FaHotel ,FaRegComment, FaMapMarkerAlt, FaRoad, FaBed, FaStar} from 'react-icons/fa';


function Card({item }) {

    const getRatingMessage = (rating) => {
        if (rating < 4) {
            return "Poor";
        } else if (rating >= 4 && rating <= 5) {
            return "Fair";
        } else if (rating > 5 && rating < 8) {
            return "Good";
        } else if(rating == ''){
            return "No Ratings"
        }else {
            return "Very Good";
        }
    };

    return (
        <div className="card-container">
           <Link to={`/details/${item.id}`} className="img-container"><img src={item.image[0]} alt="" /></Link>
           <div className="text-container">
                <Link to={`/details/${item.id}`} className="link"><h1>{item.name}</h1></Link>
                <div className="wrapper">
                    <p><FaMapMarkerAlt/> {item.location} </p>
                    <p><FaHotel /> {item.resType}</p>
                    <p><FaBed /> {item.availableRooms} available Rooms</p>
                    <p><FaRoad /> {item.distance} to Campus</p>
                    <p><span><FaStar />{item.rating}/10</span> {getRatingMessage(item.rating)}</p>
                </div>
                <div className="bottom">
                    <div className="left">
                        <span>R {item.price} pm</span>
                    </div>
                    <div className="right">
                        <button><FaBookmark/></button>
                        <button><FaRegComment/></button>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Card;