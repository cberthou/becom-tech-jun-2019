import React from 'react';
import Slide from '../Components/RevealComponents/Slide';

export default function CentralizedStore() {
    return (
        <Slide>
            <Slide>
                <h3>Using a centralized store</h3>
            </Slide>
            <Slide>
                <h4>Advantages</h4>
                <ul>
                    <li>Using a centralized store helps you manage request concurrency</li>
                    <li>Using a centralized store makes your resources available everywhere in your app</li>
                </ul>
            </Slide>
            <Slide>
                <h4>Drawbacks</h4>
                <ul>
                    <li>A poorly managed store may become a pain to manage</li>
                    <li>It main become hard to scale through your app if not crafted carefully</li>
                </ul>
            </Slide>
        </Slide>
    )
}
