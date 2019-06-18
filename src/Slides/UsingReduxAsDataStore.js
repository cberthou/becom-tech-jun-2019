import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import JSX from '../Components/Highlight/JSX';

const dataStoreCode = `const reducer = combineReducers({ user: userReducer });
export default createStore(reducer);`;

const userReducerCode = `const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'user.store':
            return { ...state, ...action.users };
        case default:
            return state;
    }
}`;

const useSelectorCode = `const users = useSelector(state => state.user);`;
const useDispatchCode = `useDispatch({ type: 'store', users });`;

const customHookCode = `const useUsers = (ids = []) => {
    const users = useSelector(state => Object.values(state.user).filter(user => ids.includes[user.id]);
    
    // random fetching function
    fetchUsers(ids)
        .then(users => useDispatch({ type: 'user.store', users }));
    
    return users;
};`;

const componentWithCustomHook = `const CompWithCustomHook = ({ userIds }) => {
    const users = useUsers(userIds);
    
    return <UserList users={users} />
}`;

export default function UsingReduxAsDataStore() {
    return (
        <Slide>
            <Slide>
                <h3>Using redux as a data store</h3>
            </Slide>
            <Slide>
                <div>
                    <h4>Setting up redux</h4>
                    <JSX code={dataStoreCode} />
                    <JSX code={userReducerCode} />
                </div>
            </Slide>
            <Slide>
                <div>
                    <h4>React-Redux hooks</h4>
                    <p>Retrieving data from store</p>
                    <JSX code={useSelectorCode} />
                    <p>Storing data to the store</p>
                    <JSX code={useDispatchCode} />
                </div>
            </Slide>
            <Slide>
                <div>
                    <h4>Creating a custom hook for data fetching</h4>
                    <JSX code={customHookCode} />
                </div>
            </Slide>
            <Slide>
                <div>
                    <h4>Using the hook in a component</h4>
                    <JSX code={componentWithCustomHook} />
                </div>
            </Slide>
        </Slide>
    )
}
