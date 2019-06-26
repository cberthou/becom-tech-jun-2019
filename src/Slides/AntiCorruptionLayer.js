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

const layoutReducer = `const layoutReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'layout.save':
            return { ...state, layout: action.layout };
            
        default:
            return state;
    }
}`;

const ACLLayout = `export const fetchLayout = async () => {
    const newsletters = exernalAPI.fetchNewsletters();
    const layout = {
        id: newsletters.id,
        themes: newsletters.themes.map(theme => theme.id)
    };
    
    dispatch({ type: 'layout.save', layout });
};`;

const ACLTheme= `export const fetchLayout = async () => {
    const newsletters = exernalAPI.fetchNewsletters();
    const themes = newsletters.themes.reduce((acc, theme) => ({
        ...acc,
        [theme.id]: {
            id: theme.id,
            newsletters: theme.newsletters.map(nl => nl.id)
        },
    });
    
    dispatch({ type: 'layout.save', layout });
};`;

export default function AntiCorruptionLayer() {
    return (
        <Slide>
            <Slide>
                <h3>Anti Corruption Layer (ACL)</h3>
            </Slide>
            <Slide>
                <h4>Role</h4>
                <p>
                    The ACL translates the external dataModel into your own data model.
                </p>
            </Slide>
            <Slide>
                <h4>Isolating concepts</h4>
                <JSON code={jsonModel}/>
            </Slide>
            <Slide>
                <h4>Isolating concepts</h4>
                <JSON code={jsonModel}/>
                <p>
                    Layout | Theme | Newsletter
                </p>
            </Slide>
            <Slide>
                <h4>Creating a reducer for each concept</h4>
                <JSX code={layoutReducer}/>
            </Slide>
            <Slide>
                <h4>Creating the ACL (layout)</h4>
                <JSX code={ACLLayout}/>
            </Slide>
            <Slide>
                <h4>Creating the ACL (theme)</h4>
                <JSX code={ACLTheme}/>
            </Slide>
            <Slide>
                <p>But we are doing multiple queries for the same data ...</p>
            </Slide>
        </Slide>
    )
}
