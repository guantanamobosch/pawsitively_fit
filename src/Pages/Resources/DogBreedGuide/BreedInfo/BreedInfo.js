import React, { useEffect, useState } from "react";
import "./BreedInfo.css";
import BreedInfoMenu from "./BreedInfoMenu/BreedInfoMenu";
// import BreedInfoOverlay from "./BreedInfoOverlay/BreedInfoOverlay";
// import { parse } from "dotenv";
import { getBreedPhoto } from "../../../../utilities/dogs-utilities/dogs-api";
import GeneralCare from "./GeneralCare/GeneralCare";
import Health from "./Health/Health";
import Feeding from "./Feeding/Feeding";
import BehaviorAndTraining from "./BehaviorAndTraining/BehaviorAndTraining";
import Grooming from "./Grooming/Grooming";
import FAQs from "./FAQs/FAQs";

export default function BreedInfo() {
    const [breedName, setBreedName] = useState("");
    const [breedPicture, setBreedPicture] = useState("");
    const [selectedMenuOption, setSelectedMenuOption] =
        useState("General Care");

    const options = [
        "General Care",
        "Health",
        "Feeding",
        "Behavior & Training",
        "Grooming",
        "FAQs",
    ];

    function MenuSelection() {
        if (selectedMenuOption === options[0]) {
            return <GeneralCare />;
        } else if (selectedMenuOption === options[1]) {
            return <Health />;
        } else if (selectedMenuOption === options[2]) {
            return <Feeding breedName={breedName} />;
        } else if (selectedMenuOption === options[3]) {
            return <BehaviorAndTraining breedName={breedName} />;
        } else if (selectedMenuOption === options[4]) {
            return <Grooming />;
        } else if (selectedMenuOption === options[5]) {
            return <FAQs />;
        }
    }

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
        <div className="Breed-Info-Container">
            <div className="Breed-Info-Header">
                <div className="Breed-Info-Header-Text">
                    <h2>{breedName}</h2>
                    <p>Written by: Dr. Scooby Doo D.V.M.</p>
                </div>
                <BreedInfoMenu
                    options={options}
                    setSelectedMenuOption={setSelectedMenuOption}
                    selectedMenuOption={selectedMenuOption}
                />
                {/* <img src={breedPicture} alt="This is the dog!" /> */}
            </div>
            {MenuSelection()}
        </div>
    );
}
