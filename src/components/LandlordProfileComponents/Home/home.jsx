import { useState } from "react";
import { filterActiveComponent } from '../../../libraries/LandlordProfileRender';
import "./home.scss";

function Terms() {
    const buttons = ['Overview', 'Ratings', 'Stats', 'Feedback'];
    const [currentSate, setCurrentState] = useState("Overview");
    const handleCurrentButton= (label) => {setCurrentState(label)};
    
    return (
        <div className="landlord-home">
            <div className="landlord-home-top">
                {buttons.map(item => (
                    <button className={item === currentSate ? "active" : ''} name={item} onClick={(e) => handleCurrentButton(e.currentTarget.name)}>{item}</button>
                ))}
            </div>
            <div className="landlord-home-container">
                {filterActiveComponent(currentSate)}
            </div>
        </div>
    )
}

export default Terms;