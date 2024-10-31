import { useState, useEffect, useRef } from 'react';
import './Cards.css';

export default function Cards({ logo, title, des, i1, i2, i3, btn }) {
    const [isClicked, setIsClicked] = useState(false);
    const cardRef = useRef(null);

    // Function to toggle the clicked state
    const handleClick = () => {
        setIsClicked(true);
    };

    // Effect to handle clicks outside the card
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the clicked element is outside the card
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsClicked(false); // Reset to default state if clicked outside
            }
        };

        // Add the event listener for outside clicks
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`cards ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
            ref={cardRef}
        >
            <div className="logo">
                <i className={logo}></i>
            </div>
            <h3>{title}</h3>
            <p>{des}</p>
            <ul>
                <li>{i1}</li>
                <li>{i2}</li>
                <li>{i3}</li>
            </ul>
            <button className={`card-button ${isClicked ? 'clicked-button' : ''}`}>
                {btn}
            </button>
        </div>
    );
}
