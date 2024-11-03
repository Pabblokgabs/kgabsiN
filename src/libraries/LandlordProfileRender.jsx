import Terms from '../components/LandlordProfileComponents/Terms/terms'
import Home from '../components/LandlordProfileComponents/Home/home'
import Signout from '../components/LandlordProfileComponents/logout/logout'
import Property from '../components/LandlordProfileComponents/property/property'
import Bookings from '../components/LandlordProfileComponents/Bookings/bookings'
import Messages from '../components/LandlordProfileComponents/messages/messages'
import Overview from '../components/LandlordFilterComponents/overview/overview'
import Ratings from '../components/LandlordFilterComponents/ratings/ratings'
import Feedback from '../components/LandlordFilterComponents/feedback/feedback'
import Statistics from '../components/LandlordFilterComponents/statistics/statistics'
import FaqComponent from '../components/faq-component/faqComponent'
import { LandlordFaq } from './faqRender'

export const renderActiveComponent = (activeComponent) => {

    switch (activeComponent) {
        case 'home':
            return <Home />
        case 'messages':
            return <Messages/>
        case 'property':
            return <Property />
        case 'bookings':
            return <Bookings />
        case 'terms':
            return <Terms />
        case 'faqs':
            return <FaqComponent LandlordFaq={LandlordFaq}/>
        case 'signout': 
            default:
            return <Signout />
    }
}

export const filterActiveComponent = (currentTarget) => {

    switch (currentTarget) {
        case 'Overview':
            return <Overview />
        case 'Ratings':
            return <Ratings/>
        case 'Stats':
            return <Statistics />
        case 'Feedback':
            return <Feedback />
    }
}