import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Theme from './Components/Theme';
import useLayout from './useLayout';

const FlattenDataExample = () => {
    const layout = useLayout();
    const themes = layout.themes || [];
    console.log(layout);
    return (
        <div>
            { themes.map((theme) => <Theme theme={theme} key={theme} />) }
        </div>
    );
};

export default () => (
    <Provider store={store}>
        <FlattenDataExample/>
    </Provider>
);
