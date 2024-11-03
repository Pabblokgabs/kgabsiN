import './overview.scss';
import { IoPeopleOutline, IoInformationCircleOutline, IoArrowForward, IoStarOutline, IoArrowUpOutline, IoArrowDownOutline, IoMedalOutline, IoTrophyOutline, IoEyeOutline, IoHomeOutline } from 'react-icons/io5';
import { useState } from 'react';
import QuickOverview from './QuickOverview/quickview';

function Overview() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isLovedIncreasing, SetIsLovedIncreasing] = useState(false);
    const [isRatingIncreasing, SetIsRatingIncreasing] = useState(false);
    const [isViewsIncreasing, SetIsViewsIncreasing] = useState(true);


    return (
        <div className="landlord-overview">
            <div className="landlord-overview-left">
                <div className="landlord-overview-left-1">
                    <div className="container-viewed">
                        <IoPeopleOutline className='icon'/>
                        <div className="container-viewed-info">
                            <p>People loved your property:
                                <span className="info-icon" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} >
                                    <IoInformationCircleOutline/>
                                    {showTooltip && <span className="tooltip">Number of people that wish to live at your property.</span>}
                                </span>
                            </p>
                            <div className="stats">
                                <h1>7</h1>
                                <p style={isLovedIncreasing ? {color: 'green'} : {color: 'red'}}>-1 {isLovedIncreasing ? <IoArrowUpOutline/> : <IoArrowDownOutline/>}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-searches">
                        <div className="top">
                            <p>Searches and views:</p>
                            <select name="time" id="time">
                                <option value="month">Month</option>
                                <option value="week">week</option>
                                <option value="day">day</option>
                            </select>
                        </div>
                        <div className="middle"></div>
                        <span>view referals<IoArrowForward style={{paddingTop: '2px', transform: 'scaleX(2)'}}/></span>
                    </div>
                    <div className="container-trophy">
                        <IoTrophyOutline className='trophyIcon'/>
                        <h4>Ranks</h4>
                        <div className="container-trophy-cont">
                            <IoMedalOutline style={{backgroundColor: 'gold'}} className='starIcon'/>
                            <p>1st:</p>
                        </div>
                        <div className="container-trophy-cont">
                            <IoStarOutline style={{backgroundColor: 'gold'}} className='starIcon'/>
                            <p>Your Property</p>
                        </div>
                        <div className="container-trophy-cont">
                            <IoStarOutline style={{backgroundColor: 'gold'}} className='starIcon'/>
                            <p>Last:</p>
                        </div>
                    </div>
                </div>
                <div className="landlord-overview-left-2">
                    <div className="lol-2-container">
                        <IoHomeOutline className='lol-2c-icon'/> 
                        <div className="lol-2-c-info">
                            <p>Property</p>
                            <div className="lolo2ci-details">
                                <h1>1</h1>
                            </div>
                            <span>view referals<IoArrowForward style={{paddingTop: '2px', transform: 'scaleX(2)'}}/></span>
                        </div>
                    </div>
                    <div className="lol-2-container">
                        <IoStarOutline className='lol-2c-icon'/> 
                        <div className="lol-2-c-info">
                            <p>Ratings</p>
                            <div className="lolo2ci-details">
                                <h1>4.5</h1>
                                <p style={isRatingIncreasing ? {color: 'green'} : {color: 'red'}}>1.2% {isRatingIncreasing ? <IoArrowUpOutline/> : <IoArrowDownOutline/>}</p>
                            </div>
                            <span>view referals<IoArrowForward style={{paddingTop: '2px', transform: 'scaleX(2)'}}/></span>
                        </div>
                    </div>
                    <div className="lol-2-container">
                        <IoEyeOutline className='lol-2c-icon'/> 
                        <div className="lol-2-c-info">
                            <p>Views (monthly)</p>
                            <div className="lolo2ci-details">
                                <h1>10</h1>
                                <p style={isViewsIncreasing ? {color: 'green'} : {color: 'red'}}>-1 {isViewsIncreasing ? <IoArrowUpOutline/> : <IoArrowDownOutline/>}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landlord-overview-left-3">
                    <div className="lol3-container"></div>
                </div>
                <div className="landlord-overview-left-4"></div>
                <div className="landlord-overview-left-5"></div>
            </div>
            <div className="landlord-overview-right">
                <QuickOverview />
            </div>
        </div>
    );
}

export default Overview;
