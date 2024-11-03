import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function Mode() {
    const getInitialMode = () => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'true';
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

    useEffect(() => {
        const applyMode = () => {
            if (isDarkMode) {
                document.documentElement.classList.add('dark-mode');
            } else {
                document.documentElement.classList.remove('dark-mode');
            }
        };

        applyMode();

        localStorage.setItem('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div>
            <button style={{border: "none", backgroundColor: "transparent", display: "flex", alignItems: 'center', gap: "10px", color: 'var(--prim)', cursor: "pointer"}} onClick={toggleMode}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
                {isDarkMode ? "Light" : "Dark"}
            </button>
        </div>
    );
}
const applyInitialMode = () => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
        document.documentElement.classList.add('dark-mode');
    }
};
applyInitialMode();

export default Mode;
