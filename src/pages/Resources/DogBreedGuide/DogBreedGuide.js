import { React, useState, useEffect } from "react";
import { getBreedList } from "../../../utilities/dogs-utilities/dogs-api";

export default function DogBreedGuide() {
    const [dogList, setDogList] = useState([]);

    async function getDogList() {
        console.log(
            "📍 getDogList() func called from src/Pages/Resources/DogBreedGuide"
        );
        const dogs = await getBreedList();
        setDogList(dogs);
        console.log(`dogList is: ${dogList}`);
    }

    useEffect(() => {
        getDogList();
    }, []);

    return (
        <>
            {Array.isArray(dogList)
                ? dogList.map((dog) => {
                      return <p>{dog}</p>;
                  })
                : null}
        </>
    );
}
