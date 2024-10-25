import "./searchfilter.scss";
import { FaSearch } from 'react-icons/fa';

function SearchFilter() {
    return (
        <div className="searchfilter">
            <form>
                <div className="sf-left">
                    <div className="select">
                        <label htmlFor="campus-select">Choose your campus:</label>
                        <select className="long" id="campus-select" name="campus" required>
                            <option value="">Any</option>
                            <option value="University Of Limpopo">University Of Limpopo</option>
                        </select>
                    </div>
                    <div className="select">
                        <label htmlFor="res-type">Res Type:</label>
                        <select id="res-type" name="res-type">
                            <option value="">All</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Single">Single</option>
                            <option value="Sharing">Sharing</option>
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
