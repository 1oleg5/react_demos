import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsRequest} from "../../request/postsRequest";
import {RouterEndPoints} from "../../Routes/routes";

export const PostByComment = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (postId) {
            postsRequest.getPostById(postId).then(({data}) => setPost({...data}))
        }
    },[postId])
    if (!post) return null;
    return (
        <div style={{
            width: '100%', margin: '0 auto'
        }}>
            <div>PostID: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>
            <button onClick={() => navigate(`/${RouterEndPoints.comments}`)}>{'<'}Back</button>
        </div>
    );
}
