import { useState } from "react";
import { filterActiveComponent } from '../../../libraries/LandlordProfileRender';
import "./home.scss";

function Terms() {
    const buttons = ['Overview'];
    const [currentSate, setCurrentState] = useState("Overview");
    const handleCurrentButton= (label) => {setCurrentState(label)};
    
    return (
        <div className="landlord-home">
            <div style={{display: 'none'}} className="landlord-home-top">
                {buttons.map(item => (
                    <button style={{display: 'none'}} className={item === currentSate ? "active" : ''} name={item} onClick={(e) => handleCurrentButton(e.currentTarget.name)}>{item}</button>
                ))}
            </div>
            <div className="landlord-home-container">
                {filterActiveComponent(currentSate)}
            </div>
        </div>
    )
}

export default Terms;