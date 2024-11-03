import "./bookings.scss";

function Bookings() {
    return (
        <div className="bookings">
            <h1>Bookings</h1>
            <div className="booking-wrapper">
                <div className="booking-container">
                    <img src="/singlepage/apart3.jpg" alt="" />
                    <div className="left">
                        <h2>heading</h2>
                        <div className="buttons">
                            <p><span>R 1200</span> p/m</p>
                            <button>Cancel Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookings;