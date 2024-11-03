import "./Home.scss";
import Landingpage from "../../components/landingpage/landingpage";
import Promotion from "../../components/promotion/promotion";
import RecentlyAdded from "../../components/recentlyAdded/recentlyAdded";
import FeaturedVarsity from "../../components/featuredVarsity/featuredVarsity";
import ProvinceFilter from "../../components/ProvinceFilter/ProvinceFilter";
import Reviews from "../../components/reviews/reviews";

function Home() {

    return (
        <div className="home">
            <Landingpage />
            <RecentlyAdded/>
            <Promotion/>
            <Reviews/>
            <ProvinceFilter/>
        </div>
    );
}

export default Home;
