import React, { useEffect, useState } from "react";
import "./BreedInfo.css";
import BreedInfoOverlay from "./BreedInfoOverlay/BreedInfoOverlay";

export default function BreedInfo() {
    const [breedName, setBreedName] = useState("");

    function getBreedName() {
        const currentUrl = window.location.href;
        const urlArr = currentUrl.split("breed-info/");
        let breedName = urlArr[1];
        if (breedName.includes("-")) {
            const breedNameArr = breedName.split("-");
            const firstName =
                breedNameArr[1].charAt(0).toUpperCase() +
                breedNameArr[1].slice(1);
            const lastName =
                breedNameArr[0].charAt(0).toUpperCase() +
                breedNameArr[0].slice(1);
            breedName = firstName + " " + lastName;
            return breedName;
        } else {
            breedName = breedName.charAt(0).toUpperCase + breedName.slice(1);
            return breedName;
        }
    }

    useEffect(() => {
        setBreedName(getBreedName);
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
