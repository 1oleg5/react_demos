import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ApiService from "../Services/apiService";

export default function () {
    let [post, setPost] = useState({});
    let apiService = new ApiService('posts');
    let {id} = useParams();

    useEffect(() => {
        apiService.getSingleData(id).then(value => setPost(value));
    },[id])

    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
}