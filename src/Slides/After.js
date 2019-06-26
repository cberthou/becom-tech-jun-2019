import React from 'react';
import Slide from '../Components/RevealComponents/Slide';

export default function After() {
    return (
        <Slide>
            <Slide>
                <h3>And after that ...</h3>
            </Slide>
            <Slide>
                <ul>
                    <li>Mutualizing data source using an proxy</li>
                    <li>Using GraphQL to easily unify dataSources</li>
                    <li>Adding proxy caches to speed up concurrent accesses</li>
                    <li>...</li>
                </ul>
            </Slide>
        </Slide>
    )
}
