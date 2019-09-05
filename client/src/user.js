import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

const User = props => {
  const id = props.match.params.id;
  console.log("props", props);
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`https://ehalsmer-blog.herokuapp.com/users/${id}/`)
      .then(response => {
        console.log(response);
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://ehalsmer-blog.herokuapp.com/users/${id}/posts`)
      .then(response => {
        console.log(response);
        setUserPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {user && <h1>{user.name}</h1>}
      <Card.Group itemsPerRow="3">
        {userPosts.map(post => (
          <Card>
            <p>{post.text}</p>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export default User;
