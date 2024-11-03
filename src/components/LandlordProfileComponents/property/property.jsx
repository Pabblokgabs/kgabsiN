import LandlordDommy from "../../../listdata/landlorddommy";
import "./property.scss";

function Property() {
    const data = LandlordDommy;
    return (
        <div className="property">
            <h1>{data.name}</h1>
            <div className="property-wrapper">
                <div className="property-wrapper-left">
                    <div className="img-cont">
                        <img src={data.image[0]} alt="" />
                        <div className="small-imgs">
                            {data.image.slice(1, 5).map((item, index) => (
                                <div className="small-img" key={index}>
                                    <img src={item} alt={`Image ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="description">{data.description}</div>
                </div>
                <div className="property-wrapper-right">
                    <h1>Features</h1>
                    <ul>
                        <li><p>water:</p> <span>Yes</span></li>
                    </ul>
                    <button>Update Info</button>
                </div>
            </div>
        </div>
    );
}

export default Property;
