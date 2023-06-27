import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBreedList } from "../../../utilities/dogs-utilities/dogs-api";
import BreedNameAlphabetScroller from "./BreedNameAlphabetScroller/BreedNameAlphabetScroller";

export default function DogBreedGuide() {
    const [dogList, setDogList] = useState([]);
    const [selectedLetter, SetSelecterLetter] = useState("");
    let dogLetter = "";

    async function getDogList() {
        console.log(
            "📍 getDogList() func called from src/Pages/Resources/DogBreedGuide"
        );
        const dogs = await getBreedList();
        setDogList(dogs);
    }

    useEffect(() => {
        getDogList();
    }, []);

    return (
        <>
            <BreedNameAlphabetScroller />
            {Array.isArray(dogList)
                ? dogList.map((dog, index) => {
                      if (index === 0 || dog[0] != dogLetter) {
                          dogLetter = dog[0];
                          if (dog.includes(" ")) {
                              const nameArr = dog.split(" ");
                              const firstNameLink =
                                  nameArr[1].charAt(0).toLowerCase() +
                                  nameArr[1].slice(1);
                              const lastNameLink =
                                  nameArr[0].charAt(0).toLowerCase() +
                                  nameArr[0].slice(1);
                              return (
                                  <Link
                                      key={`${firstNameLink}-${lastNameLink}-${index}`}
                                      to={`/resources/breed-guide/breed-info/${firstNameLink}-${lastNameLink}`}
                                      className="Breed-Guide-Link"
                                  >
                                      <p id={dog[0]}>{dog}</p>
                                  </Link>
                              );
                          } else {
                              const nameLink =
                                  dog.charAt(0).toLowerCase() + dog.slice(1);
                              return (
                                  <Link
                                      key={`${nameLink}-${index}`}
                                      to={`/resources/breed-guide/breed-info/${nameLink}`}
                                  >
                                      <p id={dog[0]}>{dog}</p>
                                  </Link>
                              );
                          }
                      } else {
                          if (dog.includes(" ")) {
                              const nameArr = dog.split(" ");
                              const firstNameLink =
                                  nameArr[1].charAt(0).toLowerCase() +
                                  nameArr[1].slice(1);
                              const lastNameLink =
                                  nameArr[0].charAt(0).toLowerCase() +
                                  nameArr[0].slice(1);
                              return (
                                  <Link
                                      key={`${firstNameLink}-${lastNameLink}-${index}`}
                                      to={`/resources/breed-guide/breed-info/${firstNameLink}-${lastNameLink}`}
                                      className="Breed-Guide-Link"
                                  >
                                      <p>{dog}</p>
                                  </Link>
                              );
                          } else {
                              const nameLink =
                                  dog.charAt(0).toLowerCase() + dog.slice(1);
                              return (
                                  <Link
                                      key={`${nameLink}-${index}`}
                                      to={`/resources/breed-guide/breed-info/${nameLink}`}
                                  >
                                      <p>{dog}</p>
                                  </Link>
                              );
                          }
                      }
                  })
                : null}
        </>
    );
}
