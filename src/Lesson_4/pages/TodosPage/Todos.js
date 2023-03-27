import {useEffect, useState} from "react";
import {todosRequest} from "../../request/todosRequest";
import {TodosList} from "../CommentsPage/TodosList";

export const Todos = () => {
    const [todosList, setTodosList] = useState([]);
    useEffect(() => {
        todosRequest.getAll().then(({data}) => setTodosList([...data]))
    }, []);
    return (
        <div style={{width: '100%', margin: 'o auto'}}>
            <h1>Todos Page</h1>
            <TodosList todosList={todosList}/>
        </div>
    ); 
}