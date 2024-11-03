import Bookings from "../pages/profile/Bookings/bookings";
import Chats from "../pages/profile/chats/chat";
import Notifications from "../pages/profile/Notifications/notification";
import ProfileView from "../pages/profile/profileView/profileView";
import NewsUpdates from "../pages/profile/Requests/newsupdates";
import SavedList from "../pages/profile/savedList/savedlist";

export const renderActiveComponent = (activeComponent) => {


    switch (activeComponent) {
        case 'notifications':
            return <Notifications />
        case 'bookings':
            return <Bookings />
        case 'news':
            return <NewsUpdates />
        case 'savedList':
            return <SavedList />
        case 'chats':
            return <Chats />
        case 'profileView':
        default:
            return <ProfileView />
    }
};