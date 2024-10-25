import "./details.scss";
import { FaBookmark, FaHotel ,FaRegComment, FaBed,  FaMapMarkerAlt, FaRoad, FaUniversity, FaStar} from 'react-icons/fa';
import Offers from "./offers/offers";

function Details({items}) {

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
    const handleRooms = items.availableRooms;
    return (
        <div className="details-container">
            <div className="dc-left">
                <div className="top">
                    <h1>{items.province} Province, {items.name}</h1>
                    <p><span><FaStar/> {items.rating}/10</span><b>{getRatingMessage(items.rating)}</b> {items.reviewsNumber} review(s)</p>
                </div>
                <div className="middle">
                    <h2>About the residence.</h2>
                    <div className="about-container">
                        <div className="breakerLine"></div>
                        <div className="container">
                            <p><FaHotel/>Rooms type</p>
                            <span>{items.resType} Rooms</span>
                        </div>
                        <div className="breakerLine"></div>
                        <div className="container">
                            <p><FaUniversity/>Closest Campus</p>
                            <span>{items.closestCampus}</span>
                        </div>
                        <div className="breakerLine"></div>
                        <div className="container">
                            <p><FaRoad/>Distance to campus</p>
                            <span>{items.distance}</span>
                        </div>
                        <div className="breakerLine"></div>
                    </div>
                    <div className="lineBreaker"></div>
                    <h2>What to expect on this residence.</h2>
                    <Offers offers={items.offers}/>
                    <div className="lineBreaker"></div>
                    <h3>Additional Information</h3>
                    <p>{items.description}</p>
                </div>
            </div>
            <div className="dc-right">
                <div className="container">
                    <span className="price">R {items.price} <p>p/m</p></span>
                    <div className="lineBreaker"></div>
                    <span><FaMapMarkerAlt/>{items.location}</span>
                    <span><FaBed/>{items.availableRooms} Available rooms</span>
                    <span className="deposit">{items.deposit.status === "Yes" ? (<>
                        <p> Deposit: Yes</p>
                        <span >Price: <b>R {items.deposit.price}</b>{items.deposit.type}</span></>
                        ) : <p>Deposit: Non</p>}</span>
                    <div className="lineBreaker"></div>
                    <div className="button">
                        {handleRooms ? <button>Book Now</button> : <button>Sent Request</button>}
                    </div>
                    <div className="button2">
                        <button><FaRegComment/>Message</button>
                        <button><FaBookmark/>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;