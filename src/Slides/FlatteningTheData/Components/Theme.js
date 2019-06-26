import React from 'react';
import Newsletter from './Newsletter';
import useThemes from '../useThemes';

const Theme = ({ theme }) => {
    const themes = useThemes();
    return (
        <div>
            <h5>{themes[theme] && themes[theme].title}</h5>
            {themes[theme] && themes[theme].newsletters.map((nl) => <Newsletter key={nl} nl={nl}/>)}
        </div>
    );
};

export default Theme;
