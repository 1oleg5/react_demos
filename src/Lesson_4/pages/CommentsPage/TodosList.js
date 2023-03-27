import React from "react";

export const TodosList = ({todosList = []}) => {
    return (
        <div>
            {todosList.map(item => (
                <div key={item.id}
                     style={{
                         display: 'flex',
                         flexDirection: 'column',
                         gap: '10',
                         background: 'lightgray'
                     }}>
                    <div>
                        <div>UserId: {item.UserId}</div>
                        <div>ID: {item.id}</div>
                        <div>Title: {item.title}</div>
                        <div>Status: {item.completed ? 'Completed' : 'Not done yet'}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}