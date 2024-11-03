import { VarsityData } from "../../listdata/selectOptionData";
import "./searchfilter.scss";
import { FaSearch } from 'react-icons/fa';

function SearchFilter() {
    const combinedOptions = [
        ...VarsityData[0].University.map((uni) => ({ name: uni})),
        ...VarsityData[1].Colleges.map((college) => ({ name: college}))
    ];
    return (
        <div className="searchfilter">
            <form>
                <div className="sf-left">
                    <div className="select">
                        <label htmlFor="campus-select">Choose your campus:</label>
                        <select className="long" id="campus-select" name="campus" required>
                            <option value="">Choose One:</option>
                            {combinedOptions.map((option, index) => (
                                <option key={index} value={option.name}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="select">
                        <label htmlFor="res-type">Res Type:</label>
                        <select id="res-type" name="res-type">
                            <option value="">All</option>
                            <option value="bachelor">Bachelor</option>
                            <option value="single">Single</option>
                            <option value="sharing">Sharing</option>
                        </select>
                    </div>
                    <div className="price">
                        <label htmlFor="price-select">Minimun price:</label>
                        <input type="number" placeholder="Min price"/>
                    </div>
                </div>
                <div className="sf-right">
                    <button><FaSearch />Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchFilter;
