import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBreedList } from "../../../utilities/dogs-utilities/dogs-api";
import BreedNameAlphabetScroller from "./BreedNameAlphabetScroller/BreedNameAlphabetScroller";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export default function DogBreedGuide() {
    const [dogList, setDogList] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState("");
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
        if (selectedLetter) {
            const targetSection = document.getElementById(selectedLetter);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [selectedLetter]);

    return (
        <>
            <BreedNameAlphabetScroller setSelectedLetter={setSelectedLetter} />
            {Array.isArray(dogList)
                ? dogList.map((dog, index) => {
                      if (index === 0 || dog[0] !== dogLetter) {
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
                                  <>
                                      <h4 id={dog[0]}>{dog[0]}</h4>
                                      <Link
                                          key={`${firstNameLink}-${lastNameLink}-${index}`}
                                          to={`/resources/breed-guide/breed-info/${firstNameLink}-${lastNameLink}`}
                                          className="Breed-Guide-Link"
                                      >
                                          <p>{dog}</p>
                                      </Link>
                                  </>
                              );
                          } else {
                              const nameLink =
                                  dog.charAt(0).toLowerCase() + dog.slice(1);
                              return (
                                  <>
                                      <h4 id={dog[0]}>{dog[0]}</h4>
                                      <Link
                                          key={`${nameLink}-${index}`}
                                          to={`/resources/breed-guide/breed-info/${nameLink}`}
                                          className="Breed-Guide-Link"
                                      >
                                          <p>{dog}</p>
                                      </Link>
                                  </>
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
