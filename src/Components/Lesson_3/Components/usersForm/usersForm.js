import React from 'react';
import {useForm} from "react-hook-form";
import {usersRequests} from "../../userRequests";


export const UsersForm = ({setUsers, users}) => {
    const {register, handleSubmit, reset, formState: {errors, isValis}} = useForm({
        mode: 'all',
    })

    const submit = async (data) =>{
        await usersRequests.createUsers(data).then(({data}) => setUsers((prevState) => [...prevState, data]));
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register('username')}/>
            <button>Create new user</button>
        </form>
    )
}