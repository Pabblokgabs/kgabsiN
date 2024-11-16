import "./images.scss";
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
import { useState } from 'react';

function Images({image}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {setCurrentIndex((prevIndex) =>  prevIndex === 0 ? image.length - 1 : prevIndex - 1 );};
    const handleNext = () => { setCurrentIndex((prevIndex) =>  prevIndex === image.length - 1 ? 0 : prevIndex + 1);};
    return (
        <div className="images-container">
            <button className="va">View All</button>
            <div className="left">
                <img src={image[0]} alt="" />
            </div>
            <div className="smartPhone">
                <button className='less' onClick={handlePrev}><FaLessThan /></button>
                <img src={image[currentIndex]} alt={`transport photo ${currentIndex}`} className="slide-image"/>
                <button className='greater' onClick={handleNext}><FaGreaterThan /></button>
            </div>
            <div className="right">
                {image.slice(1, 5).map((item, index) => (
                    <div className="small-img" key={index}>
                        <img src={item} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Images;