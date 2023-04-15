import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {userService} from "../../services";
import User from "../User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, loading} = useSelector(state => state.users);
    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)));
        dispatch(userActions.getAll())
    }, []);
    return (
        <div>
            {loading && <h1>Loading.............</h1>}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;