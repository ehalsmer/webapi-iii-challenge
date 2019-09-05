import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8001/posts')
        .then(response => {
            console.log(response)
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div>
            <h1>All Posts</h1>
            <h3>Test</h3>
            {posts.map((post) => <div>{post.text}</div>)}
        </div>
    )
}

export default PostList;