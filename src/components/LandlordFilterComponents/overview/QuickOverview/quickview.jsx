import { IoSync, IoAdd } from 'react-icons/io5';
import { FaMinus } from 'react-icons/fa';
import './quickview.scss';
import { useEffect, useState, useRef } from 'react';

function QuickOverview() {
    const [availableRooms, setAvailableRooms] = useState(0);
    const [hasChanged, setHasChanged] = useState(false);
    const mounted = useRef(false);
    console.log(hasChanged)
    const Add = () => {setAvailableRooms(prev => prev + 1);};

    const Decrease = () => {
        if (availableRooms > 0) {
            setAvailableRooms(prev => prev - 1);
        }
    };
    useEffect(() => {
        if (mounted.current) {
            setHasChanged(true);
        } else {
            mounted.current = true;
        }
    }, [availableRooms]);

    const handleButtonClick = () => { setHasChanged(false);};

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
                <div className="dec-inc">
                    <div className="dec-inc-left">
                        <span>Available Rooms:</span>
                        <div className='dil-buttons'>
                            <button onClick={Decrease}><FaMinus /></button>
                            <p>{availableRooms}</p>
                            <button onClick={Add}><IoAdd /></button>
                        </div>
                    </div>
                </div>
                <div className="dec-inc">
                    <div className="dec-inc-left">
                        <span>Rent:</span>
                        <div className='dil-buttons'>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="dec-inc">
                    <div className="dec-inc-left">
                        <span>Rent:</span>
                        <div className='dil-buttons'>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="button-update">
                    <button>Update</button>
                </div>
            </div>
        </>
    );
}

export default QuickOverview;
