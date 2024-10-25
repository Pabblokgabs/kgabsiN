import "./profileView.scss";

function ProfileView() {
    return (
        <div className="profile-view">
            <h1>Profile</h1>
            <img src="./nopic.jpg" alt="" />
            <h2>John Doe</h2>
            <p>john.doe@example.com</p>
            <p>0123456789</p>
            <button>Update</button>
            <div className="bottom">
                <div className="left">
                    <span>Delete Permanately</span>
                    <p>Deleting your account is permanent and will result in the loss of all your data, including messages, bookings, and saved items. You will also lose access to any personalized features and settings. If you have any concerns, please consider reaching out to our support team before making this decision.</p>
                </div>
                <button>delete</button>
            </div>
        </div>
    )
}

export default ProfileView;