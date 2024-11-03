import './logout.scss';

function Signout() {
    return (
        <div className="signout">
            <div className="signout-container">
                <div className="top">
                    <h4>Are you sure you want to sign out?</h4>
                    <button>Confirm</button>
                </div>
                <span>Your unsaved changes will be lost! Be sure to save your changes before.</span>
            </div>
        </div>
    )
}

export default Signout