import React, {useEffect, useState} from "react";
import Post from "./Components/Users/Post";
import {getUser, getUsers} from "./Components/Users/getPost";

function App() {
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);
    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, [])

    const choseUser = (id) => {
        getUser(id).then(value => setChosenUser(value));
    }

    return (<div>
            <div>{chosenUser?.body}</div>
            <hr/>
            {
                users.map(value => <Post
                    key={value.id}
                    item={value}
                    choseUser={choseUser}
                />)
            }

        </div>
    );
}

export default App;