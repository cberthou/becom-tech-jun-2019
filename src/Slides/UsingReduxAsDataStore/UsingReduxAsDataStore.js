import React from 'react';
import Slide from '../../Components/RevealComponents/Slide';
import JSX from '../../Components/Highlight/JSX';
import UsingReduxExample from './UsingReduxExample';

const dataStoreCode = `export default createStore(reducer);`;

const nlReducerCode = `const reducer = ({ state, action }) => {
    switch (action.type) {
        case 'newsletters.store':
            return { state, newsletters: action.newsletters };
        default:
            return state;
    }
};`;

const loadingData = `export const fetchNewsletters = () => async dispatch => {
    const newsletters = await getNewsletters();
    dispatch({ type: 'newsletters.store', newsletters });
};`;

const dataModel = `{
    "id": string,
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


const customHook =`const useNewsletters = () => {
    const newsletters = useSelector(state => state.newsletters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNewsletters());
    }, [ dispatch ]);

    return newsletters;
};`;

const componentWithCustomHook = `const CompWithCustomHook = ({ userIds }) => {
    const users = useUsers(userIds);
    
    return <UserList users={users} />
}`;

export default function UsingReduxAsDataStore() {
    return (
        <Slide>
            <Slide>
                <h3>Keep using redux as a data store</h3>
            </Slide>
            <Slide>
                <div>
                    <h4>Setting up redux</h4>
                    <JSX code={dataStoreCode} />
                    <JSX code={nlReducerCode} />
                </div>
            </Slide>
            <Slide>
                <div>
                    <h4>Loading data</h4>
                    <JSX code={loadingData} />
                </div>
            </Slide>
            <Slide>
                <p>Data Model</p>
                <JSX code={dataModel} />
            </Slide>
            <Slide>
                <div>
                    <h4>Creating a custom hook for data fetching</h4>
                    <JSX code={customHook}/>
                </div>
            </Slide>
            <Slide>
                <div>
                    <h4>Using the hook in a component</h4>
                    <JSX code={componentWithCustomHook} />
                </div>
            </Slide>
            <Slide>
                <UsingReduxExample />
            </Slide>
        </Slide>
    )
}
