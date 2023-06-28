import React from "react";
import "./Feeding.css";

export default function Feeding({ breedName }) {
    return (
        <div className="Feeding-Container">
            <h3>Feeding Guide:</h3>
            <p>
                Quisque laoreet augue eget nisl viverra tristique sed eu est.
                Donec accumsan interdum massa, id fringilla nibh congue at.
                Phasellus auctor consectetur ultricies. Pellentesque et lorem
                non libero scelerisque imperdiet.
            </p>
            <h3>How much should I feed my {breedName}</h3>
            <p>
                Etiam varius massa in nisl placerat, eget viverra urna finibus.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
            </p>
            <h3>Nutritional Tips:</h3>
            <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Suspendisse iaculis, diam eget mollis
                aliquam, ipsum dolor facilisis arcu, nec hendrerit erat ex ut
                arcu. Quisque laoreet augue eget nisl viverra tristique sed eu
                est. Donec accumsan interdum massa, id fringilla nibh congue at.
            </p>
        </div>
    );
}
