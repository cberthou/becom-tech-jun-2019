import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import JSX from '../Components/Highlight/JSX';

const singleFetch = `const singleFetch = (callback) => {
    const cached = {};
    return (arg) => {
        if (cached[arg]) {
            return cached[arg];
        }
        cached[arg] = callback(arg);
        return cached[arg];
    }
}`;

const timedExpiration = `const singleFetch = (callback, expiration = 5000) => {
    const cached = {};
    return (arg) => {
        if (cached[arg] && cached[arg].timestamp > Date.now() - expiration) {
            return cached[arg].response;
        }
        cached[arg] = {
            response: callback(arg),
            timestamp: Date.now()
        }
        return cached[arg].response;
    }
}`;

export default function CachingData() {
    return (
        <Slide>
            <Slide>
                <h3>Caching API data</h3>
            </Slide>
            <Slide>
                <h4>Caching policies</h4>
                <ul>
                    <li>Single fetch (memoization)</li>
                    <li>Timed expiration</li>
                </ul>
            </Slide>
            <Slide>
                <h4>Single fetch (memoization)</h4>
                <JSX code={singleFetch} />
            </Slide>

            <Slide>
                <h4>Timed expiration</h4>
                <JSX code={timedExpiration} />
            </Slide>
        </Slide>
    )
}
