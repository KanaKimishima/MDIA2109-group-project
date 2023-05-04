import styles from 'components/DarkMode/Darkmode.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('Darkmode');
        } else {
            document.body.classList.remove('Darkmode');
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