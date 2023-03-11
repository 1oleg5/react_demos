import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import ApiService from "../Services/apiService";
import PostComponent from "../Components/PostComponent";

function Posts() {
    let apiService = new ApiService('posts');
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        apiService.getAllData().then(value => setPosts(value));
    }, []);
    return(
        <div>
            {
                posts.map(value => <PostComponent key={value.id} item={value}/>)
            }
            <Outlet/>
        </div>
    );
}
export default Posts;