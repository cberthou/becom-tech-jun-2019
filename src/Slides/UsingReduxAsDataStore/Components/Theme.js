import React from 'react';
import Newsletter from './Newsletter';

const Theme = ({ theme }) => (
    <div>
        <h5>{theme.title}</h5>
        {theme.newsletters.map((nl) => <Newsletter key={nl.id} nl={nl} /> )}
    </div>
);

export default Theme;
