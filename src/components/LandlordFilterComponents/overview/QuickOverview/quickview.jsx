import { IoSync, IoAdd } from 'react-icons/io5';
import { FaMinus } from 'react-icons/fa';
import './quickview.scss';
import { useEffect, useState, useRef } from 'react';

function QuickOverview() {
    const [availableRooms, setAvailableRooms] = useState(0);
    const Add = () => {setAvailableRooms(prev => prev + 1);};
    const Decrease = () => {
        if (availableRooms > 0) {
            setAvailableRooms(prev => prev - 1);
        }
    };

    return (
        <>
            <h1 className='q-o'>Quick Overview</h1>
            <div className="qo-content">
                <span className='title'>General</span>
                <p>Bookings <span>2</span></p>
                <p>New Messages <span>3</span></p>
            </div>
            <div className="quick-update">
                <span className='title'>Updates</span>
                <form action="">
                    <div className="dec-inc">
                        <div className="dec-inc-left">
                            <span>Available Rooms:</span>
                            <div className='dil-buttons'>
                                <button type='button' onClick={Decrease}><FaMinus /></button>
                                <p>{availableRooms}</p>
                                <button type='button' onClick={Add}><IoAdd /></button>
                            </div>
                        </div>
                        <button id="update" type='button'>Update</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default QuickOverview;
