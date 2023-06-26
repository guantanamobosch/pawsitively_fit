import React, { useEffect, useState } from "react";
import "./BreedInfo.css";
import BreedInfoOverlay from "./BreedInfoOverlay/BreedInfoOverlay";

export default function BreedInfo() {
    const [breedName, setBreedName] = useState("");
    const [apiBreedName, setApiBreedName] = useState("");

    function getBreedName() {
        const currentUrl = window.location.href;
        const urlArr = currentUrl.split("breed-info/");
        let hyphenatedBreedName = urlArr[1];
        setApiBreedName(hyphenatedBreedName);
        if (hyphenatedBreedName.includes("-")) {
            const breedNameArr = hyphenatedBreedName.split("-");
            const firstName =
                breedNameArr[1].charAt(0).toUpperCase() +
                breedNameArr[1].slice(1);
            const lastName =
                breedNameArr[0].charAt(0).toUpperCase() +
                breedNameArr[0].slice(1);
            let parsedBreedName = firstName + " " + lastName;
            return parsedBreedName;
        } else {
            let parsedBreedName =
                hyphenatedBreedName.charAt(0).toUpperCase() +
                hyphenatedBreedName.slice(1);
            return parsedBreedName;
        }
    }

    function getApiBreedName() {
        const currentUrl = window.location.href;
        const urlArr = currentUrl.split("breed-info/");
        let hyphenatedBreedName = urlArr[1];
        setApiBreedName(hyphenatedBreedName);
    }

    async function getBreedPhoto() {}

    useEffect(() => {
        setBreedName(getBreedName);
        getApiBreedName;
    }, []);

    return (
        <div>
            <div>
                {/* <h3 class='PageTitle'>{pet.breed}</h3> */}
                {/* sandwich icon here */}
                {breedName}
            </div>
            {/* <img> */}
            {/* dog image here */}
            {/* </img> */}
            {/* <p>description about breed goes here</p> */}
        </div>
    );
}
