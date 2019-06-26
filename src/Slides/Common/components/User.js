import React from 'react';

export default function User({ user }) {
    return (
        <div>
            {user.name.title} {user.name.first} {user.name.last}
        </div>
    );
}
