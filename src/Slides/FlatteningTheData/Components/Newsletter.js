import React from 'react';
import useNewsletters from '../useNewsletters';

const Newsletter = ({ nl }) => {
    const newsletters = useNewsletters();
    return (
        <div>
            {newsletters[nl] && newsletters[nl].title}
        </div>
    );
};

export default Newsletter;
