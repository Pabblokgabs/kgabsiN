import React, { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import './mode.scss';

function Mode() {
    const getInitialMode = () => {
        const savedMode = localStorage.getItem('dark--mode');
        return savedMode === 'true';
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

    useEffect(() => {
        const applyMode = () => {
            if (isDarkMode) {
                document.documentElement.classList.add('dark--mode');
            } else {
                document.documentElement.classList.remove('dark--mode');
            }
        };

        applyMode();

        localStorage.setItem('dark--mode', isDarkMode);
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div>
            <button onClick={toggleMode} className='mode-change-button'>
                {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
            </button>
        </div>
    );
}
const applyInitialMode = () => {
    const savedMode = localStorage.getItem('dark--mode');
    if (savedMode === 'true') {
        document.documentElement.classList.add('dark--mode');
    }
};
applyInitialMode();

export default Mode;
