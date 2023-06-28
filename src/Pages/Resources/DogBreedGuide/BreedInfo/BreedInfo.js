import React, { useEffect, useState } from "react";
import "./BreedInfo.css";
// import BreedInfoOverlay from "./BreedInfoOverlay/BreedInfoOverlay";
// import { parse } from "dotenv";
import { getBreedPhoto } from "../../../../utilities/dogs-utilities/dogs-api";

export default function BreedInfo() {
    const [breedName, setBreedName] = useState("");
    const [breedPicture, setBreedPicture] = useState("");

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
        const dogPhoto = await getBreedPhoto(hyphenatedBreedName);
        setBreedPicture(dogPhoto);
    }

    useEffect(() => {
        const name = getBreedName();
        setBreedName(name);
        getDogPhoto();
    }, []);

    return (
        <div className="Breed-Info-Header">
            <div className="Breed-Info-Header-Text">
                <h4>{breedName}</h4>
                <p>Written by: Dr. Scooby Doo D.V.M.</p>
            </div>
            {/* <img src={breedPicture} alt="This is the dog!" /> */}
        </div>
    );
}
