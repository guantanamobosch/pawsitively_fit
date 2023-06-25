import { json } from "react-router-dom";
import { sendRequest } from "../send-request";
const breedListUrl = "https://dog.ceo/api/breeds/list/all";

export async function getBreedList() {
    console.log(
        "📍 getBreedList() func called from src/utilities/dogs-utilities/dogs-api"
    );
    const parsedBreedList = await sendRequest(breedListUrl);
    const breedsObject = parsedBreedList.message;
    // console.log(parsedBreedList);
    // console.log(breedsObject);
    const breedList = [];

    Object.keys(breedsObject).forEach(function (key, index) {
        if (key === "australian") {
            breedList.push("Australian Shepherd");
        } else if (key === "mexicanhairless") {
            breedList.push("Mexican Hairless");
        } else if (key === "germanshepherd") {
            breedList.push("German Shepherd");
        } else if (key === "finnish") {
            breedList.push("Finnish Lapphund");
        } else if (breedsObject[key].length === 0) {
            let capitalizedName = key.charAt(0).toUpperCase() + key.slice(1);
            breedList.push(capitalizedName);
        } else {
            let capitalizedLastName =
                key.charAt(0).toUpperCase() + key.slice(1);
            for (let i = 0; i < breedsObject[key].length; i++) {
                const joinedBreedName =
                    breedsObject[key][i].charAt(0).toUpperCase() +
                    breedsObject[key][i].slice(1) +
                    " " +
                    capitalizedLastName;
                breedList.push(joinedBreedName);
            }
        }
    });

    // console.log(breedList);

    return breedList.sort();
}
