import "./savedlist.scss";
import { FaBookmark, FaHotel ,FaRegComment, FaMapMarkerAlt, FaRoad, FaBed, FaStar} from 'react-icons/fa';

function SavedList() {
    return (
        <div className="savedlist">
            <h1>Saved List</h1>
            <div className="list-wrapper">
                <div className="list-container">
                    <img src="/singlepage/apart3.jpg" alt="" />
                    <div className="right">
                        <h2>Heading</h2>
                        <div className="spans">
                            <span><FaMapMarkerAlt/>location</span>
                            <span><FaRoad/>distance</span>
                            <span><FaBed/>Available rooms</span>
                        </div>
                        <div className="bottom">
                            <p>R 1200 <span>p/m</span></p>
                            <div className="buttons">
                                <button><FaRegComment/></button>
                                <button className="list"><FaBookmark/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedList;