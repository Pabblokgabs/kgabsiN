import "./Filter.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function Filter({ onFilterChange, initMinPrice, campusName, initRestype }) {
    const [searchName, setSearchName] = useState("");
    const [type, setType] = useState(initRestype);
    const [status, setStatus] = useState("");
    const [minPrice, setMinPrice] = useState(initMinPrice);
    const [maxPrice, setMaxPrice] = useState("");
    const [rating, setRating] = useState("");

    const toTitleCase = (str) => {
        return str
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };

    const handleInputChange = (e) => {
        const newSearchName = toTitleCase(e.target.value);
        setSearchName(newSearchName);
        onFilterChange({
          searchName: newSearchName,
          type,
          status,
          minPrice,
          maxPrice,
          rating,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange({ searchName,  type, status, minPrice, maxPrice, rating });
    };

    return (
        <div className="filter-container">
            <h1>Search Results For: <span>{campusName}</span></h1>
            <div className="filter-wrapper-middle">
                <label htmlFor="searchName">Name of the Res:</label>
                <input type="text" placeholder="Enter The Res Name..." name="searchName" value={searchName} onChange={handleInputChange} />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-left">
                    <div className="wrapper-fl">
                        <label htmlFor="type">Type:</label>
                        <select name="type"  id="type" value={type} onChange={(e) => setType(e.target.value)} >
                            <option value="">All</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Single">Single</option>
                            <option value="Sharing">Sharing</option>
                        </select>
                    </div>
                    <div className="wrapper-fl">
                        <label htmlFor="status">Status:</label>
                        <select  name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} >
                            <option value="">All</option>
                            <option value="available">Available</option>
                            <option value="notAvailable">Not Available</option>
                        </select>
                    </div>
                    <div className="wrapper-fl">
                        <label htmlFor="minPrice">Min Price:</label>
                        <input type="number" name="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                    </div>
                    <div className="wrapper-fl">
                        <label htmlFor="maxPrice">Max Price:</label>
                        <input type="number" name="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                    <div className="wrapper-fl">
                    <label htmlFor="rating">Ratings:</label>
                    <select name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} >
                        <option value="">All</option>
                        <option value="No Ratings">No Ratings</option>
                        <option value="Poor">Poor</option>
                        <option value="Fair">Fair</option>
                        <option value="Good">Good</option>
                        <option value="Very Good">Very Good</option>
                    </select>
                    </div>
                </div>

                <div className="form-right">
                    <button type="submit"><FaSearch className="fa" /></button>
                </div>
            </form>
        </div>
    );
}

export default Filter;
