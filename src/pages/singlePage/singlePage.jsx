import React, { useEffect, useState } from 'react';
import "./singlePage.scss";
import { useParams } from 'react-router-dom';
import { ListData } from "../../listdata/dommyData";
import { FaBookmark, FaHotel ,FaRegComment, FaMapMarkerAlt, FaRoad, FaBed, FaStar} from 'react-icons/fa';
import Images from './imagesSlider/images';
import Details from './details/details';

const SinglePage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const item = ListData.find(item => item.id === parseInt(id));
        setItem(item);
    }, [id]);

    const landlord = item ? item.hosts.landlord : null;
    const caretaker = item ? item.hosts.caretaker : null;
    return (
        <section className='single-page'>
            {item ? (
                <div className='singlePage-container'>
                    <div className="top">
                        <h1>{item.name}</h1>
                        <button><FaBookmark className='fabookmark'/> save</button>
                    </div>
                    <Images image={item.image}/>
                    <Details items={item}/>
                    <div className="line-breaker"></div>
                    <div className="bottom">
                        <div className="hosts">
                            <div className="main-host">
                                <div className="left">
                                    <img src={landlord.img} alt='Profile Photo' />
                                    <span>{landlord.role}</span>
                                </div>
                                <div className="right">
                                    <span>Name: <h4>{landlord.name}</h4></span>
                                    <span className='language'>Languages: <p>{landlord.languages[0]}</p><p>{landlord.languages[1]}</p></span>
                                </div>
                            </div>
                            {caretaker ? 
                            <div className="additional-hosts">
                                <span>Additional Hosts</span>
                                <div className="container">
                                    {caretaker.map(item => (
                                        <div className="host">
                                            <img src={item.img} alt="" />
                                            <div className="name-role">
                                                <p className='bold'>{item.role}</p>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="lan">
                                                <span>Languages</span> 
                                                <p>{item.languages[0]} and {item.languages[1]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                             : null}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default SinglePage;
