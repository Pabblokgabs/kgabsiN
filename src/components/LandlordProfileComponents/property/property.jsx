import { useEffect, useState } from "react";
import LandlordDommy from "../../../listdata/landlorddommy";
import "./property.scss";
import AddingProperty from "./addingproperty/addingproperty";

function Property() {
    const data = LandlordDommy;
    const [isProperty, setIsProperty] = useState(false);
    const [isAddProperty, setIsAddProperty] = useState(false);
    const handleAddProperty = () => {setIsAddProperty(prevState => !prevState);};

    return (
        <div className="property">
            {isAddProperty && <AddingProperty />}
            <div className="property-container-tOrf">
                {isProperty ? (
                    <>
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
                                    <li><p>Water:</p> <span>Yes</span></li>
                                </ul>
                                <button>Update Info</button>
                            </div>
                        </div>
                    </>
                ) : (
                    !isAddProperty && (
                        <div className="noProperty">
                            <h1>You don't have any property yet. Press Add to register your property with us.</h1>
                            <button onClick={handleAddProperty}>Add</button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Property;
