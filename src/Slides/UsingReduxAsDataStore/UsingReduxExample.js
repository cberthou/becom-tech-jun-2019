import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import useNewsletters from './useNewsletters';
import Theme from './Components/Theme';

const UsingReduxExample = () => {
    const newsletters = useNewsletters();
    console.log(newsletters);
    const themes = newsletters.themes || [];
    return (
        <div>
            { themes.map((theme) => <Theme theme={theme} key={theme.id} />) }
        </div>
    );
};

export default () => (
    <Provider store={store}>
        <UsingReduxExample/>
    </Provider>
);
