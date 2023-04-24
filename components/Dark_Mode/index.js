import styles from components/DarkMode/Dark_Mode.module.css 
import { useState } from 'react';
import { useEffect } from 'react';

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark_mode');
        } else {
            document.body.classList.remove('dark_mode');
        }
    }, [isDarkMode]);

    return (
        <div>
            <button  onClick={handleToggleDarkMode}>
                {isDarkMode ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
}