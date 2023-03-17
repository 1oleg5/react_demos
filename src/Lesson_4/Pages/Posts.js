import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import ApiService from "../Services/ApiService";
import PostComponent from "../Components/PostComponent";

export default function Posts() {
    let apiService = new ApiService('posts');
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        apiService.getAllData().then(value => setPosts(value));
    }, []);
    return (
        <div>
            <Outlet/>
            ------------------------------------------------------------------------------------------
            {
                posts.map(value => <PostComponent key={value.id} item={value}/>)
            }
        </div>
    );
}