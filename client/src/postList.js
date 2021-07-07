import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ehalsmer-blog.herokuapp.com/posts")
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>All Posts</h1>
      <Card.Group itemsPerRow='3'>
        {posts.map(post => (
          <Card raised className='post-card'><p>{post.text}</p></Card>
        ))}
      </Card.Group>
    </>
  );
};

export default PostList;
