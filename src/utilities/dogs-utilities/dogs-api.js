import { json } from "react-router-dom";
import { sendRequest } from "../send-request";
const breedListUrl = "https://dog.ceo/api/breeds/list/all";

export async function getBreedList() {
    const parsedBreedList = await JSON.parse(sendRequest(breedListUrl));
    const breedsObject = parsedBreedList.message;
    const breedList = [];

    Object.keys(breedsObject).forEach(function (key, index) {
        const breedTypes = breedsObject[key].length;
        if (breedTypes === 0) {
            breedList.push(key);
        } else {
            for (let i = 0; i < breedTypes; i++) {
                const joinedBreedName = breedsObject[key][i] + key;
                breedList.push(joinedBreedName);
            }
        }
    });
}
