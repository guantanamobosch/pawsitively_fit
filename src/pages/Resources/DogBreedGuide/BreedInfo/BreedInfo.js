import React, { useEffect, useState } from "react";
import "./BreedInfo.css";
import BreedInfoOverlay from "./BreedInfoOverlay/BreedInfoOverlay";
import { parse } from "dotenv";

export default function BreedInfo() {
    const [breedName, setBreedName] = useState("");

    function parseBreedUrl() {
        const currentUrl = window.location.href;
        const urlArr = currentUrl.split("breed-info/");
        let hyphenatedBreedName = urlArr[1];
        return hyphenatedBreedName;
    }

    function getBreedName() {
        let hyphenatedBreedName = parseBreedUrl();
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

    async function getDogPhoto() {
        let hyphenatedBreedName = parseBreedUrl();
    }

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
