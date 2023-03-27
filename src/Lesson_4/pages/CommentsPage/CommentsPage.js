import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsRequest} from "../../request/commentsRequest";
import {Comments} from "./Comments";

export const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsRequest.getAll().then(({data}) => setComments([...data]))
    }, []);
    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <h1>Comments Page</h1>
            <hr/>
            <Comments comments={comments}/>
            <hr/>
            <Outlet/>
        </div>
    );
}
