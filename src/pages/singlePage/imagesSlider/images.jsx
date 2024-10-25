import "./images.scss";

function Images({image}) {
    return (
        <div className="images-container">
            <button>View All</button>
            <div className="left">
                <img src={image[0]} alt="" />
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