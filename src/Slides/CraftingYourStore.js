import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import JSON from '../Components/Highlight/JSON';
import JSX from '../Components/Highlight/JSX';

const jsonModel = `{
    "id": "string",
    "themes": [
        {
            "id": "string",
            "title": "string",
            "newsletters": [
                {
                    "id": "string",
                    "title": "string",
                    "description": "string"
                }
            ]
        }
    ]
}`;

const reducer = `const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'newsletters.save':
            return { ...state, newsletters: action.newsletters };
            
        default:
            return state;
    }
}`;

const thunk = `const fetchNewsletters = () => async dispatch => {
    const newsletters = await getNewsletters();
    
    dispatch({ type: 'newsletters.save', newsletters });
}`;

export default function CraftingYourStore() {
    return (
        <Slide>
            <Slide>
                <h3>Crafting your store</h3>
            </Slide>
            <Slide>
                <h4>Context</h4>
                <p>
                    You may encounter badly crafted api that makes your data messy
                </p>
            </Slide>
            <Slide>
                <h4>Example data model from the API</h4>
                <JSON code={jsonModel}/>
            </Slide>
            <Slide>
                <h4>Example with Redux (reducer)</h4>
                <JSX code={reducer}/>
            </Slide>
            <Slide>
                <h4>Example with Redux (thunk)</h4>
                <JSX code={thunk}/>
            </Slide>
            <Slide>
                <h4>Major Drawbacks</h4>
                <ul>
                    <li>Our data is strongly coupled with the server data</li>
                    <li>Our data are not easy to use as they are nested</li>
                </ul>
            </Slide>
        </Slide>
    )
}
