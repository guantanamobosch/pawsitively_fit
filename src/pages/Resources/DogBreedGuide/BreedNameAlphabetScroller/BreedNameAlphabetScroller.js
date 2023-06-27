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
                    <li key={index}>
                        <button
                            onClick={() =>
                                handleClick(String.fromCharCode(65 + index))
                            }
                        >
                            {String.fromCharCode(65 + index)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
