import React from 'react';
import {UsersForm} from "./Components/Lesson_3/Components/usersForm/usersForm";
import {Users} from "./Components/Lesson_3/Components/Users/Users";
import {useEffect, useState} from "react";
import {usersRequests} from "./Components/Lesson_3/userRequests";
import {Comments} from "./Components/Lesson_3/Components/Comments/Comments";
import {CommentsForm} from "./Components/Lesson_3/Components/Comments/CommentsForm";
import {commentsRequests} from "./Components/Lesson_3/Components/Comments/commentsRequest";

export default function App() {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     usersRequests.getAll().then(({data}) => setUsers([...data]))
    // },[])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsRequests.getAll().then(({data}) => setComments([...data]))
    },[])

    return (
        <div style={{ textAlign: 'center'}}>
            {/*<UsersForm setUsers={setUsers}/>*/}
            {/*<hr/>*/}
            {/*<Users users={users}/>*/}
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
}