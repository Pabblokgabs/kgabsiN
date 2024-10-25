import "./filterPage.scss";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";
import { ListData } from "../../listdata/dommyData";

const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

const getRatingMessage = (rating) => {
    if (rating < 4) {
        return "Poor";
    } else if (rating >= 4 && rating <= 5) {
        return "Fair";
    } else if (rating > 5 && rating < 8) {
        return "Good";
    } else if (rating === 0) {
        return "No Ratings";
    } else {
        return "Very Good";
    }
};

function FilterPage() {
const Data = ListData;
    return (
        <section className="filter-page">
            <div className="list-container">
                <div className="wrapper">
                    <Filter />
                    {Data.length > 0 ? (
                        Data.map(item => (
                            <Card key={item.id} item={item}/>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
            <div className="map-container"><Map items={Data}/></div>
        </section>
    );
}

export default FilterPage;
