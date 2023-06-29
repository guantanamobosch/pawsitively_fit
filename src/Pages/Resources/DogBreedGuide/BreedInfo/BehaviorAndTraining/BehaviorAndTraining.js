import React from "react";
import "./BehaviorAndTraining.css";

export default function BehaviorAndTraining({ breedName }) {
    return (
        <div className="Behavior-And-Training-Container">
            <h3>Behavior And Training:</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                varius massa in nisl placerat, eget viverra urna finibus. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Suspendisse iaculis, diam eget mollis
                aliquam, ipsum dolor facilisis arcu, nec hendrerit erat ex ut
                arcu. Quisque laoreet augue eget nisl viverra tristique sed eu
                est. Donec accumsan interdum massa, id fringilla nibh congue at.
                Phasellus auctor consectetur ultricies. Pellentesque et lorem
                non libero scelerisque imperdiet. Aliquam maximus congue arcu.
            </p>
            <h3>Fun Activities for your {breedName}:</h3>
            <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                    Ut sit amet tortor rutrum tellus tristique bibendum at ut
                    tellus.
                </li>
                <li>
                    Suspendisse imperdiet libero ut tellus dapibus, sed mollis
                    nisl dictum.
                </li>
                <li>Duis accumsan diam quis mauris hendrerit laoreet.</li>
                <li>Donec auctor ex id facilisis pellentesque.</li>
            </ul>
        </div>
    );
}
