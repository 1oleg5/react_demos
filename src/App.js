import React from 'react';
import {UsersForm} from "./Components/Lesson_3/Components/usersForm/usersForm";
import {Users} from "./Components/Lesson_3/Components/Users/Users";
import {useEffect, useState} from "react";
import {usersRequests} from "./Components/Lesson_3/userRequests";

export default function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersRequests.getAll().then(({data}) => setUsers([...data]))
    },[])

    return (
        <div style={{ textAlign: 'center'}}>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
}