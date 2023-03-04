import React from 'react';

export const Users = ({users}) => {
    return (
        <div>
            {users.map(item => {
            const {id, username} = item;
            return (
                <div key={id}>
        {id} --- {username}
            </div>
            )
        })}
        </div>
    )
}