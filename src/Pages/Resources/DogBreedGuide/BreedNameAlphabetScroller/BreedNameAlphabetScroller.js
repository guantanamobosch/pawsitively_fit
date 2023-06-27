import React from "react";
import "./BreedNameAlphabetScroller.css";

export default function BreedNameAlphabetScroller({ setSelectedLetter }) {
    const handleClick = (letter) => {
        setSelectedLetter(letter);
    };

    return (
        <div className="Breed-Name-Alphabet-Scroller-Container">
            <ul className="alphabet-scroll-wheel">
                {Array.from(Array(26)).map((_, index) => (
                    <li
                        key={index}
                        className="alphabet-scroll-wheel-letter"
                        onClick={() =>
                            handleClick(String.fromCharCode(65 + index))
                        }
                        tabIndex="0"
                    >
                        {String.fromCharCode(65 + index)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
