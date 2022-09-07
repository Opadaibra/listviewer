import { useEffect, useState } from "react";
import PostList from "../View/Postslists";
import Postmodel from "../Models/postmodel";
const Posts = () => {
    const {iswating , servererror,posts} = Postmodel("https://jsonplaceholder.typicode.com/posts")
    return (
        <div>
            {iswating && <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>}
            {servererror && <h2> {servererror}</h2>}
            {posts && <PostList myposts={posts} />}
        </div>
    );
}

export default Posts;