import React from 'react';
import {useForm} from "react-hook-form";
import {commentsRequests} from "./commentsRequest";


export const CommentsForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValis}} = useForm({
        mode: 'all',
    })

    const submit = async (data) =>{
        await commentsRequests.addComment(data).then(({data}) => setComments((prevState) => [...prevState, data]));
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name" {...register('name')}/>
            <button>Create new comment</button>
        </form>
    )
}